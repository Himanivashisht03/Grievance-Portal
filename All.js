import React from 'react'
import Navbar from './Navbar'
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Table from 'react-bootstrap/Table';

const All = () => {

    const [complaints, setComplaints] = useState(null);
    const { id } = useParams();
    const token = useSelector((state) => state.token);

    const getComplaints = async () => {
        const response = await fetch(`http://localhost:3001/users/${id}/userComplaints`, {
          method: "GET",
          headers: { Authorization: `Bearer ${token}` },
        });
        const data = await response.json();
        setComplaints(data);
        console.log(complaints);
    };
    
    useEffect(() => {
        getComplaints();
    }, []); 
    
    if (!complaints) return null;

  return (
    <div>
        <Navbar/>
        <Table striped bordered hover>
            <thead style={{"backgrounColor":'red', "color":'#000000'}}>
                <tr >
                <th>Complaint Id</th>
                <th>Department</th>
                <th>Officer</th>
                <th>Subject</th>
                <th>Description</th>    
                <th>Status</th>
                </tr>
            </thead>
            <tbody>
                {complaints.map(item => {
                return (
                    <tr key={item.id}>
                    <td>{ item.id }</td>
                    <td>{ item.department }</td>
                    <td>{ item.officer }</td>
                    <td>{ item.subject }</td>
                    <td>{ item.description }</td>
                    <td>{ item.status === true ? "Solved" : "Unsolved" }</td>
                    </tr>
                );
                })}
            </tbody>
        </Table>
    </div>
  )
}

export default All
