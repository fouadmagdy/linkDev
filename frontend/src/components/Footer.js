import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import { FaFacebookF, FaTwitter } from 'react-icons/fa';
import './Footer.scss'

import instagramIcon from '../images/instagramIcon.png'
import youtubeIcon from '../images/youtubeIcon.png'
import linkedinIcon from '../images/linkedinIcon.png'

const Footer = () => {
    return (
        <footer>
            <Container className="py-5">
                <Row>
                    <Col xs={12} md={2}>
                        <ul className="list-unstyled">
                            <li>News</li>
                            <li>Events</li>
                            <li>About</li>
                            <li>FAQs</li>
                        </ul>
                    </Col>
                    <Col xs={12} md={2}>
                        <ul className="list-unstyled">
                            <li>Privacy Policy</li>
                            <li>Contact Us</li>
                            <li>Companies</li>
                        </ul>
                    </Col>
                    <Col xs={12} md={{ span: 4, offset: 1 }} className="my-3 my-lg-0">
                        <p>Subscribe to Newletter</p>
                        <div className="input-group">
                            <input type="email" className="form-control" placeholder="Enter your email" />
                            <span className="input-group-btn">
                                <button className="btn text-white" type="submit">Subscribe</button>
                            </span>
                        </div>
                    </Col>

                    <Col xs={12} md={{ span: 2, offset: 1 }}>
                        <p>Follow us on</p>
                        <ul className="list-inline social-icons">
                            <li className="list-inline-item"><Image src={instagramIcon} alt="insta" /></li>
                            <li className="list-inline-item"><Image src={youtubeIcon} alt="youtube" /></li>
                            <li className="list-inline-item"><Image src={linkedinIcon} alt="linkedin" /></li>
                            <li className="list-inline-item"><FaFacebookF size="1.2em" /></li>
                            <li className="list-inline-item"><FaTwitter size="1.2em" /></li>
                        </ul>
                    </Col>
                </Row>
            </Container>

            <div className="copywrite">
                All Rights Reserved - Link Development Company &copy; 2020
            </div>
        </footer>
    )
}

export default Footer

