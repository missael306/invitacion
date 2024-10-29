import React from 'react';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Fancybox from "./Fancybox-gallery";
import '../assets/css/Footer.css';

const Footer = () => {
    return(
        <>
            <footer className="footer">
                <div className="wpo-upper-footer">
                    <Container>
                    <div className="row">
                        <div className="separator"></div>
                        <div className="col col-lg-4 col-md-6 col-sm-6 col-12">
                            <div className="widget text-widget">
                                <div className="widget about-widget ">
                                    <div className="logo widget-title"> 
                                        <Image src={require('../assets/images/logo/footer-logo.png')} alt="footer logo" width="100%"/> 
                                    </div>
                                    <p>Welcome and open yourself to your <br /> truest love this year with us! <br /> With the Release Process.</p>
                                    <div className="social-icons">
                                        <ul>
                                            <li><a href="#/"><i className="fa fa-facebook-official"></i></a></li>
                                            <li><a href="#/"><i className="fa-brands fa-twitter"></i></a></li>
                                            <li><a href="#/"><i className="fa-brands fa-instagram"></i></a></li>
                                            <li><a href="#/"><i className="fa-brands fa-pinterest"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="clear"></div>
                            </div>		
                        </div>                        
                        <div className="col col-lg-4 col-md-6 col-sm-6 col-12 mt-3 mt-sm-0">
                            <div className=" widget text-widget">
                                <div className="widget-title">
                                    <h3>Address</h3></div>
                                <div className="contact-ft">
                                    <p>Would you have any enquiries. <br /> Lease feel free to contact us</p>
                                    <ul>
                                        <li><a href="mailto:example@gmail.com"><i className="fa fa-envelope"></i>example@gmail.com</a></li>
                                        <li><a href="tel:+9876543210"><i className="fa fa-phone"></i>+98765 43210</a></li>
                                        <li><a href="#/"><i className="fa fa-map-marker"></i>New York – 1075 Firs Avenue</a></li>
                                    </ul>
                                </div>			
                            </div>		
                        </div>
                        <div className="col col-lg-4 col-md-12 mt-sm-4 mt-lg-0 col-sm-12 col-12 d-none d-md-block">
                            <div className=" widget widget_media_gallery">
                                <div className="widget-title">
                                    <h3>Photography</h3></div>
                                    <div className="gallery">
                                        <Fancybox>                 
                                            <figure className="gallery-item">
                                                <a href="#/" data-fancybox="footer-gallery" data-src={require('../assets/images/footer/5.jpg')}>
                                                    <Image src={require('../assets/images/footer/5.jpg')} className="attachment-thumbnail size-thumbnail" alt="image-gallery" />
                                                </a>                                        
                                            </figure>                                 
                                        </Fancybox>
                                        <Fancybox>                 
                                            <figure className="gallery-item">
                                                <a href="#/" data-fancybox="footer-gallery" data-src={require('../assets/images/footer/6.jpg')}>
                                                    <Image src={require('../assets/images/footer/6.jpg')} className="attachment-thumbnail size-thumbnail" alt="image-gallery" />
                                                </a>                                        
                                            </figure>                                
                                        </Fancybox>
                                        <Fancybox>                 
                                            <figure className="gallery-item">
                                                <a href="#/" data-fancybox="footer-gallery" data-src={require('../assets/images/footer/7.jpg')}>
                                                    <Image src={require('../assets/images/footer/7.jpg')} className="attachment-thumbnail size-thumbnail" alt="image-gallery" />
                                                </a>                                        
                                            </figure>                                
                                        </Fancybox>
                                        <Fancybox>                 
                                            <figure className="gallery-item">
                                                <a href="#/" data-fancybox="footer-gallery" data-src={require('../assets/images/footer/8.jpg')}>
                                                    <Image src={require('../assets/images/footer/8.jpg')} className="attachment-thumbnail size-thumbnail" alt="image-gallery" />
                                                </a>                                        
                                            </figure>                                
                                        </Fancybox>        
                                        <Fancybox>                 
                                            <figure className="gallery-item">
                                                <a href="#/" data-fancybox="footer-gallery" data-src={require('../assets/images/footer/1.jpg')}>
                                                    <Image src={require('../assets/images/footer/1.jpg')} className="attachment-thumbnail size-thumbnail" alt="image-gallery" />
                                                </a>                                        
                                            </figure>                                
                                        </Fancybox> 
                                        <Fancybox>                 
                                            <figure className="gallery-item">
                                                <a href="#/" data-fancybox="footer-gallery" data-src={require('../assets/images/footer/2.jpg')}>
                                                    <Image src={require('../assets/images/footer/2.jpg')} className="attachment-thumbnail size-thumbnail" alt="image-gallery" />
                                                </a>                                        
                                            </figure>                                
                                        </Fancybox>  
                                        <Fancybox>                 
                                            <figure className="gallery-item">
                                                <a href="#/" data-fancybox="footer-gallery" data-src={require('../assets/images/footer/3.jpg')}>
                                                    <Image src={require('../assets/images/footer/3.jpg')} className="attachment-thumbnail size-thumbnail" alt="image-gallery" />
                                                </a>                                        
                                            </figure>                                
                                        </Fancybox> 
                                        <Fancybox>                 
                                            <figure className="gallery-item">
                                                <a href="#/" data-fancybox="footer-gallery" data-src={require('../assets/images/footer/4.jpg')}>
                                                    <Image src={require('../assets/images/footer/4.jpg')} className="attachment-thumbnail size-thumbnail" alt="image-gallery" />
                                                </a>                                        
                                            </figure>                                
                                        </Fancybox>          
                                    </div>			
                                </div>		
                            </div>
                        </div>                        
                    </Container>		
                </div>
                <div className="wpo-lower-footer  has-not-copyright text-center">
                    <Container>
                        <div className="row">
                        <div className="separator"></div>
                        <div className="col col-xs-12">
                            <p>© Copyright 2022 | <a href="#/">WedLove - Wedding Announcement - React Template</a> | All right reserved.</p>      </div>
                        </div>
                    </Container>
                </div>
            </footer>
        </>
    )
}

export default Footer;