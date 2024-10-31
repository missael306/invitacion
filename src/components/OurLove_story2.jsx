import React, { useState, useEffect } from 'react';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import WOW from "wowjs";
import '../assets/css/OurLoverStory.css'
import { PiChurch } from "react-icons/pi";

const OurLovestory = () => {
    const [wow, setWow] = useState(new WOW.WOW())
    useEffect(() => {
        setWow(wow.init())
    }, []);
    return (
        <>
            <section className="love_story section-padding mt-5" id="story2" >
                <Container>
                    <div className="row">
                        <div className="col col-xs-12">
                            <div className="story-timeline">
                                <div className="row">
                                    <h3 className='text-center wow fadeInLeft' data-wow-delay="0.8s" data-wow-duration="1.5s">Opciones de regalo</h3>
                                    <div className="col col-lg-6 col-12 text-holder ">
                                        <div className="col col-lg-6 col-12 wow fadeInRight" data-wow-delay="0.8s" data-wow-duration="1.5s">
                                            <Image src={require('../assets/images/sobre.png')} alt="image" className="img-fluid img img-responsive wow fadeInLeft w-60" data-wow-delay="0.4s" data-wow-duration="1.5s" />
                                        </div>
                                    </div>
                                    <div className="col col-lg-6 col-12 text-holder ">
                                        <span className="heart">
                                            <i className="fi flaticon-calendar wow zoomIn" data-wow-delay="0.5s" data-wow-duration="1s"></i>
                                        </span>
                                        <div className="story-text wow fadeInLeft" data-wow-delay="0.8s" data-wow-duration="1.5s">
                                            <h3>¡Lluvia de sobres!</h3>
                                            <p>La lluvia de sobres es la tradición de regalar dinero en efectivo dentro de un sobre el día del evento.</p>                                            
                                        </div>                                        

                                        <div className="col col-lg-6 col-12 wow fadeInRight" data-wow-delay="0.8s" data-wow-duration="1.5s">
                                            <Image src={require('../assets/images/regalo2.png')} alt="image" className="img-fluid img img-responsive wow fadeInLeft w-60" data-wow-delay="0.4s" data-wow-duration="1.5s" />
                                        </div>
                                        <span className="heart">
                                            <i className="fi flaticon-calendar wow zoomIn" data-wow-delay="0.5s" data-wow-duration="1s"></i>
                                        </span>
                                        <div className="story-text wow fadeInRight" data-wow-delay="0.8s" data-wow-duration="1.5s">
                                            <h3>¡Regalo sorpresa!</h3>
                                            <p>Estoy segura que me encantará.</p>                                            
                                        </div>                                                                                
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col offset-lg-6 col-lg-6 col-12 text-holder">
                                        <span className="heart">
                                            <i className="fi ti-search wow zoomIn" data-wow-delay="0.5s" data-wow-duration="0.5s"></i>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default OurLovestory;