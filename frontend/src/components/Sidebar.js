import React from 'react'
import './Sidebar.scss'
import { Container, Row, Col, Image } from 'react-bootstrap'

import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

import youtubeIcon from '../images/surface-3.png'

const Sidebar = ({ sideOpen }) => {
    return (
        <div className={`sidebar text-white ${sideOpen ? 'fadein' : 'd-none fadeout'}`}>
            <Container>
                <Row>
                    <Col sm={3} className="sidebar-socials">
                        <ul className="list-unstyled">
                            <li><FaTwitter size="1.2em" /></li>
                            <li><FaFacebookF size="1.2em" /></li>
                            <li><FaLinkedin /></li>
                            <li><Image src={youtubeIcon} alt="youtube" /></li>
                            <li><FaInstagram /></li>
                        </ul>
                    </Col>
                    <Col sm={9} className="sidebar-navs mt-5">
                        <div>
                            <ul className="list-unstyled">
                                <li>Home</li>
                            </ul>
                            <ul className="list-unstyled">
                                <li>About us</li>
                                <p>Who are us</p>
                                <p>Why us ?</p>
                            </ul>

                            <ul className="list-unstyled">
                                <li>News</li>
                                <p>News</p>
                                <p>Events</p>
                            </ul>

                            <ul className="list-unstyled">
                                <li>Careers</li>
                                <p>Opportunities</p>
                            </ul>
                        </div>

                        <div className="mt-auto">
                            <ul className="list-unstyled">
                                <li>Contact Us</li>
                            </ul>

                            <ul className="list-unstyled">
                                <li>Site Map</li>
                            </ul>
                        </div>

                    </Col>
                </Row>
            </Container>



        </div>
    )
}

export default Sidebar
