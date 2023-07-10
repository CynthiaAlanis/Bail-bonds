
import '../../App.css';
import React from 'react';
import { Col, Row } from "react-bootstrap";

import { IoIosCall, IoMdMail, IoMdPin } from "react-icons/io";
import "./About.css";
import pic from "../../components/pages/420 Bail Bonds.png"

export default function AboutUs () {
    return (
        <div className='about-us my-5'>
            <div className='container'>
                <Row xs={1} md={2} className='g-4 px-4'>
                    <Col>
                        {/* Header for AboutUs page */}

                    </Col>
                    <Col style={{
                        display: 'flex',
                        alignItems: 'center',
                    }}>
                        <img className='img-about' src={pic} alt='' />
                    </Col>
                </Row>
                <div className='about-info-box mt-4'>
                    <div className='info-box'>
                        <IoMdPin className='fas' />
                        <h3 className='info-box-title'>Our Address</h3>
                        <p>515 South Harbor Boulevard Anaheim, CA 92805</p>
                    </div>
                    <div className='info-box mt-4'>
                        <IoMdMail />
                        <h3>Email Us</h3>
                        <p>
                            info@example.com
                            <br />
                            contact@example.com
                        </p>
                    </div>
                    <div className='info-box mt-4'>
                        <IoIosCall />
                        <h3>Call Us</h3>
                        <p>
                        <a href="tel:+8008348522">Phone: 800-834-8522</a>
                        </p>
                    </div>
                </div>
                <p className='second-title'>Steps to Post a Bond</p>
                {/* <p className='text'> */}
                <ol id='steps'>
                  <li>Contact a Bail Bondsman: When someone is arrested and detained, a bail amount is usually set by the court. You can contact a bail bondsman or bail bond agency to help you navigate the process. They will assist you in securing the necessary funds or collateral required to post the bond.</li>
                  <br/>
                  <li>Gather Information: The bail bondsman will require specific information about the arrested individual, such as their full name, date of birth, location of arrest, charges filed against them, and the bail amount set by the court. Providing accurate and complete information is essential for a smooth process.</li>
                  <br/>
                  <li>Arrange Payment: The bail bondsman will require a payment or collateral in exchange for posting the bond. The payment is typically a percentage of the total bail amount, usually around 10% in the United States. Collateral, such as property or valuable assets, may be required if the bond amount is significant.</li>
                  <br/>
                  <li>Complete Documentation: The bail bondsman will provide necessary paperwork and agreements that need to be reviewed, completed, and signed. These documents outline the terms and conditions of the bond, including the responsibilities and obligations of both parties involved.</li>
                  <br/>
                  <li>Posting the Bond: Once the payment and documentation are processed, the bail bondsman will post the bond on behalf of the arrested individual. This action informs the court that the bond has been satisfied, and the person is released from custody.</li>
                  <br/>
                  <li>It's important to note that the specific procedures and requirements for posting a bond can vary by jurisdiction. It's advisable to consult with a local bail bondsman or legal professional who can provide accurate and up-to-date information relevant to your specific location.</li>
                </ol> 


                {/* </p> */}
                

          </div>
        </div>      

                            
                        
                    
        
    );
};

