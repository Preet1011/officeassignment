import React, { useState } from "react";
import {Link, useNavigate} from 'react-router-dom'

import Axios from 'axios';
import Layout from "../Layout";
import toast from 'react-hot-toast';

 
function Register() {
  const navigate=useNavigate();
  const [user,setUser]=useState({
    name:"",
    email:"",
    password:"",
    phone:""
  });
  const {name,email,password,phone}=user;
  const onValChange=(e)=>{
    console.log(e.target.value)
    setUser({...user,[e.target.name]:e.target.value});
  }
  const handleSubmit=()=>{
    
    const {name,password,email,phone}=user;
    console.log(name,password,email,phone)
    if(name&&password&&email&&phone){
      Axios.post("http://localhost:4000/register",user).then(res=>{

       
          if(res && res.data.success){
          toast.success(res.data && res.data.message)
           navigate("/Login");
        }else{
           toast.error(res.data.message);
        }
      });
    }
    else{
      alert("Please enter details")
    }
  }

  return (
    <Layout>
   
  
    <div className="register-container">
      <form className="register" onSubmit={handleSubmit}>
      <h4 className="title">REGISTER FORM</h4>
      <div className="mb-3">
    <label htmlFor="exampleInputName1" className="form-label">Name</label>
    <input type="text" name="name" value={name} onChange={onValChange} className="form-control" id="exampleInputEmail1"   required/>
    
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
    <input type="email"  name="email"value={email} onChange={onValChange} className="form-control" id="exampleInputEmail1"  required/>
    
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" name="password" value={password} onChange={onValChange} className="form-control" id="exampleInputPassword1" required />
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPhone1" className="form-label">Phone</label>
    <input type="text" name="phone" value={phone} onChange={onValChange} className="form-control" id="exampleInputEmail1"  required />
    
  </div>
 
  <button type="submit" className="btn btn-success rounded-pill" onClick={handleSubmit}>Register</button>
  Already have account ?<Link to="/login"id="a"><b>Login</b></Link>
</form>

    
          
    </div>
    
    </Layout>
  );
}

export default Register;
