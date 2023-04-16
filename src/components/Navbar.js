import React from 'react'
import PropTypes from 'prop-types'
// import {Link} from 'react-router-dom'
export default function Navbar(props) {
  return (
    <>
    <nav className={`navbar navbar-expand-lg navbar-${props.Mode} bg-${props.Mode} navbar-${props.Gmode} bg-${props.Gmode} `}>
      <div className="container-fluid">
        <a href="#" className="navbar-brand">Text-Utlis</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a href='#' className="nav-link active" aria-current="page" >Home</a>
            </li>
            {/* <li className="nav-item">
              <a href='/About' className="nav-link" >About</a>
            </li> */}
          </ul>
          {/* <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
            </form> */}
          <div className={`form-check form-switch text-${props.Mode === 'light' ? 'dark' : 'light'}`}>
            <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable DarkMode</label>
          </div>

          <div className={`form-check form-switch text-${props.Mode === 'light' ? 'green' : 'light'}`}>
            <input className="form-check-input" onClick={props.toggleGmode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
              <label className="form-check-label" for="flexSwitchCheckDefault">Enable GreenMode</label>
          </div>


        </div>
      </div>
    </nav>
  </>
  )
}
Navbar.prototypes = { About: PropTypes.string }

Navbar.defaultProps = {
  About: 'Set about here'
}