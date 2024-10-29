import React from "react";
import Container from 'react-bootstrap/Container';
import '../assets/css/Gallery.css'
import Fancybox from "./Fancybox-gallery";
import Image from 'react-bootstrap/Image';
import Title from "./Section-Title";

const Gallery = () => {
    return(
        <>
            <section className="gallery_sec section-padding pb-0" id="gallery">
                <Container>
                    <Title sec_title={'Sweet Captured Moments'}/>
                    <div className="grid_row">                                              
                        <Fancybox>  
                            <div className="galleryBox box_2_start" data-fancybox="gallery" data-src={require('../assets/images/gallery/1.jpg')} >
                                <Image  
                                    src={require('../assets/images/gallery/1.jpg')}                                             
                                    alt="image" 
                                    className='img-fluid' 
                                    width="100%"/>
                                <div className="iconBox">
                                    <i className="fa fa-plus" aria-hidden="true"></i>
                                </div>                                                                                          
                            </div>                                   
                        </Fancybox>                                         
                        <Fancybox>  
                            <div className="galleryBox" data-fancybox="gallery" data-src={require('../assets/images/gallery/2.jpg')} >
                                <Image  
                                    src={require('../assets/images/gallery/2.jpg')}                                             
                                    alt="image" 
                                    className='img-fluid' 
                                    width="100%"/>
                                <div className="iconBox">
                                    <i className="fa fa-plus" aria-hidden="true"></i>
                                </div>                                                                                          
                            </div>                                   
                        </Fancybox>                          
                        <Fancybox>  
                            <div className="galleryBox" data-fancybox="gallery" data-src={require('../assets/images/gallery/3.jpg')} >
                                <Image  
                                    src={require('../assets/images/gallery/3.jpg')}                                             
                                    alt="image" 
                                    className='img-fluid' 
                                    width="100%"/>
                                <div className="iconBox">
                                    <i className="fa fa-plus" aria-hidden="true"></i>
                                </div>                                                                                          
                            </div>                                   
                        </Fancybox>                                         
                        <Fancybox>  
                            <div className="galleryBox" data-fancybox="gallery" data-src={require('../assets/images/gallery/4.jpg')} >
                                <Image  
                                    src={require('../assets/images/gallery/4.jpg')}                                             
                                    alt="image" 
                                    className='img-fluid' 
                                    width="100%"/>
                                <div className="iconBox">
                                    <i className="fa fa-plus" aria-hidden="true"></i>
                                </div>                                                                                          
                            </div>                                   
                        </Fancybox>                                         
                        <Fancybox>  
                            <div className="galleryBox" data-fancybox="gallery" data-src={require('../assets/images/gallery/5.jpg')} >
                                <Image  
                                    src={require('../assets/images/gallery/5.jpg')}                                             
                                    alt="image" 
                                    className='img-fluid' 
                                    width="100%"/>
                                <div className="iconBox">
                                    <i className="fa fa-plus" aria-hidden="true"></i>
                                </div>                                                                                          
                            </div>                                   
                        </Fancybox>                                   
                        <Fancybox>  
                            <div className="galleryBox box_4_4_Box" data-fancybox="gallery" data-src={require('../assets/images/gallery/6.jpg')} >
                                <Image  
                                    src={require('../assets/images/gallery/6.jpg')}                                             
                                    alt="image" 
                                    className='img-fluid' 
                                    width="100%"/>
                                <div className="iconBox">
                                    <i className="fa fa-plus" aria-hidden="true"></i>
                                </div>                                                                                          
                            </div>                                   
                        </Fancybox>   
                        <Fancybox>  
                            <div className="galleryBox box_2_start second" data-fancybox="gallery" data-src={require('../assets/images/gallery/8.jpg')} >
                                <Image  
                                    src={require('../assets/images/gallery/8.jpg')}                                             
                                    alt="image" 
                                    className='img-fluid' 
                                    width="100%"/>
                                <div className="iconBox">
                                    <i className="fa fa-plus" aria-hidden="true"></i>
                                </div>                                                                                          
                            </div>                                   
                        </Fancybox>                                         
                        <Fancybox>  
                            <div className="galleryBox box_50_start" data-fancybox="gallery" data-src={require('../assets/images/gallery/7.jpg')} >
                                <Image  
                                    src={require('../assets/images/gallery/7.jpg')}                                             
                                    alt="image" 
                                    className='img-fluid' 
                                    width="100%"/>
                                <div className="iconBox">
                                    <i className="fa fa-plus" aria-hidden="true"></i>
                                </div>                                                                                          
                            </div>                                   
                        </Fancybox>                          
                        <Fancybox>  
                            <div className="galleryBox box_50_end" data-fancybox="gallery" data-src={require('../assets/images/gallery/9.jpg')} >
                                <Image  
                                    src={require('../assets/images/gallery/9.jpg')}                                             
                                    alt="image" 
                                    className='img-fluid' 
                                    width="100%"/>
                                <div className="iconBox">
                                    <i className="fa fa-plus" aria-hidden="true"></i>
                                </div>                                                                                          
                            </div>                                   
                        </Fancybox>                                                                           
                    </div>
                </Container>
            </section>
        </>
    )
}
export default Gallery;
