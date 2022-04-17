import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css'
import logo from '../../../banner_img/logo.png';
import CustomLink from '../../CustomLink/CustomLink';
import { FaArrowRight } from 'react-icons/fa';
import {signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
const Header = () => {
    const [user] = useAuthState(auth);
    const logout = () => {
        signOut(auth);
      };
    return (
        <div className='index'>
            <Navbar  collapseOnSelect expand="lg" bg="dark" sticky='top' variant="dark">
            <Container>
                <CustomLink  to="/home">
                    <img className='py-2' src={logo} alt='img'/>
                </CustomLink>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <CustomLink to="/Services">Services</CustomLink>
                        {
                            user ? <button className='signOut' onClick={logout}>SignOut &nbsp;<FaArrowRight style={{fontSize: '15px'}} /> </button> 
                            :<CustomLink to="/Login">Login</CustomLink>
                        }
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