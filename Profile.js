import React from 'react'
import Navbar from './Navbar'
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const Profile = () => {
  const [user, setUser] = useState(null);
  const { id } = useParams();
  const token = useSelector((state) => state.token);
  const getUser = async () => {
    const response = await fetch(`http://localhost:3001/users/${id}`, {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await response.json();
    console.log(data);
    setUser(data);
  };

  useEffect(() => {
    getUser();
  }, []); 

  if (!user) return null;

  return (
    <div>
      <Navbar/>
    <div class="row mt-5">
      <div class="col-lg-4">
        <div class="card mb-4">
          <div class="card-body text-center">
            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp" alt="avatar"
              class="rounded-circle img-fluid" style={{width: 150+'px'}}/>
            <h5 class="my-3">{user.firstName} {user.lastName}</h5>
            <p class="text-muted mb-4">{user.address}</p>
            
          </div>
        </div>
      </div>
      <div class="col-lg-8">
        <div class="card mb-4">
          <div class="card-body">
            <div class="row">
              <div class="col-sm-3">
                <p class="mb-0">UserId</p>
              </div>
              <div class="col-sm-9">
                <p class="text-muted mb-0">{user.id}</p>
              </div>
            </div>
            <hr/>
            <div class="row">
              <div class="col-sm-3">
                <p class="mb-0">Full Name</p>
              </div>
              <div class="col-sm-9">
                <p class="text-muted mb-0">{user.firstName} {user.lastName}</p>
              </div>
            </div>
            <hr/>
            <div class="row">
              <div class="col-sm-3">
                <p class="mb-0">Email</p>
              </div>
              <div class="col-sm-9">
                <p class="text-muted mb-0">{user.email}</p>
              </div>
            </div>
            <hr/>
            <div class="row">
              <div class="col-sm-3">
                <p class="mb-0">Phone</p>
              </div>
              <div class="col-sm-9">
                <p class="text-muted mb-0">{user.phone}</p>
              </div>
            </div>
            <hr/>
            <div class="row">
              <div class="col-sm-3">
                <p class="mb-0">Aadhar</p>
              </div>
              <div class="col-sm-9">
                <p class="text-muted mb-0">{user.adhaar} </p>
              </div>
            </div>
            <hr/>
            <div class="row">
              <div class="col-sm-3">
                <p class="mb-0">Address</p>
              </div>
              <div class="col-sm-9">
                <p class="text-muted mb-0">{user.address}</p>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  </div>

  )
}

export default Profile
