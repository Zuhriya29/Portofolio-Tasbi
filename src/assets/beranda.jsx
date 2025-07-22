import React from "react";
import TextCursor from './Animation/TextCursor';
import NavbarBeranda from './elemen/navbar';
import Home from './elemen/home';
import AboutMe from './elemen/about-me';
import Experience from "./elemen/experience";
import Project from "./elemen/project";
import Skill from "./elemen/skill";
import Certificate from "./elemen/certificate";
import Contact from "./elemen/contact";
import "../assets/style.css";

function Beranda() {

  return (
    <div>
      <TextCursor />
      <NavbarBeranda />
      <Home />
      <AboutMe />
      <Experience />
      <Project />
      <Skill />
      <Certificate />
      <Contact />

      <div className="footer">
        <p>© 2025 Tasbi Khatuz Zuhriya. All rights reserved.</p>
      </div>

      
    </div>
  );
}

export default Beranda;
