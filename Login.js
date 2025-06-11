import React, { useContext } from 'react'
import axios from 'axios';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { authSlice, setLogin } from '../state';
export default function Login() {

	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [id, setId] = useState('');
	const [password, setPassword] = useState('');
	
	const handleLogin = async (e) => {
		try{
			e.preventDefault();
			const res = await axios.post("http://localhost:3001/authUser/login", {
				id, password
			})
			console.log(res.data);
			if (res.status == 200) {
				dispatch(
				  setLogin({
					user: res.data.user,
					token: res.data.token,
				  })
				);
				navigate(`/user/${id}`);
			  }
		} catch (e) {
			console.log(e)
		}
	};

  return (
    <section class="text-center" style={{"background-color":"#0a58ca", "padding":"50px"}}>
        
    <div class="card mx-4 mx-md-5 shadow-5-strong" style={{
            "padding":"48px 50px",
            "background": "hsla(0, 0%, 100%, 0.8)",
            "backdrop-filter": "blur(30px)"
            }}>
        <div class="card-body py-5 px-md-5">

        <div class="row d-flex justify-content-center">
            <div class="col-lg-8">
            <h2 class="fw-bold mb-5">Log In</h2>
            <form>
                <div class="form-outline mb-4">
                    <input type="text" id="form3Example3" class="form-control" value={id} onChange={(e)=>{setId(e.target.value)}}/>
                    <label class="form-label" for="form3Example3">UserId</label>
                </div>
                
                <div class="form-outline mb-4">
                <input type="password" id="form3Example4" class="form-control" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
                <label class="form-label" for="form3Example4">Password</label>
                </div>
                
                <input type="submit" class="btn btn-primary btn-block mb-4" value="Log In" onClick={handleLogin}/>
            </form>
            </div>
        </div>
        </div>
    </div>
    </section>
  )
}

