import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import WOW from "wowjs";
import '../assets/css/Couple-Intro.css';

const Intro = () => {
    const [wow, setWow] = useState(new WOW.WOW())
    useEffect(() => {
        setWow(wow.init())
    }, []);

    return (
        <>
            <section className="couple-section section-padding" id="couple">
                <div className="shape_1"><Image src={require('../assets/images/intro/bg_shape_1.png')} className="img-fluid" alt="side-img" width="100%" /></div>
                <div className="shape_2"><Image src={require('../assets/images/intro/bg_shape_2.png')} className="img-fluid" alt="side-img" width="100%" /></div>
                <Container>
                    <div className="row align-items-center z_index">
                        <div className="col-lg-3 text-center text-lg-end bride wow fadeInDown" data-wow-delay="0.1s" data-wow-duration="1.2s" >
                            <div className="couple-img">
                                <Image src={require('../assets/images/intro/2.jpg')} alt="image" className='img-fluid' width="100%" />
                            </div>
                            <h3>Raviraj Jethva</h3>
                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                            <div className="social">
                                <ul>
                                    <li><a href="#/"><i className="ti-facebook"></i></a></li>
                                    <li><a href="#/"><i className="ti-twitter-alt"></i></a></li>
                                    <li><a href="#/"><i className="ti-instagram"></i></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-6 text-center wow fadeInUp" data-wow-delay="0.1s" data-wow-duration="1.2s">
                            <div className="middle-couple-pic">
                                <Image src={require('../assets/images/intro/1.jpg')} alt="image" className='img-fluid wow zoom' data-wow-delay='0.2s' data-wow-duration='1.5s' />
                                <div className="frame-img">
                                    <Image src={require('../assets/images/intro/shape.png')} alt="image" className='img-fluid' />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 text-center text-lg-start groom wow fadeInDown" data-wow-delay="0.1s" data-wow-duration="1.2s">
                            <div className="couple-img">
                                <Image src={require('../assets/images/intro/3.jpg')} alt="image" className='img-fluid' width="100%" />
                            </div>
                            <h3>Manisha Tank</h3>
                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                            <div className="social">
                                <ul>
                                    <li><a href="#/"><i className="ti-facebook"></i></a></li>
                                    <li><a href="#/"><i className="ti-twitter-alt"></i></a></li>
                                    <li><a href="#/"><i className="ti-instagram"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    )
}
export default Intro;