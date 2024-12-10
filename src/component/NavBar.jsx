import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-light static-top">
      <div className="container">
      <a class="navbar-brand" href="#!">Start Bootstrap</a>
      <a class="btn btn-primary" href="#signup">Sign Up</a>
      </div>
      
    </nav>
  );
};

export default Navbar;
