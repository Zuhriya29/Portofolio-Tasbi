import React from 'react'
import { Col, Row } from "react-bootstrap";
import "../style.css";

function AboutMe() {
  return (
    <div>
      <div className="garis-putus" data-aos="fade-right">
        <div className="garis"></div>
        <div className="garis"></div>
        <div className="garis"></div>
      </div>

      <Row id="About" className="about-me">
        <Col xs={12} sm={12} md={7} lg={8} className="text-about-me" data-aos="fade-right">
          <h1 className='animate__animated animate__fadeInDown'>Hi! I'm Tasbi Khatuz Zuhriya</h1>
          <h3 className="animate__animated animate__fadeIn">a final-year Information Systems student with a strong interest and skills in Web Development and UI/UX Design.</h3>
          <p className="animate__animated animate__fadeIn">Experienced in developing more than five websites, including both frontend and full-stack projects. Proficient in technologies such as Next.js, React.js, and Laravel. Able to work independently as well as collaboratively in a team environment, with a strong commitment to delivering high-quality work and completing projects effectively</p>
          <p className="p2-aboutme animate__animated animate__fadeIn">💡 For me, technology is not just about coding it’s about creating seamless and meaningful user experiences.</p>
        </Col>
        <Col xs={12} sm={12} md={5} lg={4} className="picture-about-me" data-aos="zoom-in">
          <img src="/picture-1.png" alt="Picture 1" className="picture-1 animate__animated animate__zoomIn animate__delay-1s" />
          <img src="/picture-2.png" alt="Picture 2" className="animate__animated animate__zoomIn animate__delay-2s" />
        </Col>
      </Row>

      <div className="garis-putus" data-aos="fade-right">
        <div className="garis"></div>
        <div className="garis"></div>
        <div className="garis"></div>
      </div>
    </div>
  )
}

export default AboutMe
