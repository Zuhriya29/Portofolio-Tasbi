import React from 'react'
import { Col, Row } from "react-bootstrap";
import "../style.css";
import experiencedata from "./data/experiencedata";

function Experience() {
  return (
    <div>
      <div className='experience-1'>
        <div id="Experience" className="experience">
          <div data-aos="fade-up">
            <h1 className='animate__animated animate__fadeInDown'>My Experience</h1>
          </div>
          <Row className='utama-experience'>
            {experiencedata.map((experience, index) => (
              <Col key={index} className="item-experience-1 animate__animated animate__zoomIn" data-aos="fade-down">
                <div className="detail-experience" data-aos="fade-down">
                  <div className="title-experience">
                    <p className="posisi-experience">{experience.posisi}</p>
                    <p className="instansi-experience">{experience.instansi}</p>
                    <p className="tgl-experience">{experience.tanggal}</p>
                    <p className="nilai-experience">{experience.nilai}</p>
                  </div>
                  <div className="jobdesk-experience">
                    <div className="jobdesk">
                      <div className='poin'>-</div>
                      <p>{experience.jobdesk1}</p>
                    </div>
                    <div className="jobdesk">
                      <div className='poin'>-</div>
                      <p>{experience.jobdesk2}</p>
                    </div>
                    <div className="jobdesk">
                      <div className='poin'>-</div>
                      <p>{experience.jobdesk3}</p>
                    </div>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </div>
  )
}

export default Experience
