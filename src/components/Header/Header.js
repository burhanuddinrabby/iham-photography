import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import CustomLink from '../CustomLink/CustomLink';
import './Header.css'
const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">IHAM Photography</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto"></Nav>
                        <Nav>
                            <CustomLink className='mx-2' to='/'>Home</CustomLink>
                            <CustomLink className='mx-2' to='/services'>Services</CustomLink>
                            <CustomLink className='mx-2' to='/Blogs'>Blogs</CustomLink>
                            <CustomLink className='mx-2' to='/about'>About Me</CustomLink>
                        </Nav>
                        <Navbar.Text>
                            <button>Login</button>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;