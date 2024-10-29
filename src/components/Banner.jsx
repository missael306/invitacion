import React from 'react';
import Image from 'react-bootstrap/Image';
import CoutDown from '../components/Timer'
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/Banner.css';
import '../assets/css/Carousel-custom.css';
const Announce_banner = () => {
    return (
        <>
            <section className="wedding_banner" id='home'>
                <div className="wedding_announcement mt-5">
                    <h2 className="loader wow fadeInLeft mt-5" data-wow-delay="0.2s" data-wow-duration="1.2s">
                        <span>N</span>
                        <span>i</span>
                        <span>c</span>
                        <span>o</span>
                        <span>l</span>
                        <span>e</span>                        
                    </h2>
                    {/* <p className="wow fadeInRight customLetter" data-wow-delay="0.2s" data-wow-duration="1.2s">Sábado 16 Noviembre </p> */}
                    {/* <div className="wpo-wedding-date">
                        <div className="clock-grids">
                            <div id="clock" className="d-flex">
                            <CoutDown dateTime="16/11/2024 13:30" />
                            </div>
                        </div>
                    </div> */}
                </div>
                <Carousel fade indicators={false} interval={3500} >
                    <Carousel.Item>
                        <Image
                            className="img-fluid"
                            alt="First slide"
                            width="100%"
                            src={require('../assets/images/slider/slide-1.jpeg')}
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <Image
                            className="img-fluid"
                            alt="Second slide"
                            width="100%"
                            src={require('../assets/images/slider/slide-2.jpeg')}
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <Image
                            className="img-fluid"
                            alt="Third slide"
                            width="100%"
                            src={require('../assets/images/slider/slide-3.jpeg')}
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <Image
                            className="img-fluid"
                            alt="First slide"
                            width="100%"
                            src={require('../assets/images/slider/slide-4.jpeg')}
                        />
                    </Carousel.Item>
                </Carousel>
            </section>

        </>
    )
}
export default Announce_banner;