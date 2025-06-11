import React from "react";
import "./Track.css";
import Navbar from './Navbar'
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Track() {

  const [complaint, setComplaint] = useState('');
  const [complaintId, setComplaintId] = useState('');
  const [data, setData] = useState([]);
  const { id } = useParams();
  const token = useSelector((state) => state.token);

  let length = data.length;

  const getComplaint = async (e) => {
    e.preventDefault();
    const response = await fetch(`http://localhost:3001/users/trackComplaint/${complaintId}`, {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    });
    const res = await response.json();
    setComplaint(res);
    setData(res.history);
    console.log(res);
  };

  return (
    <div>
      <Navbar />
      <div class="container my-5">
        <section class="text-center dark-grey-text mb-5">
          <div class="card">
            <div class="card-body rounded-top border-top p-5">
              <h3 class="font-weight-bold my-4">Track Status</h3>

              <form class="mb-4 mx-md-5" action="">
                <div class="row">
                  <div class="col-md-12 mb-4">
                    <input
                      type="text"
                      id="subject"
                      class="form-control"
                      placeholder="Complaint ID"
                      value={complaintId} 
                      onChange={(e)=>{setComplaintId(e.target.value)}}
                    />
                  </div>
                </div>

                <div class="text-center">
                  <button type="submit" class="btn btn-info btn-md btn-dark" onClick={getComplaint}>
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
      {complaint && <div class="container my-5">
        <section class="text-center dark-grey-text mb-5">
          <div class="card">
            <div class="card-body rounded-top border-top p-5">
              <h3 class="font-weight-bold my-4">Complaint Info</h3>
                  <div class="ag-courses_item">
                    <div class="ag-courses-item_link">
                      <div class="ag-courses-item_bg"></div>
                      <div class="ag-courses-item_date-box">
                        Department: 
                        <span class="ag-courses-item_date">{complaint.department}</span>
                      </div>
                      <div class="ag-courses-item_date-box">
                        Created At: 
                        <span class="ag-courses-item_date">{complaint.createdAt.slice(0, 10)}</span>
                      </div>
                      <div class="ag-courses-item_date-box">
                        Subject :
                        <span class="ag-courses-item_date">{complaint.description}</span>
                      </div>
                    </div>
                  </div>
              <br></br>
              <ul class="step-wizard-list">
                {data.map((person) => (
                  <li class="step-wizard-item">
                    <span class="progress-count"></span>
                    <span class="progress-label">{person.officer}</span>
                    <span class="progress-label">{person.district}</span>
                    <span class="progress-label">{person.state}</span>
                    <span class="progress-label">{person.date}</span>
                    <span class="progress-label">{person.time}</span>
                  </li>
                ))}
              </ul>
              <div class="text-center">
                <button class="btn btn-info btn-md btn-dark" >{(complaint.status) ? "Solved" : "Unsolved"}</button>
              </div>

            </div>
          </div>
        </section>
      </div>}
    </div>
  );
}
