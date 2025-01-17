import React from 'react';
import prof from '../assets/images.png';
import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg vibrant-navbar">
        <div className="container-fluid">
          <Link className="navbar-brand vibrant-brand" to="/">Treeko</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link vibrant-link" to="/home">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link vibrant-link" to="/men">Men</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link vibrant-link" to="/api">API</Link>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle vibrant-link profile-link" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <img className="profile-image" src={prof} alt="Profile" />
                  Profile
                </a>
                <ul className="dropdown-menu vibrant-dropdown">
                  <li><Link className="dropdown-item" to="/login">Login</Link></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><Link className="dropdown-item" to="/table">Customers</Link></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><Link className="dropdown-item" to="/onoff">Button</Link></li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link vibrant-link" to="/contact">Contact Us</Link>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2 vibrant-input" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn vibrant-btn" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
