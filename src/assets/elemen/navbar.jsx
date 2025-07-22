import React from 'react';
import { useState, useEffect } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaMoon, FaSun } from "react-icons/fa";
import "../style.css";

function NavbarBeranda() {
  const [darkMode, setDarkMode] = useState(false);
  
    useEffect(() => {
      document.documentElement.setAttribute(
        'data-bs-theme',
        darkMode ? 'dark' : 'light'
      );
    }, [darkMode]);

  return (
    <div>
      <Navbar expand="lg" fixed="top" className="utama-navbar">
        <Navbar.Brand href="#home" className="logo-home"><img src="./logo-1.png" alt="Logo" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto nav-item-beranda">
            <Nav.Link href="#About Me">About Me</Nav.Link>
            <Nav.Link href="#Experience">Experience</Nav.Link>
            <Nav.Link href="#Project">Project</Nav.Link>
            <Nav.Link href="#Skill">Skill</Nav.Link>
            <Nav.Link href="#Certificate">Certificate</Nav.Link>
            <Nav.Link href="#Contact">Contact</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link
              className="btn-dark-mode"
              onClick={() => setDarkMode(!darkMode)}
            >
              <div className="d-flex align-items-center gap-2">
                {darkMode ? <FaSun /> : <FaMoon />}
                {darkMode ? "Light Mode" : "Dark Mode"}
              </div>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default NavbarBeranda


