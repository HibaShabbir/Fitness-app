import React, { useState } from "react";
import './Login.css';

const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform form validation
    if (!name || !email || !password) {
      alert("Please fill all fields.");
    } 
    
  };

  
  return (

    <div class="container">
      <div class="LeftDiv">
        <br></br>
      <img src="FitnessApps.gif" height="600px" width="500px"alt="fitness"></img>
      </div>

      <div class="RightDiv">
      <br></br>
      <br></br>
      <h1 class="header">FITNESS AND HEALTH APP</h1>
      
      <form onSubmit={handleSubmit}>

      <br></br>
        <h3>
          UserName:  &nbsp;&nbsp;
          <input
            type="text"
            value={name}
            onChange={handleNameChange}
          />
        </h3>

        <h3>
          Email:  &nbsp;&nbsp; &nbsp;&nbsp; &nbsp; &nbsp;
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
          />
        </h3>
       

        <h3>

          Password: 
        &nbsp;&nbsp;&nbsp;
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </h3>
        <br></br>
        
          <input
            type="checkbox"
            checked={rememberMe}
            onChange={(e) => setRememberMe(e.target.checked)}
          />
          <label>Remember Me</label>
          
        <br></br>
        <br></br>
        <button id="b1" type="submit">Login</button>
      </form>
      </div>

      </div>
    
  );
};

export default Login;
