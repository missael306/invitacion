import React, { useState } from 'react';
import Image from 'react-bootstrap/Image';
import Modal from 'react-bootstrap/Modal';
import "../assets/css/Address.css";
import Title from './Section-Title';


const Address = () =>{       
    const [show, setShow] = useState(false);
      
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    return(
        <>                       
            <section className="address_section section-padding pt-0" id="address">
                <div className="container"> 
                    <Title sec_title={'When & Where'}/>
                    <div className="wpo-event-wrap">
                        <div className="row justify-content-center">
                            <div className="col col-xl-4 col-lg-6 col-md-6 col-12">
                                <div className="wpo-event-item">
                                    <div className="wpo-event-text">
                                        <h2>The Reception</h2>
                                        <ul>
                                            <li>Monday, 25 Sep, 2021
                                                1:00 PM – 4:30 PM</li>
                                            <li>Estern Comunity Centure, 525 Road 123, USA</li>
                                            <li>Phone : +12345678910</li>

                                            <li><a className="popup-gmaps" href="#/" onClick={handleShow}>See Location</a></li>
                                        </ul>
                                    </div>
                                    <div className="event-shape-1">
                                        <Image src={require('../assets/images/bg/event-shape-1.png')} alt="shape" className='img-fluid'/>
                                    </div>
                                    <div className="event-shape-2">
                                        <Image src={require('../assets/images/bg/event-shape-2.png')} alt="shape" className='img-fluid'/>
                                    </div>
                                </div>
                            </div>
                            <div className="col col-xl-4 col-lg-6 col-md-6 col-12">
                                <div className="wpo-event-item">
                                    <div className="wpo-event-text">
                                        <h2>The Ceremony</h2>
                                        <ul>
                                            <li>Monday, 25 Sep, 2021
                                                1:00 PM – 4:30 PM</li>
                                            <li>Estern Comunity Centure, 525 Road 123, USA</li>
                                            <li>Phone : +12345678910</li>

                                            <li><a className="popup-gmaps" href="#/" onClick={handleShow}>See Location</a></li>
                                        </ul>
                                    </div>
                                    <div className="event-shape-1">
                                        <Image src={require('../assets/images/bg/event-shape-1.png')} alt="image" className='img-fluid'/>
                                    </div>
                                    <div className="event-shape-2">
                                        <Image src={require('../assets/images/bg/event-shape-2.png')} alt="image" className='img-fluid'/>
                                    </div>
                                </div>
                            </div>
                            <div className="col col-xl-4 col-lg-6 col-md-6 col-12">
                                <div className="wpo-event-item">
                                    <div className="wpo-event-text">
                                        <h2>Wedding Party</h2>
                                        <ul>
                                            <li>Monday, 25 Sep, 2021
                                                1:00 PM – 4:30 PM</li>
                                            <li>Estern Comunity Centure, 525 Road 123, USA</li>
                                            <li>Phone : +12345678910</li>

                                            <li><a className="popup-gmaps" href="#/" onClick={handleShow}>See Location</a></li>
                                        </ul>
                                    </div>
                                    <div className="event-shape-1">
                                        <Image src={require('../assets/images/bg/event-shape-1.png')} alt="image" />
                                    </div>
                                    <div className="event-shape-2">
                                        <Image src={require('../assets/images/bg/event-shape-2.png')} alt="image" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Modal show={show} onHide={handleClose} className="locationModal">
              <Modal.Header closeButton className="border-0 pb-0">
                <Modal.Title className="text-danger ">Location</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <iframe width="100%" height="400px" title='location_iframe' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25211.21212385712!2d144.95275648773628!3d-37.82748510398018!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0x5045675218ce7e0!2zTWVsYm91cm5lIFZJQyAzMDA0LCDgpoXgprjgp43gpp_gp43gprDgp4fgprLgpr_gpq_gprzgpr4!5e0!3m2!1sbn!2sbd!4v1503742051881" frameborder="0"></iframe>
              </Modal.Body>              
            </Modal>
        </>
    )
}
export default Address;