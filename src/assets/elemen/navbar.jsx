import React from 'react';
import { useState, useEffect } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaMoon, FaSun } from "react-icons/fa";
import "../style.css";

function NavbarBeranda() {
  const [darkMode, setDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
  const handleScroll = () => {
    const sections = ["About Me", "Experience", "Project", "Skill", "Certificate", "Contact"];

    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();

        if (rect.top <= 100 && rect.bottom >= 100) {
          setActiveSection(section);
        }
      }
    });
  };

  window.addEventListener("scroll", handleScroll);

  return () => window.removeEventListener("scroll", handleScroll);
}, []);
  
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
            <Nav.Link href="#About" className={activeSection === "About Me" ? "active-nav" : "link"}>About Me</Nav.Link>
            <Nav.Link href="#Experience" className={activeSection === "Experience" ? "active-nav" : "link"}>Experience</Nav.Link>
            <Nav.Link href="#Project" className={activeSection === "Project" ? "active-nav" : "link"}>Project</Nav.Link>
            <Nav.Link href="#Skill" className={activeSection === "Skill" ? "active-nav" : "link"}>Skill</Nav.Link>
            <Nav.Link href="#Certificate" className={activeSection === "Certificate" ? "active-nav" : "link"}>Certificate</Nav.Link>
            <Nav.Link href="#Contact" className={activeSection === "Contact" ? "active-nav" : "link"}>Contact</Nav.Link>
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


