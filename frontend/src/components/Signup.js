import React, {useState} from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './Signup.css';

const Signup = () => {

  const navigate = useNavigate(); 

  const [user,setUser] = useState({
    name:"",email:"",phone:"",work:"",password:"",cpassword:""
  });

  let name, value;

const handleInputs = (e) =>{
  console.log(e);
  name = e.target.name;
  value = e.target.value;


  setUser({...user,[name]:value});
}



const PostData = async (e) => {
  e.preventDefault();

  const { name, email, phone, work, password, cpassword } = user;

  try {
    const response = await fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        work,
        password,
        cpassword,
      }),
    });

    if (!response.ok) {
      throw new Error("Registration failed");
    }

    const data = await response.json();

    if (response.status === 402 || !data) {
      window.alert("Invalid Registration");
    } else {
      window.alert("Successful Registration");
     navigate('/login') 
    }
  } catch (error) {
    console.error("Error during registration:", error);
    window.alert("Registration Failed: Something went wrong");
  }
};

 


  
  return (
   <>

<div className="login-container1">

    <form method="POST">
    <div class="form-group">
    <label for="exampleInputEmail1">Enter Name</label>
    <input type="text" class="form-control" name = "name" id="exampleInputEmail1" aria-describedby="emailHelp"  
    value={user.name}
    onChange={handleInputs}
    placeholder="Enter Name"/>

  </div>

  <div class="form-group">
    <label for="exampleInputEmail1">Email </label>
    <input type="email" class="form-control" name = "email"id="exampleInputEmail1" aria-describedby="emailHelp"  
      value={user.email}
    onChange={handleInputs}
    placeholder="Enter Email"/>

  </div>

  <div class="form-group">
    <label for="exampleInputMobile">Mobile Number</label>
    <input type="text" class="form-control" name = "phone" id="exampleInputNumber" aria-describedby="emailHelp"  
      value={user.phone}
    onChange={handleInputs}
    placeholder="Enter Mobile Number"/>
 </div>


  <div class="form-group">
    <label for="exampleInputWork">Work-Proffesion</label>
    <input type="text" class="form-control" name = "work"id="exampleInputWork" aria-describedby="emailHelp"  
      value={user.work}
    onChange={handleInputs}
    placeholder="Enter Work Proffesion"/>

  </div>
  
  
  

 <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" name = "password" id="exampleInputPassword1"  
      value={user.paasword}
    onChange={handleInputs}
    placeholder="Enter Password"/>
  </div>

  <div class="form-group">
    <label for="exampleInputPassword1">Confirm Password</label>
    <input type="password" class="form-control" name = "cpassword" id="exampleInputPassword1"  
      value={user.cpassword}
    onChange={handleInputs}
    placeholder="Confirm Password"/>
  </div>

      

  <button type="submit" name="signup" class="btn btn-primary" value="register" onClick={PostData}>Submit</button>
</form>

<div className='img-src'>
  <NavLink to = '/login' className='abcd'>Already Account</NavLink>
</div>

</div>
   </>
  )
}

export default Signup