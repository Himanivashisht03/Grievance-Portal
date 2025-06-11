import React from 'react'
import Navbar from './Navbar'
import axios from 'axios';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';

const Register = () => {

  const { id } = useParams();
  const token = useSelector((state) => state.token);
  const navigate = useNavigate();
  const [department, setDepartment] = useState('Electricity');
  const [officer, setOfficer] = useState('');
  const [district, setDistrict] = useState('');
  const [state, setState] = useState('');
  const [subject, setSubject] = useState('');
	const [description, setDescription] = useState('');

  const handleDepartment = (e) => {
    setDepartment(e.target.value);
  }
  const handleOfficer = (e) => {
    setOfficer(e.target.value);
  }
  
  const handleSubmit = async (e) => {
		try{
			e.preventDefault();
			const res = await axios.post("http://localhost:3001/users/ak18/registerComplaint", {
				userId: id, department, officer, subject, description, state, district
			}, {
        headers: {
          'Authorization': `Bearer ${token}` 
        }
      })
			console.log(res.data);
      navigate(`/user/${id}/all`);
		} catch (e) {
			console.log(e)
		}
	};


  return (
    <div>
      <Navbar/>
      <div class="container my-5">
      <section class="text-center dark-grey-text mb-5">

        <div class="card">
          <div class="card-body rounded-top border-top p-5">
            
            <h3 class="font-weight-bold my-4">Register Grievance</h3>

            <form class="mb-4 mx-md-5" action="">

              <div class="row md-4">
                <div class="col-md-6 mb-4">
                  <div class="btn-group ">
                    <Form.Select label="Select Department" style={{"background": "#000000", "color": "#ffffff" }} onChange={handleDepartment}>
                      <option style = {{"color": "#ffffff"}}>Select Department</option>
                      <option style = {{"color": "#ffffff"}} value="Electricity">Electricity</option>
                      <option style = {{"color": "#ffffff"}} value="Water">Water</option>
                      <option style = {{"color": "#ffffff"}} value="Education">Education</option>
                      <option style = {{"color": "#ffffff"}} value="Public Transport">Public Transport</option>
                      <option style = {{"color": "#ffffff"}} value="Healthcare">Healthcare</option>
                      <option style = {{"color": "#ffffff"}} value="Infrastructure">Infrastructure</option>
                      <option style = {{"color": "#ffffff"}} value="Inflation">Inflation</option>
                      <option style = {{"color": "#ffffff"}} value="Others">Education</option>
                    </Form.Select >
                </div>
                </div>
                <div class="col-md-6 mb-4">
                <div class="btn-group">
                    <Form.Select aria-label="Default select example" style={{"background": "#000000", "color": "#ffffff"}} onChange={handleOfficer} >
                      <option style = {{"color": "#ffffff"}}>Select Officer</option>
                      <option style = {{"color": "#ffffff"}} value="Lower Clerk">Lower Clerk</option>
                      <option style = {{"color": "#ffffff"}} value="Upper Clerk">Upper Clerk</option>
                      <option style = {{"color": "#ffffff"}} value="Assisstant section Officer">Assisstant section Officer</option>
                      <option style = {{"color": "#ffffff"}} value="Section Officer">Section Officer</option>
                      <option style = {{"color": "#ffffff"}} value="Under Secretary">Under Secretary</option>
                      <option style = {{"color": "#ffffff"}} value="Joint secretary">Joint secretary</option>
                      <option style = {{"color": "#ffffff"}} value="Secretary">Secretary</option>
                      <option style = {{"color": "#ffffff"}} value="Minister">Minister</option>
                      <option style = {{"color": "#ffffff"}} value="Cabinet Minister">Cabinet Minister</option>
                    </Form.Select>
                </div>
                </div>
              </div>

              <div class="row">
                <div class="col-md-12 mb-4">
                  <input type="text" id="subject" class="form-control" placeholder="State" value={state} onChange={(e)=>{setState(e.target.value)}}/>
                </div>
                <div class="col-md-12 mb-4">
                  <input type="text" id="subject" class="form-control" placeholder="District" value={district} onChange={(e)=>{setDistrict(e.target.value)}}/>
                </div>
              </div>

              <div class="row">
                <div class="col-md-12 mb-4">
                  <input type="text" id="subject" class="form-control" placeholder="Subject of the grievance" value={subject} onChange={(e)=>{setSubject(e.target.value)}}/>
                </div>
              </div>

              <div class="row">
                <div class="col-md-12">
                  <div class="form-group mb-4">
                    <textarea class="form-control rounded" id="message" rows="3" placeholder="Enter the greivance" value={description} onChange={(e)=>{setDescription(e.target.value)}}></textarea>
                  </div>

                  <div class="text-center">
                    <button type="submit" class="btn btn-info btn-md btn-dark" onClick={handleSubmit}>Submit</button>
                  </div>

                </div>
              </div>

            </form>
            
          </div>
        </div>

      </section>

    </div>
    </div>
  )
}

export default Register
