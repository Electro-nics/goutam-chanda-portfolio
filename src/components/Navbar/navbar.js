import React, { useState } from 'react'
import './navbar.css';
import logo from '../../assets/logonav.png'
import {Link} from 'react-scroll'
import contactmeImg from '../../assets/contact.png'
import menu from '../../assets/menu.png'
const Navbar = () => {
  const [showMenu, setshowMenu] = useState(false);
  return (
    <nav className="navbar">
        <img src={logo} alt="logo" className='logo'/>
        <div className="dasktopMenu">
            <Link activeClass='active' to='intro'spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Home</Link>
            <Link activeClass='active' to='skill' spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">About</Link>
            <Link activeClass='active' to='booking' spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">Booking</Link>
            <Link activeClass='active' to='pricePlan' spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">Pricing</Link>
            <Link activeClass='active'to='clientHadder' spy={true} smooth={true} offset={-80} duration={500} className="desktopMenuListItem">Client</Link>

        </div>
        <button className="desktoMenuBtn" onClick={()=>{
          document.getElementById('contact').scrollIntoView({behavior:'smooth'});
        }}>
            <img src={contactmeImg} alt="contact us icon" className="desktopMenuImg" /> Contact Me
        </button>

        <img src={menu} alt="logo" className='mobMenu' onClick={()=>setshowMenu(!showMenu)} />
        <div className="navMenu" style={{display: showMenu?'flex':'none'}}>
            <Link activeClass='active' to='intro'spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={()=>setshowMenu(false)}>Home</Link>
            <Link activeClass='active' to='skill' spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={()=>setshowMenu(false)}>About</Link>
            <Link activeClass='active' to='booking' spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={()=>setshowMenu(false)}>Booking</Link>
            <Link activeClass='active' to='pricePlan' spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={()=>setshowMenu(false)}>Pricing</Link>
            <Link activeClass='active'to='clientHadder' spy={true} smooth={true} offset={-80} duration={500} className="listItem" onClick={()=>setshowMenu(false)}>Client</Link>
            <Link activeClass='active'to='contact' spy={true} smooth={true} offset={-80} duration={500} className="listItem" onClick={()=>setshowMenu(false)}>Contact Us</Link>
        </div>
    </nav>
  )
}

export default Navbar