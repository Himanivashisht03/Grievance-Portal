import User from "../models/User.js";
import Complaint from "../models/Complaint.js";
import { v4 as uuidv4 } from 'uuid';

let date_time = new Date();
let date = ("0" + date_time.getDate()).slice(-2);
let month = ("0" + (date_time.getMonth() + 1)).slice(-2);
let year = date_time.getFullYear();
let hours = date_time.getHours();
let minutes = date_time.getMinutes();
let seconds = date_time.getSeconds();


/* CREATE */
export const registerComplaint = async (req, res) => {
    try {
      const { userId, department, officer, subject, description, state, district } = req.body;
      const newComplaint = new Complaint({
        id: uuidv4(),
        userId,
        officer,
        department,
        district,
        state,
        subject,
        description,
        status: false,
        history: [{
          "officer": officer,
          "state": state,
          "district": district,
          date: date + "-" + month + "-" + year,
          time: hours + ":" + minutes + ":" + seconds,
        }],
      });
      await newComplaint.save();
  
      const complaint = await Complaint.find();
      res.status(201).json(complaint);
    } catch (err) {
      res.status(409).json({ message: err.message });
    }
};

/* READ */
export const getUser = async (req, res) => {
    try {
      const { id } = req.params;
      const user = await User.find({ id });
      res.status(200).json(user[0]);
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
};

export const getUserComplaints = async (req, res) => {
    try {
        const { userId } = req.params;
        const complaint = await Complaint.find({ userId });
        res.status(200).json(complaint);
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
};

export const trackComplaint = async(req, res) => {
  try{
      const { id } = req.params;
      const complaint = await Complaint.find({ id });
      res.status(200).json(complaint[0]);
  } catch (err) {
      res.status(404).json({ message: err.message });
  }
}