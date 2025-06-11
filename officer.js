import Officer from "../models/Officer.js";
import Complaint from "../models/Complaint.js";

let date_time = new Date();
let date = ("0" + date_time.getDate()).slice(-2);
let month = ("0" + (date_time.getMonth() + 1)).slice(-2);
let year = date_time.getFullYear();
let hours = date_time.getHours();
let minutes = date_time.getMinutes();
let seconds = date_time.getSeconds();

/* READ */
export const getOfficer = async (req, res) => {
    try {
      const { id } = req.params;
      const officer = await Officer.find({ id });
      res.status(200).json(officer);
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
};

export const getOfficerComplaints = async (req, res) => {
  try {
    const { designation, department, state, district } = req.body;
    const complaint = await Complaint.find({ 
      "officer": `${designation}`, 
      "department": `${department}`, 
      "state":  `${state}`,
      "district":  `${district}` 
    });
    res.status(200).json(complaint);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

/* UPDATE */
export const solveComplaint = async (req, res) => {
  try{
    const { id, status, forwardTo, state, district } = req.body;
    const updatedComplaint = await Complaint.findOneAndUpdate(
      {"id": id},
      {
        "status": status,
        "officer": forwardTo,
        $push: {
          "history":{
            "officer": forwardTo,
            "state": state,
            "district": district,
            "date": date + "-" + month + "-" + year,
            "time": hours + ":" + minutes + ":" + seconds,
          }
        } 
      }
    );
    res.status(200).json(updatedComplaint); 
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
}