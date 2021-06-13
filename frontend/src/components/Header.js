import React, { useState } from 'react'
import { Navbar, Nav, Container, Image } from 'react-bootstrap'
import { FaRegBell } from 'react-icons/fa';
import { AiOutlineClose } from "react-icons/ai";
import { BiCog } from "react-icons/bi";
import { LinkContainer } from 'react-router-bootstrap'

import Sidebar from './Sidebar'

import './Header.scss'

import logoImg from '../images/logo.png'
import searchIcon from '../images/search.png'
import ppImg from '../images/pp.png'
import burgerMeny from '../images/burgerMeny.png'

const Header = () => {
    const [sideOpen, setSideOpen] = useState(false)

    const handleSidebar = () => {
        setSideOpen(!sideOpen)
    }


    return (
        <>
            <Navbar expand="lg" className="navbar text-white">
                <Container>
                    <Navbar.Brand onClick={handleSidebar}>
                        {sideOpen ? <AiOutlineClose size="1.3em" /> : <Image src={burgerMeny} alt="burgermenu" />}
                    </Navbar.Brand>
                    <LinkContainer to="/">
                        <Navbar.Brand><Image src={logoImg} alt="logo" className="img-fluid" style={{ marginLeft: '2rem' }} /></Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav>
                            <Nav.Link><Image src={searchIcon} alt="searchIcon" className="img-fluid" /></Nav.Link>
                            <Nav.Link className="bell-notification-alert">
                                <FaRegBell />
                                <span></span>
                            </Nav.Link>
                            <Nav.Link style={{ fontSize: '1.3rem' }}><Image src={ppImg} alt="pp" className="img-fluid ppImg" /> user name</Nav.Link>
                            <Nav.Link ><BiCog /></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Sidebar sideOpen={sideOpen} />

        </>
    )
}

export default Header
