import React from 'react'
import Logo from './images/logo.jpg';
import './App.css';
import Menu from './images/menu.png';
import { NavLink} from 'react-router-dom'
const Navbar = () => {
  return (
   <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
  <NavLink to="/">
  <img src={Logo} alt="Bootstrap" width="45" height="40" id='logo'/>
  </NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <img src={Menu} alt="Bootstrap" width="30" height="24" id='logo1'/>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <form className="d-flex" role="search">
        <input className=" ms-5" type="search" id="search"  placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
        <NavLink to="/">
         <a className="nav-link" href="#">Home</a>
         </NavLink>
        </li>
        <li className="nav-item">
        <NavLink to="/product">
          <a className="nav-link" href="#">Products</a>
          </NavLink>
        </li>
        <li className="nav-item">
        <NavLink to="/about">
          <a className="nav-link" href="#">About</a>
          </NavLink>
        </li>
        <li className="nav-item">
        <NavLink to="/help">
          <a className="nav-link" href="#">Help</a>
          </NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
   </>
  )
}

export default Navbar