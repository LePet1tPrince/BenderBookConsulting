import { Link } from 'react-router-dom'
import React from "react"
import logo from "../images/favicon.png"

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg py-3 bg-light bg-gradient shadow-lg fixed-top max-height-100">
        <div className="container-fluid">
          <Link to="/">
            <img src={logo} className="d-block mx-5 img-fluid " alt="Bootstrap Themes" width="50" height="50" loading="lazy"/>
          </Link>
          <Link className="navbar-brand" to="/">
            <h3><strong>Bender Book Consulting</strong></h3>
            </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item text-align-center">
                <Link className="nav-link active fs-3 mx-5 px-4 rounded-4 hover-button align-text-bottom" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fs-2 mx-5 px-4 rounded-4 hover-button" to="/services">
                  Services
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link fs-2 mx-5 px-4 rounded-4 hover-button" to="/contact" role="button" aria-expanded="false">
                  Contact Us
                </Link>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/">Action</Link></li>
                  <li><Link className="dropdown-item" to="/">Another action</Link></li>
                  <li><hr className="dropdown-divider"/></li>
                  <li><Link className="dropdown-item" to="/">Something else here</Link></li>
                </ul>
              </li>
            </ul>

          </div>
        </div>
      </nav>
    )
  }

  export default Navbar;