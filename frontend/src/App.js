import React from 'react';
import {BrowserRouter as Router,Routes,Route,} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import About from './components/About';



const App = () => {
  return (
   
    <div className="App">
    <Router>
 <Navbar/>
      <div>
      <Routes>
      
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<Signup />} />
    
      </Routes>
      </div>
     
    </Router>
  </div>
);

  
}

export default App;