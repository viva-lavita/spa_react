// import { Button } from "bootstrap";
import React, { useState } from "react";
import { Nav, Navbar, Button } from "react-bootstrap";
import styled from 'styled-components'

import logo from '../static/logo.png'
import ModalLogin from "./ModalLogin";


const StyleLink = styled.div `
    a, .navbar-brand .navbar-bar .navbar-link {
        color: #adb1b8;
        &:hover {
            color: #fff;
        }
    }
`

export default function Navibar() {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
            <StyleLink>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="fixed-top" >
                    <div className="container-fluid">
                    <Navbar.Brand href="#home">
                        <img 
                            src={logo}
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                            alt="Logo"
                        /> Foximop
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav>
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/partnership">Сотрудничество</Nav.Link>
                        <Nav.Link href="/about">О сайте</Nav.Link>
                        </Nav>
                        <Nav style={{ marginLeft: "auto" }}>
                            <Button variant="outline-success" style={{ marginRight: "10px" }} onClick={handleShow}>Войти</Button>
                            <br />
                            <Button variant="outline-success" onClick={handleShow}>Регистрация</Button>
                        </Nav>
                    </Navbar.Collapse>
                    </div>
                </Navbar>
                <ModalLogin show={show} handleClose={handleClose} />  
        </StyleLink>
    )
}