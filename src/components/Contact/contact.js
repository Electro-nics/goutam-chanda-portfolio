import React, { useRef } from 'react'
import './contact.css'
import clientImg1 from '../../assets/client1.png'
import clientImg2 from '../../assets/client2.png'
import clientImg3 from '../../assets/client3.png'
import clientImg4 from '../../assets/client4.png'
import facebook from '../../assets/facebook.png'
import linkedin from '../../assets/linkedin.png'
import instagram from '../../assets/instagram.png'
import twitter from '../../assets/twitter.png'
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_uz9ybw4', 'template_4tvhc1y', form.current, {
            publicKey: 'l0OloQdzPx25sm6iR',
          })
          .then(
            (result) => {
              console.log('SUCCESS!',result.text);
              alert("Email Sent! Please check your mailbox")
              e.target.reset()
              

            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
      };

      const facebookLink = () => {
        window.open('https://www.facebook.com/goutam.chanda.5245?mibextid=ZbWKwL', '_blank');

      };
      const linkedInLink = () => {
        window.open('https://www.linkedin.com/in/goutam-chanda/', '_blank');
        
      };
      const instagramLink = () => {
        window.open('https://www.instagram.com/thelazy.dev/', '_blank');
        
      };
      const twitterLink = () => {
        window.open('https://x.com/gautamchanda316', '_blank');
        
      };
  return (
    <section className="contactPage">
        <div id="clients">
            <h1 className="contactPageTitle" id='clientHadder'>My Client</h1>
            <p className="clientDescription">I work with a diverse range of clients, from startups to established businesses, providing customized tech solutions. My goal is to deliver results that drive growth and empower my clients to reach their full potential.</p>
            <div className="clientImgs">
            <img src={clientImg1} alt="clientImg1" className='clientImg'/>
            <img src={clientImg2} alt="clientImg2" className='clientImg'/>
            <img src={clientImg3} alt="clientImg3" className='clientImg'/>
            <img src={clientImg4} alt="clientImg4" className='clientImg'/>
            </div>
        </div>
        <div id="contact">
            <h1 className="contactPageTitle">Contact Us</h1>
            <span className="contactDec">
            Have questions or need assistance? We're here to help. Reach out to discuss your project, ask about our services, or get personalized support. Fill out the form below, and we’ll get back to you as soon as possible!
            </span>
            <form className='contactForm' ref={form} onSubmit={sendEmail}>
                <input type="text" className='name' placeholder='Your Name' name='from_name' required/>
                <input type="email" className='email' placeholder='Enter Your Email' name='from_email' required />
                <textarea name="message" rows={5} className='msg' placeholder='Your Message' required></textarea>
                <button type="submit" className='submitbtn' value='Send'>Submit</button>

                <div className="links">
                    <img src={facebook} alt="Facebook" className="socialLink" onClick={facebookLink}/>
                    <img src={linkedin} alt="Linkedin" className="socialLink" onClick={linkedInLink} />
                    <img src={instagram} alt="Instagram" className="socialLink" onClick={instagramLink} />
                    <img src={twitter} alt="Twitter" className="socialLink" onClick={twitterLink} />
                </div>

            </form>
            
        </div>
    </section>
  )
}

export default Contact
