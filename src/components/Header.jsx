import React from 'react';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../assets/css/Header.css';

const Header = () => {
    return (
        <>
            <header className="header">
                <Navbar expand="lg">
                    <Container>
                        <Navbar.Brand href="#home">
                            <h2 className="loader wow fadeInLeft text-white" data-wow-delay="0.2s" data-wow-duration="1.2s" >
                                <span>M</span>
                                <span>i</span>
                                <span>s</span>
                                <span>Q</span>
                                <span>u</span>                                
                                <span>i</span>                                
                                <span>n</span>                                
                                <span>c</span>                                
                                <span>e</span>                                
                            </h2>
                        </Navbar.Brand>
                    </Container>
                </Navbar>
            </header>
        </>
    )
}
export default Header;

