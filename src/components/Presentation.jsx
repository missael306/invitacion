import React, { useState, useEffect } from 'react';
import Image from 'react-bootstrap/Image';
import Navbar from 'react-bootstrap/Navbar';
import '../assets/css/Presentation.css';
import WOW from 'wowjs';

const Presentation = () => {
    const [isMoved, setIsMoved] = useState(false);
    const [wow, setWow] = useState(new WOW.WOW());
    const [imageSrc, setImageSrc] = useState(require('../assets/images/intro/letter.jpeg'));
    const [animationTriggered, setAnimationTriggered] = useState(false);

    useEffect(() => {
        setWow(wow.init());
    }, []);

    // Handler for when the animation ends
    const handleAnimationEnd = () => {
        console.log("Fin", isMoved)
        if (isMoved) {
            setImageSrc(require('../assets/images/intro/letter_open.png')); // Cambia la imagen al final
        }
    };

    const handleClick = () => {
        setAnimationTriggered(true);
        setIsMoved(true);
    };

    return (
        <>
            <div className="container-fluid p-0">
                <div className="full-screen-frame">
                    <header className="header position-absolute top-0 bg-danger header-presentation">
                        <Navbar expand="lg">
                            <Navbar.Brand href="#home">
                                <h2 className="loader wow fadeInLeft text-white" data-wow-delay="0.2s" data-wow-duration="1.2s">
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
                        </Navbar>
                    </header>
                    <Image
                        src={imageSrc}
                        fluid
                        className={`letter wow zoomIn ${isMoved ? "move-to-bottom" : ""}`}
                        data-wow-delay="0.2s"
                        data-wow-duration="1.2s"
                        onClick={handleClick}                        
                        onTransitionEnd={handleAnimationEnd}
                    />
                </div>
            </div>
        </>
    );
};

export default Presentation;
