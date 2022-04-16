import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css'
import logo from '../../../banner_img/logo.png';
import CustomLink from '../../CustomLink/CustomLink';
const Header = () => {
    return (
        <div className='index'>
            <Navbar  collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <CustomLink  to="/home">
                    <img src={logo} alt='img'/>
                </CustomLink>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <CustomLink to="/Services">Services</CustomLink>
                        <CustomLink to="/Login">Login</CustomLink>
                        <CustomLink to="/Blogs">Blogs</CustomLink>
                    </Nav>
                    <Nav>
                        <CustomLink to="/About">About</CustomLink>
                        <CustomLink  to="/Contact">
                            Contact
                        </CustomLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </div>
    );
};

export default Header;