import mongoose from "mongoose";

const complaintSchema = mongoose.Schema(
  {
    id: { 
      type: String,
      required:true,
    },
    userId: {
      type: String,
      required: true,
    },
    officer: {
      type: String, 
      required: true,
    },
    department:{
      type: String, 
      required: true,
    },
    district: {
      type: String,
      required: true,
      min: 2,
      max: 50,
    },
    state: {
      type: String,
      required: true,
      min: 2,
      max: 50,
    },
    subject:{
      type: String, 
      required: true,
    },
    description:{
      type:String,
      required: true,
    },
    history:{
      type: Array,
      default: [],
    },
    status:{
      type: Boolean,
      default:false,
    }
  },
  { timestamps: true }
);

const Complaint = mongoose.model("Complaint", complaintSchema);

export default Complaint;