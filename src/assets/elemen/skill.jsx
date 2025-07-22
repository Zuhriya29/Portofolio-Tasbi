import React from 'react'
import { Col, Row } from 'react-bootstrap'
import skilldata from "./data/skilldata";
import skill2data from "./data/skill2data";

function Skill() {
    return (
        <div id='Skill' className='utama-skill'>
            <div data-aos="fade-up">
                <h1 className='animate__animated animate__fadeInDown'>My Skill</h1>
            </div>
            <div className='hard-skill'>
                <div data-aos="fade-right">
                    <p className='animate__animated animate__fadeIn'>Hard Skill</p>
                </div>
                <div className='img-hard-skill'>
                    {skilldata.map((skill, index) => (
                        <div key={index} className='item-hard-skill' data-aos="zoom-in">
                            <img src={skill.img} alt="Skill" className='animate__animated animate__zoomIn' />
                        </div>
                    ))}
                </div>
            </div>
            <div className='hard-skill'>
                <div data-aos="fade-right">
                    <p className='animate__animated animate__fadeIn'>Soft Skill</p>
                </div>
                <div className='img-soft-skill'>
                    {skill2data.map((skill2, index) => (
                        <div key={index} className='item-soft-skill' data-aos="zoom-in-up">
                            <img src={skill2.icon} alt="Skill" className='animate__animated animate__zoomIn' />
                            <p style={{ marginTop: "0.5rem" }}><strong>{skill2.skill}</strong></p>
                            <p>{skill2.detail}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Skill
