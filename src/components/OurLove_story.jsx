import React,{useState, useEffect} from 'react';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import WOW from "wowjs";
import '../assets/css/OurLoverStory.css'
import Title from './Section-Title';

const OurLovestory = () => {
    const [wow, setWow] = useState(new WOW.WOW())
    useEffect(() => {
        setWow(wow.init())
    }, []); 
    return(
        <>
            <section className="love_story section-padding" id="story" >
                <Container>                    
                    <Title/>
                    <div className="row">
                        <div className="col col-xs-12">
                            <div className="story-timeline">
                                <div className="round-shape"></div>
                                <div className="row order_column">
                                    <div className="col col-lg-6 col-12 wow fadeInRight" data-wow-delay="0.2s" data-wow-duration="1.5s">
                                        <div className="story-text right-align-text">
                                            <h3>¿Cuándo?</h3>
                                            <span className="date">Sábado 16 de Noviembre de 2024</span>                                        
                                        </div>
                                    </div>
                                    <div className="col col-lg-6 col-12">
                                            <Image src={require('../assets/images/calendario.png')} alt="image" className="img-fluid img img-responsive wow fadeInLeft" data-wow-delay="0.4s" data-wow-duration="1.5s"/>                                                                                    
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col col-lg-6 col-12">
                                        <div className="img-holder right-align-text left-site">
                                            <Image src={require('../assets/images/our_story/2.jpg')} alt="image" className="img img-fluid img-responsive wow fadeInRight" data-wow-delay="0.6s" data-wow-duration="1.5s"/>
                                            <div className="story-shape-img">
                                                <Image src={require('../assets/images/our_story/shape.png')} alt="image" className='img-fluid'/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col col-lg-6 col-12 text-holder ">
                                        <span className="heart">
                                            <i className="fi flaticon-calendar wow zoomIn" data-wow-delay="0.5s" data-wow-duration="1s"></i>
                                        </span>
                                        <div className="story-text wow fadeInLeft" data-wow-delay="0.8s" data-wow-duration="1.5s">
                                            <h3>First Date</h3>
                                            <span className="date">March 16,2016</span>
                                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="row order_column">
                                    <div className="col col-lg-6 col-12 text-holder right-heart">
                                        <span className="heart">
                                            <i className="fi flaticon-dove"></i>
                                        </span>
                                        <div className="story-text right-align-text wow fadeInRight" data-wow-delay="0.5s" data-wow-duration="1.5s">
                                            <h3>Marriage Proposal</h3>
                                            <span className="date">June 16,2017</span>
                                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                                        </div>
                                    </div>
                                    <div className="col col-lg-6 col-12">
                                        <div className="img-holder right-align-text">
                                            <Image src={require('../assets/images/our_story/3.jpg')} alt="image" className="img img-fluid img-responsive wow fadeInLeft" data-wow-delay="0.8s" data-wow-duration="1.5s"/>
                                            <div className="story-shape-img">
                                                <Image src={require('../assets/images/our_story/shape.png')} alt="image" className='img-fluid'/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col col-lg-6 col-12">
                                        <div className="img-holder video-holder left-site">
                                            <Image src={require('../assets/images/our_story/4.jpg')} alt="image" className="img img-fluid img-responsive wow fadeInRight" data-wow-delay="0.5s" data-wow-duration="1.5s"/>
                                            <div className="story-shape-img">
                                                <Image src={require('../assets/images/our_story/shape.png')} alt="image" className='img-fluid'/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col col-lg-6 col-12 text-holder">
                                        <span className="heart">
                                            <i className="fi flaticon-wedding-rings wow zoomIn" data-wow-delay="0.5s" data-wow-duration="0.5s"></i>   
                                        </span>
                                        <div className="story-text wow fadeInLeft" data-wow-delay="0.8s" data-wow-duration="1.5s">
                                            <h3>Our Engagement</h3>
                                            <span className="date">May 23,2021</span>
                                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
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