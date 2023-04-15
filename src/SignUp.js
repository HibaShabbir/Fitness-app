import './SignUp.css';
import React, { useState } from 'react';


function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [disease, setDisease] = useState('');
  const [food, setFood] = useState('');
  const [error, setError] = useState(null);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleAgeChange = (e) => {
    setAge(e.target.value);
  };

  const handleHeightChange = (e) => {
    setHeight(e.target.value);
  };

  const handleWeightChange = (e) => {
    setWeight(e.target.value);
  };

  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };

  const handleDiseaseChange = (e) => {
    setDisease(e.target.value);
  };

  const handleFoodChange = (e) => {
    setFood(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform validation on fields
    if (email.trim() === '' || password.trim() === '' || gender.trim() === '' || height.trim() === '' || weight.trim() === '' || age.trim() === '' || gender.trim() === '') {
      setError('Please enter all the fields');
      return;
    }
  };

  return (
    <div className='SignUp'>
      <div className='container'>
      <h1>Login</h1><br></br>
        {error && <div className="error">{error}</div>}
        <div className='form-container'>
          <form onSubmit={handleSubmit}>

            <label>
              Email:
              <input type="email" value={email} onChange={handleEmailChange} /><br></br>
            </label>
            
            <label>
              Password:
              <input type="password" value={password} onChange={handlePasswordChange} /><br></br>
            </label>
            
            <label>
              Age:
              <input type="Age" value={email} onChange={handleAgeChange} /><br></br>
            </label>
            
            <label>
              Gender:
              <label for="male">&nbsp;&nbsp;&nbsp; Male</label>
              <input type="radio" id='gender' className='gender' value="male" checked={gender === 'male'} onChange={handleGenderChange}></input>

              <label for="female">Female</label>
              <input type="radio" id='gender' className='gender' value="female" checked={gender === 'female'} onChange={handleGenderChange}></input>
            </label><br></br>
            
            <label>
              Height:
              <input type="height" value={height} onChange={handleHeightChange} /><br></br>
            </label>
            
            <label>
              Weight (in kg):
              <input type="weight" value={weight} onChange={handleWeightChange} /><br></br>
            </label>
            
            <label>
              Disease (if any):
              <input type="disease" value={disease} onChange={handleDiseaseChange} /><br></br>
            </label>
            
            <label>
              Allergic to food (if any):
              <input type="food" value={food} onChange={handleFoodChange} /><br></br>
            </label><br></br>
        

            <button type="submit">Login</button><br></br>
          </form>
        </div>

        <div className='img-container'>
          <img src='Signup.gif' />
        </div>

      </div>
    </div>
  );
}

export default SignUp;


