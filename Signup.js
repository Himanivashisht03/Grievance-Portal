import React from 'react'
import axios from 'axios';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authSlice, setLogin } from '../state';
import { useNavigate } from 'react-router-dom';

const Signup = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [id, setId] = useState('');
	const [password, setPassword] = useState('');
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [email, setEmail] = useState('');
	const [address, setAddress] = useState('');
	const [phone, setPhone] = useState('');
	const [adhaar, setAadhar] = useState('');

    const handleSignup = async (e) => {
		try{
            e.preventDefault();
			const res = await axios.post("http://localhost:3001/authUser/register", {
				id, password, firstName, lastName, email, address, phone, adhaar
			})
			console.log(res);
            if (res.status == 201) {
				navigate('/Login');
			}
		} catch (e) {
			console.log(e)
		}
	}

  return (
    <section class="text-center" style={{"background-color":"#0a58ca", "padding":"50px"}}>
        
    <div class="card mx-4 mx-md-5 shadow-5-strong" style={{
            "padding":"0 50px",
            "background": "hsla(0, 0%, 100%, 0.8)",
            "backdrop-filter": "blur(30px)"
            }}>
        <div class="card-body py-5 px-md-5">

        <div class="row d-flex justify-content-center">
            <div class="col-lg-8">
            <h2 class="fw-bold mb-5">Sign up now</h2>
            <form>
                <div class="form-outline mb-4">
                    <input type="text" id="form3Example3" class="form-control" value={id} onChange={(e)=>{setId(e.target.value)}}/>
                    <label class="form-label" for="form3Example3">UserId</label>
                </div>
                <div class="row">
                <div class="col-md-6 mb-4">
                    <div class="form-outline">
                    <input type="text" id="form3Example1" class="form-control" value={firstName} onChange={(e)=>{setFirstName(e.target.value)}}/>
                    <label class="form-label" for="form3Example1">First name</label>
                    </div>
                </div>
                <div class="col-md-6 mb-4">
                    <div class="form-outline">
                    <input type="text" id="form3Example2" class="form-control" value={lastName} onChange={(e)=>{setLastName(e.target.value)}}/>
                    <label class="form-label" for="form3Example2">Last name</label>
                    </div>
                </div>
                </div>
                <div class="form-outline mb-4">
                <input type="email" id="form3Example3" class="form-control" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
                <label class="form-label" for="form3Example3">Email address</label>
                </div>     
                <div class="form-outline mb-4">
                    <input type="text" id="form3Example3" class="form-control" value={phone} onChange={(e)=>{setPhone(e.target.value)}}/>
                    <label class="form-label" for="form3Example3">Phone</label>
                </div>   
                <div class="form-outline mb-4">
                    <input type="text" id="form3Example3" class="form-control" value={address} onChange={(e)=>{setAddress(e.target.value)}}/>
                    <label class="form-label" for="form3Example3">Address</label>
                </div>      
                <div class="form-outline mb-4">
                    <input type="text" id="form3Example3" class="form-control" value={adhaar} onChange={(e)=>{setAadhar(e.target.value)}}/>
                    <label class="form-label" for="form3Example3">Aadhar Number</label>
                </div>        
                <div class="form-outline mb-4">
                <input type="password" id="form3Example4" class="form-control" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
                <label class="form-label" for="form3Example4">Password</label>
                </div>
                
                <input type="submit" class="btn btn-primary btn-block mb-4" value="Sign Up" onClick={handleSignup}/>
            </form>
            </div>
        </div>
        </div>
    </div>
    </section>
  )
}

export default Signup
