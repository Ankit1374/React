import React from "react";
import {Link} from 'react-router-dom';
import './Navbar.css';
function Navbar() {
  return(
<div>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
 
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar">
      <li class="nav-item active">
      <Link to="/" class="nav-link" >Home</Link>  
      </li>
      <li class="nav-item">
      <Link to="/about" class="nav-link" >About</Link>
      </li>
      <li class="nav-item">
      <Link to="/contact" class="nav-link" >Contact</Link>
      </li>
      <li class="nav-item dropdown">
      <Link to="/more" style={{float: "right"}} class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">More</Link>
        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another</a>
          <a class="dropdown-item" href="#">Something</a>
        </div>
      </li>
      </ul>
    </div>
  </nav>
</div>
  );
}

export default Navbar
