import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import projectdata from "./data/projectdata";
import project2data from "./data/project2data";
import { useState } from 'react';
import Collapse from 'react-bootstrap/Collapse';

function Project() {
    const [openIndex, setOpenIndex] = useState(null);
    const [openIndex2, setOpenIndex2] = useState(null);

    return (
        <div id="Project" className='utama-project'>
            <div data-aos="fade-up">
                <h1 className='animate__animated animate__fadeInDown'>My Project</h1>
            </div>
            <Tabs
                defaultActiveKey="Website"
                id="fill-tab-example"
                fill>
                <Tab eventKey="Website" title="Website" className='title-tab'>
                    <div className='utama-project'>
                        <div id="Project" className="project">
                            <Row className='item-project' data-aos="zoom-in-down">
                                {projectdata.map((project, index) => (
                                    <Col key={index} xs={12} sm={5} md={5} lg={3} className='project-1 animate__animated animate__zoomIn'>
                                        <img src={project.img} alt="Project" />
                                        <div className='title-project'>
                                            <p>{project.title}</p>
                                            <div className='see-more' onClick={() =>
                                                setOpenIndex(openIndex === index ? null : index)
                                            }
                                                aria-controls="example-collapse-text"
                                                aria-expanded={open}>
                                                <p>See More</p>
                                                {openIndex === index ? (
                                                    // ICON UP
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                                        className="bi bi-arrow-up-circle" viewBox="0 0 16 16">
                                                        <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707z" />
                                                    </svg>
                                                ) : (
                                                    // ICON DOWN
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                                        className="bi bi-arrow-down-circle" viewBox="0 0 16 16">
                                                        <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293z" />
                                                    </svg>
                                                )}
                                            </div>
                                            <Collapse in={openIndex === index}>
                                                <div id={`collapse-text-${index}`} className="collapse-content">
                                                    <p><strong>Github : </strong><div className='collapse-content-link' onClick={() => window.open(project.github, "_blank")}>Click Here</div></p>
                                                    <p><strong>Demo : </strong><div className='collapse-content-link' onClick={() => window.open(project.demo, "_blank")}>Click Here</div></p>
                                                </div>
                                            </Collapse>
                                        </div>
                                    </Col>
                                ))}
                            </Row>
                        </div>
                    </div>
                </Tab>
                <Tab eventKey="UI / UX Design" title="UI / UX Design">
                    <div className='utama-project'>
                        <div id="Project" className="project">
                            <Row className='item-project' data-aos="zoom-in-down">
                                {project2data.map((project, index) => (
                                    <Col key={index} xs={12} sm={5} md={5} lg={3} className='project-1 animate__animated animate__zoomIn'>
                                        <img src={project.img} alt="Project" />
                                        <div className='title-project'>
                                            <p>{project.title}</p>
                                            <div className='see-more' onClick={() =>
                                                setOpenIndex2(openIndex2 === index ? null : index)
                                            }
                                                aria-controls="example-collapse-text"
                                                aria-expanded={open}>
                                                <p>See More</p>
                                                {openIndex2 === index ? (
                                                    // ICON UP
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                                        className="bi bi-arrow-up-circle" viewBox="0 0 16 16">
                                                        <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707z" />
                                                    </svg>
                                                ) : (
                                                    // ICON DOWN
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                                        className="bi bi-arrow-down-circle" viewBox="0 0 16 16">
                                                        <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293z" />
                                                    </svg>
                                                )}
                                            </div>
                                            <Collapse in={openIndex2 === index}>
                                                <div id={`collapse-text-${index}`} className="collapse-content">
                                                    <p><strong>Prototype : </strong><div className='collapse-content-link' onClick={() => window.open(project.prototype, "_blank")}>Click Here</div></p>
                                                    <p><strong>Design : </strong><div className='collapse-content-link' onClick={() => window.open(project.design, "_blank")}>Click Here</div></p>
                                                </div>
                                            </Collapse>
                                        </div>
                                    </Col>
                                ))}
                            </Row>
                        </div>
                    </div>
                </Tab>
            </Tabs>
        </div>
    )
}

export default Project
