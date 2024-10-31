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
            <section className="love_story section-padding mt-5" id="story" >
                <div className="col-lg-3 text-center text-lg-start groom wow fadeInRight mt-5" data-wow-delay="0.1s" data-wow-duration="1.2s">
                    <h3 className='text-center'>Sábado <span className='letter-16'>16</span> Noviembre </h3>
                </div>
                <Container>
                    <div className="row">
                        <div className="col col-xs-12">
                            <div className="story-timeline">
                                <div className="round-shape"></div>
                                <div className="row order_column">
                                    <div className="col col-lg-6 col-12">
                                        <Image src={require('../assets/images/calendario.png')} alt="image" className="img-fluid img img-responsive wow fadeInLeft" data-wow-delay="0.4s" data-wow-duration="1.5s" />
                                    </div>
                                </div>
                                <div className="row">
                                    <h3 className='text-center wow fadeInLeft' data-wow-delay="0.8s" data-wow-duration="1.5s">Ceremonia Religiosa</h3>
                                    <div className="col col-lg-6 col-12 text-holder ">
                                        <div className="story-text wow fadeInLeft" data-wow-delay="0.8s" data-wow-duration="1.5s">
                                            <PiChurch className="letter-span img img-fluid img-responsive wow fadeInRight" data-wow-delay="0.6s" data-wow-duration="1.5s" />
                                        </div>
                                    </div>                                    
                                    <div className="col col-lg-6 col-12 text-holder ">
                                        <span className="heart">
                                            <i className="fi flaticon-calendar wow zoomIn" data-wow-delay="0.5s" data-wow-duration="1s"></i>
                                        </span>
                                        <div className="story-text wow fadeInLeft" data-wow-delay="0.8s" data-wow-duration="1.5s">
                                            <h3>Parroquia provisional de Tepexco</h3>
                                            <p>Calle Francisco I. Madero</p>
                                            <p><b>1:30 pm</b></p>
                                        </div>
                                        <a href="https://www.google.com/maps/@18.6401706,-98.6904038,3a,75y,228.25h,77.81t/data=!3m7!1e1!3m5!1scNpe18LzKpskwih83RQ4Fw!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D12.189999999999998%26panoid%3DcNpe18LzKpskwih83RQ4Fw%26yaw%3D228.25!7i16384!8i8192?coh=205410&entry=ttu&g_ep=EgoyMDI0MTAyNy4wIKXMDSoASAFQAw%3D%3D" target='_blank'>
                                            <div className="button story-text wow fadeInLeft" data-wow-delay="0.8s" data-wow-duration="1.5s">
                                                ¿Cómo llegar?
                                            </div>
                                        </a>

                                        <div className="col col-lg-6 col-12 wow fadeInRight" data-wow-delay="0.8s" data-wow-duration="1.5s">
                                            <Image src={require('../assets/images/cheers.png')} alt="image" className="img-fluid img img-responsive wow fadeInLeft w-60" data-wow-delay="0.4s" data-wow-duration="1.5s" />
                                        </div>
                                        <span className="heart">
                                            <i className="fi flaticon-calendar wow zoomIn" data-wow-delay="0.5s" data-wow-duration="1s"></i>
                                        </span>
                                        <div className="story-text wow fadeInRight" data-wow-delay="0.8s" data-wow-duration="1.5s">
                                            <h3>Seminario Conciliar de Tepexco</h3>
                                            <p>Calle Independencia Oriente 44, Centro, 74550 Tepexco, Pue.</p>
                                            <p><b>3:00 pm</b></p>
                                        </div>
                                        <a href="https://www.google.com/maps/place/Seminario+Conciliar+de+M%C3%A9xico+Casa+Tepexco/@18.6423657,-98.6853089,18z/data=!4m6!3m5!1s0x85ce59f4224fa361:0xc5fd52765454c0f2!8m2!3d18.6424339!4d-98.685257!16s%2Fg%2F11q9dmr8k7?entry=ttu&g_ep=EgoyMDI0MTAyNy4wIKXMDSoASAFQAw%3D%3D" target='_blank'>
                                            <div className="button story-text wow fadeInRight" data-wow-delay="0.8s" data-wow-duration="1.5s">
                                                ¿Cómo llegar?
                                            </div>
                                        </a>

                                        <div className="col col-lg-6 col-12 wow fadeInRight" data-wow-delay="0.8s" data-wow-duration="1.5s">
                                            <Image src={require('../assets/images/dress_code.png')} alt="image" className="img-fluid img img-responsive wow fadeInLeft w-60" data-wow-delay="0.4s" data-wow-duration="1.5s" />
                                        </div>
                                        <span className="heart">
                                            <i className="fi flaticon-calendar wow zoomIn" data-wow-delay="0.5s" data-wow-duration="1s"></i>
                                        </span>
                                        <div className="story-text wow fadeInRight" data-wow-delay="0.8s" data-wow-duration="1.5s">
                                            <h3>Código de vestimenta</h3>
                                            <p>Formal o Cóctel</p>
                                            <p><b>El color rojo queda reservado para la quinceañera.</b></p>
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