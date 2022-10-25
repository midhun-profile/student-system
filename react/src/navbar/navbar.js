import React from 'react';
import logo from './icon.png';

function Navbar() {
 
    return (
        
        
        
<nav className="navbar navbar-expand-sm bg-dark navbar-dark">
  <div className="container" style={{displat:"flux",justifyContent:"center"}}>
  
      <img src={logo} alt="Logo" style={{width:"40px"}} className="rounded-pill"/>
           <span style={{paddingLeft:"30px",color:"#61dbfb"}}><b>registration</b></span>
           
   
  </div>
</nav>


    );
  }
  
  export default Navbar;