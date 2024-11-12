import React, { useState } from "react";
import "./LoginStyle.css";
import { useNavigate } from "react-router-dom";
export default function LoginPage() {
  let navigate = useNavigate();

  const [data, setData]=useState(
    {
            username:"",
            password:""
    }
  )
  function handleChange(e){
    e.preventDefault();
    setData({...data, [e.target.id]:e.target.value});
  }
  

  
  function handleSubmit(e) {
   
    
    if(data.username=='user' && data.password=='user'){
      
      localStorage.setItem("user",JSON.stringify(data));
        navigate("/admin");
        window.location.href='/Admin'
        console.log(data);
        
    }
    else{
        alert("invalid login.Plese Try again.");
        console.log("invalid login.Plese Try again.");
        
    }
  }

  return (
    <div className="loginP">
      <div className="container-login">
        <div className="inner-login">
          <div className="head-login">
            <h1>Login</h1>
          </div>
          <div className="ip-login">
            <div className="ip-1">
              <span>Username: </span>
              <input onChange={(e)=>handleChange(e)} id="username" value={data.username} type="text" placeholder="Enter Name" />
            </div>
            <div className="ip-2">
              <span>Password: </span>
              <input onChange={(e)=>handleChange(e)} id="password" value={data.password} type="password" placeholder="Enter Password" />
            </div>
          </div>
          <div className="btn-login">
            <button onClick={() => handleSubmit()} className="main-btn">
              Login
            </button>
            
          </div>
        </div>
      </div>
    </div>
  );
}

