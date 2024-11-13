import React from 'react'
import './intro.css';
import bgImg from '../../assets/introImg.png'
import hireImg from '../../assets/hireMe.png'
import {Link} from 'react-scroll'

const Intro = () => {
  return (
    <section id="intro">
        <div className="introContent">
            <span className="helloText">Hello, </span>
            <span className="introText">I'm <span className="introName">Goutam</span><br />Backend Developer</span>
            <p className="introPera">Specializing in scalable, efficient solutions that enhance <br />functionality and performance for users.</p>
            <Link to='booking'spy={true} smooth={true} offset={-100} duration={500}><button className="btn"><img src={hireImg} alt="" className='btnImg'/>Hire Me</button></Link>
        </div>
        <img src={bgImg} alt="BackgroundImg" className="bgImg" />
        
    </section>
  )
}

export default Intro