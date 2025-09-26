import React from "react";
import { NavLink } from "react-router"

function Navbar() {
  return (
    <>
      <div className="container nav_bar" data-aos="fade-down" data-aos-duration="1000">
        <NavLink to="/" className="left nav_items">Portfolio</NavLink>
        <div className="right">
          <NavLink to="home" className="nav_items">Home</NavLink>
          <NavLink to="experience" className="nav_items">Experience</NavLink>
          <NavLink to="skills" className="nav_items">Skills</NavLink>
          <NavLink to="projects" className="nav_items">Projects</NavLink>
          <NavLink to="contact" className="nav_items">Contact</NavLink>
        </div>
      </div>
    </>
  );
}

export default Navbar;
