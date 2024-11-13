import React from 'react'
import {Link} from 'react-scroll'
import './appointment.css'
import bookImg from '../../assets/calendar.png'
const Appoinment = () => {
  const openInNewTab = () => {
    window.open('https://calendar.google.com/calendar/appointments/schedules/AcZssZ2-deKI0_dXRQbaouoc47jEDOJWYNDFzpMMn2vGE5kTKbP8W3el3kcLTTb83v6dLftfsjSegFkI?gv=true', '_blank');
  };


  return (
    <section id="booking">
        <span className="bookingTitle">Book an Appointment</span>
        <span className="bookingDescription">Connect with me for a consultation to discuss how I can help achieve your business goals. Schedule a convenient time, and let’s explore solutions tailored to your specific needs.</span>
        <div className="calander-button">
<Link><button onClick={openInNewTab} className='Bookingbtn'><img src={bookImg} alt="Booking button" className='bookingImg' id='bokkingInfo'/>Book an Appoinment</button></Link>
        </div>
    </section>
  )
}

export default Appoinment