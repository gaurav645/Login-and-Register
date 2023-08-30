
import React, { useState } from 'react'
import { NavLink, useNavigate} from 'react-router-dom';
import './Login.css';


const Login = () => {
  
  const navigate = useNavigate(); 
const [email, setEmail] = useState('');

const [password,setPassword] = useState('');


const loginUser = async (e) => {
  e.preventDefault();
  
  try {
    const response = await fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    if (!response.ok) {
      throw new Error('Login failed');
    }

    const data = await response.json();

    if (response.status === 402 || !data) {
      window.alert('Invalid Credentials');
    } else {
      window.alert('Successful Login');
      navigate('/'); 
    }
  } catch (error) {
    console.error('Error during login:', error);
    window.alert('Login Failed: Invalid Credentials');
    
  }
};



  return (
  <>


<div className="login-container">

  
     <form method="POST" className='register-form' id='register-form'>
  <div class="form-group">
    <label for="exampleInputEmail1">Email </label>
    <input type="email" class="form-control" name = "email" id="exampleInputEmail1" aria-describedby="emailHelp" 
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    
    placeholder="Enter Email"/>

  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" name = "password" id="exampleInputPassword1" 
      value={password}
    onChange={(e) => setPassword(e.target.value)}
    placeholder="Password"/>
  </div>
  
  <button type="submit" class="btn btn-primary" value="Log In" onClick={loginUser}>Login</button>
</form>
<div className='img-src1'>
  <NavLink to = '/signup' className='abcd1'>Create Account</NavLink>
</div>
</div>
  </>
  )
}

export default Login