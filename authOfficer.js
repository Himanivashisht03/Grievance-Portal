import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import Officer from "../models/Officer.js";

/* Register Officer */
export const register = async (req, res) => {
    try {
      const {
        id,
        firstName,
        lastName,
        email,
        password,
        phone,
        adhaar,
        department,
        designation,
        district,
        state
      } = req.body;
  
      const salt = await bcrypt.genSalt();
      const passwordHash = await bcrypt.hash(password, salt);
  
      const newOfficer = new Officer({
        id,
        firstName,
        lastName,
        email,
        password: passwordHash,
        phone,
        adhaar,
        department,
        designation,
        district,
        state
      });
      const savedOfficer = await newOfficer.save();
      res.status(201).json(savedOfficer);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
};

/* LOGGING IN */
export const login = async (req, res) => {
    try {
      const { id, password } = req.body;
      const officer = await Officer.findOne({ id: id });
      if (!officer) return res.status(400).json({ msg: "officer does not exist. " });
  
      const isMatch = await bcrypt.compare(password, officer.password);
      if (!isMatch) return res.status(400).json({ msg: "Invalid credentials. " });
  
      const token = jwt.sign({ id: officer._id }, process.env.JWT_SECRET);
      delete officer.password;
      res.status(200).json({ token, officer });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };