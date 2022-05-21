import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faLocationDot, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';


const footer = () => {
    return (
        <div className='footer d-flex justify-content-between p-5 bg-dark text-white'>
            <div>
                <h4>Our Company</h4>
                <p>About Us</p>
                <p>Career</p>
                <p>Editorial Team</p>
                <p>Protection</p>
            </div>
            <div>
                <h4>More</h4>
                <p>Terms & Conditions</p>
                <p>Privacy</p>
                <p>Advertise</p>
                <p>Join As Doctor</p>
            </div>
            <div>
                <h4>Contact</h4>
                <p><FontAwesomeIcon icon={faPhone} /> +9842563</p>
                <p className=''><FontAwesomeIcon icon={faLocationDot} /> Ameena Bazar,<br /> Puran Dhaka, Bangladesh</p>
                <p><FontAwesomeIcon icon={faEnvelope} /> healthcare@mail.com</p>

            </div>
            <div>
                <h4>Social Media</h4>
                <h5><FontAwesomeIcon icon={faTwitter} /></h5>
                <h5><FontAwesomeIcon icon={faFacebook} /></h5>
                <h5><FontAwesomeIcon icon={faInstagram} /></h5>
            </div>
        </div>
    );
};

export default footer;