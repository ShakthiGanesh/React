import React from 'react'
import { Link } from 'react-router-dom'
import '../css/Footer.css'
import MailIcon from '@material-ui/icons/Mail';
import PhoneIcon from '@material-ui/icons/Phone';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';

 function Footer () {
    return(
        <div className="footer-copyrights">
        <div className='footer-main'>
            <div className='footer'>
                <div>
                    <h6>Links</h6>
                    <div className='footer-link-contents'>
                        <div>
                            <Link to='/'id='footer-link'>
                                Home
                            </Link>
                        </div>
                        <div>
                            <Link to='/about' id='footer-link' >
                                About
                            </Link>
                        </div>
                        <div>
                            <Link to='/menu' id='footer-link'>
                                Menu
                            </Link>
                        </div>
                        <div>
                            <Link to='/contact' id='footer-link'>
                                Contact
                            </Link>
                        </div>
                        
                    </div>
                </div>
                <div className='footer-address'>
                    <h6>Our Address</h6>
                    <p>SASTRA DEEMED UNIVERSITY,
                    Thirumalaisamudram,
                    Thanjavur,TamilNadu,
                    India</p>
                    
                </div>
                <div className='footer-contacts'>
                    <p><PhoneIcon /> 1234567890</p>
                    <p><MailIcon /> we5plusu@gmail.com</p>
                    <InstagramIcon />
                    <LinkedInIcon />
                    <TwitterIcon />
                </div>
                
            </div>
        </div> 
        <p>&#169;2020 Shakthi Web, LLC</p>   
        </div>
    )
 }
 export default Footer