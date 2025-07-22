import React from 'react'
import RotatingText from '../Animation/RotatingText';
import { Col, Row } from "react-bootstrap";
import "../style.css";

function Home() {
  return (
    <div>
       <div className="home-beranda position-relative">
      
              <div className="floating-icons-3">
                <span className="animate__animated animate__bounceIn">✨</span>
              </div>
      
      
              <Row id="home">
                <Col xs={12} sm={12} md={6} lg={6} className="foto-wrapper">
                  <div className="circle-bg animate__animated animate__zoomIn"></div>
                  <img src="/foto-ku.png" alt="Foto" className="animate__animated animate__zoomIn" />
                </Col>
                <Col xs={12} sm={12} md={6} lg={6} className="text-home">
                  <div className="floating-icons">
                    <span className="animate__animated animate__bounceIn">✨</span>
                  </div>
      
                  <div className="floating-icons-1">
                    <span className="animate__animated animate__bounceIn">💻</span>
                  </div>
                  <div className="floating-icons-2">
                    <span className="animate__animated animate__bounceIn">🎨</span>
                  </div>
                  <div className="hero-text">
                    <h1 className="nama animate__animated animate__slideInDown">Tasbi Khatuz Zuhriya</h1>
                    <div className="tagline">
                      <h1 className="animate__animated animate__fadeInLeft">Creative</h1>
                      <div className="rotating-text-wrapper">
                        <RotatingText
                          texts={['Code !', 'Design !', 'Experience !']}
                          mainClassName="px-3 sm:px-2 md:px-3 bg-cyan-300 overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg animate__animated animate__fadeInRight"
                          staggerFrom={"last"}
                          initial={{ y: "100%" }}
                          animate={{ y: 0 }}
                          exit={{ y: "-120%" }}
                          staggerDuration={0.035}
                          splitLevelClassName="overflow-hidden pb-0 sm:pb-0 md:pb-0"
                          transition={{ type: "spring", damping: 30, stiffness: 400 }}
                          rotationInterval={2000}
                        />
                      </div>
                    </div>
                  </div>
                  <p className="bio animate__animated animate__lightSpeedInLeft">Web Developer & UI / UX Designer</p>
                  <div className="information">
                    <a href="#Project" className="button-project animate__animated animate__zoomIn">
                      My Project
                    </a>
                    <div className="social-media">
                      <a href="https://github.com/Zuhriya29"><img src="/icon-github.png" alt="Github" className="animate__animated animate__zoomIn animate__delay-1s" /></a>
                      <a href="https://www.linkedin.com/in/tasbi-zuhriya/"><img src="/icon-linkedn.png" alt="Linkedn" className="animate__animated animate__zoomIn animate__delay-2s" /></a>
                      <a href="https://www.instagram.com/tasbi.khz_29/"><img src="/icon-ig.png" alt="Instagram" className="animate__animated animate__zoomIn animate__delay-3s" /></a>
                    </div>
                  </div>
                </Col>
              </Row>
      
            </div>
    </div>
  )
}

export default Home
