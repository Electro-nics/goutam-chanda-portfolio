import React from 'react'
import './skills.css'
import apiDesign from '../../assets/api.png'
import dbDesign from '../../assets/db.png'
import cicdImg from '../../assets/CICD.png'
import cloudImg from '../../assets/Cloud.png'

const Skills = () => {
  return (
    <section id="skill">
        <span className="skillTitle">What I Do</span> 
        <span className="skillDescription">I provide comprehensive technical solutions designed to streamline your software development lifecycle, ensure data integrity, and optimize deployment. My services cater to businesses aiming to enhance their digital infrastructure and operational efficiency.</span>
        <div className="skillBars">
            <div className="skillBar">
                <img src={apiDesign} alt="apiIcon" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>Rest API Design</h2>
                    <p>Build secure, scalable, and efficient APIs for seamless integration and smooth user experiences across platforms.</p>
                </div>
            </div>

            <div className="skillBar">
                <img src={dbDesign} alt="dbImage" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>Database Management Services</h2>
                    <p>Organize, optimize, and secure your data with reliable database architecture and maintenance services for maximum performance.</p>
                </div>
            </div>

            <div className="skillBar">
                <img src={cicdImg} alt="cicdImage" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>CI/DC Pipeline Integration</h2>
                    <p>Streamline code testing, integration, and deployment with automated CI/CD pipelines for faster, more reliable releases.</p>
                </div>
            </div>

            <div className="skillBar">
                <img src={cloudImg} alt="CloudImage" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>Cloud Deployment</h2>
                    <p>Deploy and scale applications in the cloud with high availability, security, and cost-effective infrastructure solutions.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Skills