import React from 'react';
import '../../styles/global.css'
import '../../styles/Contact.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import SamPic from '/assets/Sam_Background_Explore.jpg';
import linkedInLogo from '/assets/LinkedIn_icon.svg.webp';
import gitHubLogoWhite from '/assets/github-mark-white.png';

function Contact() {
    return (
        <div className='contactOuter'>
            <div className="contactContent">
                <div className="contactPicContainer">
                    <img className="contactPic" src={SamPic} alt="Sam Jones" />
                </div>
                <div className="contactInfo">
                    <h2>Contact Me</h2>
                    <p className='contactSubheading'>I'd love to hear from you!</p>
                    <div className='contactDetails'>
                        <div>
                            <i className="bi bi-telephone-fill custom-icon"></i>
                            <strong>Phone:</strong> (+44) 7947615790
                        </div>
                        <div>
                            <i className="bi bi-envelope-fill custom-icon" ></i>
                            <strong>Email:</strong> saman.jones1@gmail.com
                        </div>
                        <div>
                            <i className="bi bi-geo-alt-fill custom-icon"></i>
                            <strong>Location:</strong> Manchester, United Kingdom
                        </div>
                    </div>
                    {/* Find me section */}
                    <div className="contactFindMe">
                        <h3 style={{marginTop: "1.5rem", marginBottom: "0.5rem"}}>Find me</h3>
                        <a href="https://www.linkedin.com/in/sam-jones-88493b224/" target="_blank" rel="noopener noreferrer">
                            <img src={linkedInLogo} className="logo linkedIn" alt="LinkedIn Logo" style={{height: "2.2em", verticalAlign: "middle", marginRight: "0.7em"}} />
                        </a>
                        <a href="https://github.com/SamJ0nes" target="_blank" rel="noopener noreferrer">
                            <img src={gitHubLogoWhite} className="logo gitHubWhite" alt="GitHub Logo" style={{height: "2.2em", verticalAlign: "middle"}} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;