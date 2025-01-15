import React from 'react';
import {Link} from 'react-router-dom'
function Navbar() {
  return ( 
    <div>
      <nav className="navbar fixed-top navbar-expand-lg bg-white border">
        <div className="container px-5 py-1 fs-6">
          <Link className="navbar-brand" to={"/"}>
            <img src="images/logo.svg" alt="Logo" style={{ width: "23%" }} />
          </Link>
          <button 
            className="navbar-toggler" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarSupportedContent" 
            aria-controls="navbarSupportedContent" 
            aria-expanded="false" 
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/signup">Signup</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/product">Products</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/pricing">Pricing</Link>
              </li>
              <li classNLme="nav-item">
                <Link className="nav-link active" aria-current="page" to="/support">Support</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/about"><i class="fa-solid fa-bars"></i></Link>
              </li>
                </ul>
            </div>    
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
