import React,{useState}from 'react'
import Layout from '../Layout'
import Axios from 'axios';
import {useNavigate} from 'react-router-dom'
import toast from 'react-hot-toast';



const Login = () => {
 
  const navigate=useNavigate();
  const [user,setUser]=useState({
    email:"",
    password:"",
  });
  const {email,password}=user;
  const onValChange=(e)=>{
    setUser({...user,[e.target.name]:e.target.value});
  }
  
    
    const handleSubmit = () => {
      const {email,password}=user;
      
      if(email&&password){
        Axios.post("http://localhost:4000/login",user).then(res=>{
          console.log(res)
  
        if(res.data.message==="Login Successfully"){

          console.log("login")
          toast.success(res.data.message);
         
        
            navigate("/todolist");
             
          }else{
            toast.error(res.data.message);
            console.log("not login")
         }
        });
      }
      else{
        alert("Please enter details")
      }
      
  
      
    };
  return (
    <div>
      <Layout>
   
  
   <div className="register-container">
     <form className="register" >
     <h4 className="title">LOGIN FORM</h4>
     
 <div className="mb-3">
   <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
   <input type="email"  name="email"value={email} onChange={onValChange} className="form-control" id="exampleInputEmail1"  required/>
   
 </div>
 <div className="mb-3">
   <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
   <input type="password" name="password" value={password} onChange={onValChange} className="form-control" id="exampleInputPassword1" required />
 </div>
 

 <div type="submit" className="btn btn-outline-dark rounded-pill" onClick={handleSubmit}>LOGIN</div>
 
</form>

   
         
   </div>
   
   </Layout>
    </div>
  )
}

export default Login