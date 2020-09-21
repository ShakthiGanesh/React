import React from 'react'
import { Breadcrumb, BreadcrumbItem, Button, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import '../css/Contact.css'
import MailIcon from '@material-ui/icons/Mail';
import PhoneIcon from '@material-ui/icons/Phone';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';

function Contact() {
    return(
        <div >
            <Breadcrumb>
                    <BreadcrumbItem>
                        <Link to="/"> Home</Link>
                    </BreadcrumbItem>
                    <Breadcrumb.Item active>Contact</Breadcrumb.Item>
            </Breadcrumb>

           

            <div className="form">
                <div className="formInfo">
                    <h5>Contact Information</h5>

                    <h7>Our Address</h7>
                    <p>SASTRA DEEMED UNIVERSITY,</p>
                    <p>Thirumalaisamudram,</p>
                    <p>Thanjavur,TamilNadu,India</p><br />

                    <h7>Contact Us</h7>
                    <p><PhoneIcon style={{color: "blue"}}/> 1234567890</p>
                    <p><MailIcon style={{color: "#d62828"}}/>  we5plusu@gmail.com </p>
                    <p><InstagramIcon style={{color: "#c13584"}}/> shakthi_harsha01 </p>
                    <p><LinkedInIcon style={{color: "#0055ff"}}/> Shakthi Ganesh R</p><br />
                    
                </div>

                <h5>Give us your Feedback</h5>
                <Form>
                    <Form.Group controlId="firstName">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="text" placeholder="First Name" minLength="2" required/>
                    </Form.Group>

                    <Form.Group  controlId="lastName">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="text" placeholder="Last Name" />
                    </Form.Group>
                

                    <Form.Group controlId="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Email" required/>
                    </Form.Group>

                    <Form.Group controlId="mobileNumber">
                        <Form.Label>Mobile Number</Form.Label>
                        <Form.Control placeholder="Contact Number" pattern="[0-9]{10}" maxLength="10" required/>
                        <Form.Control.Feedback type="invalid">Number should be 10 characters</Form.Control.Feedback>
                    </Form.Group>
        

                    <Form.Row className="form-Contact">
                        <Form.Group id="contactCheckbox">
                            <Form.Check type="checkbox" label="May we Contact you?" />
                        </Form.Group>

                        <Form.Group  controlId="contactOptions">
                            <Form.Control as="select" defaultValue="Voice Call">
                                <option>Call</option>
                                <option>SMS</option>
                                <option>Email</option>
                            </Form.Control>
                        </Form.Group>
                    </Form.Row>

                    <Form.Group controlId="feedback">
                        <Form.Label>Your Feedback</Form.Label>
                        <Form.Control as="textarea" rows="4" placeholder="Please give your feedbacks" required/>
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        </div>

    )
}
export default Contact