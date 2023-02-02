// import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Link } from "react-router-dom";

export class Navbar extends Component {

  render() {
    return (
      <div>
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <Link className="navbar-brand" to='/general'>FlipNews</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-3 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link" aria-current="page" to='/general'>Home</Link></li>
        <li className="nav-item"><Link className="nav-link" to='/business'>Business</Link></li>
        <li className="nav-item"><Link className="nav-link" to='/entertainment'>Entertainment</Link></li>
        <li className="nav-item"><Link className="nav-link" to='/sports'>Sports</Link></li>
        <li className="nav-item"><Link className="nav-link" to='/health'>Health</Link></li>
        <li className="nav-item"><Link className="nav-link" to='/science'>Science</Link></li>
        <li className="nav-item"><Link className="nav-link" to='/technology'>Technology</Link></li>
        <li className="nav-item"><Link className="nav-link" to='/general'>General</Link></li>
      </ul>
      {/* <form className="d-flex justify-content-end" role="search">
        <input className="form-control me-2" type="search" placeholder="Search FlipNews" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}
    </div>
  </div>
</nav>
      </div>
    )
  }
}

export default Navbar