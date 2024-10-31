import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import '../assets/css/ImageBanner.css';
import WOW from "wowjs";
import secBg_img from '../assets/images/img_banner/bg_img.jpg';
import Image from 'react-bootstrap/Image';

const ImgBanner = () => {

    const [wow, setWow] = useState(new WOW.WOW())

    useEffect(() => {
        setWow(wow.init())
    }, []);

    return (
        <>
            <section>
                <Container>                    
                    <div className="row align-items-center z_index">                        
                        <div className="col-lg-6 text-center wow fadeInUp" data-wow-delay="0.1s" data-wow-duration="1.2s">
                            <div className="middle-couple-pic">
                                <Image src={require('../assets/images/campi11.png')} alt="image" className='img-fluid' />
                            </div>
                        </div>                        
                    </div>
                </Container>
            </section>
            {/* <section className="img_banner" style={{ backgroundImage: `url(${secBg_img})` }}>
                <Container>
                    <div className="textContent text-center">
                        <h2>Let's Celebrate Our Love</h2>
                    </div>
                </Container>
            </section> */}
        </>

    )
}
export default ImgBanner;