import React,{useState, useEffect} from 'react';
import Container from 'react-bootstrap/Container';
import '../assets/css/ImageBanner.css';
import WOW from "wowjs";
import secBg_img from '../assets/images/img_banner/bg_img.jpg';

const ImgBanner = () =>{
    
    const [wow, setWow] = useState(new WOW.WOW())

    useEffect(() => {
        setWow(wow.init())
    }, []); 

    return(
        <>
            <section className="img_banner" style={{backgroundImage: `url(${secBg_img})`}}>                
                <Container>
                    <div className="textContent text-center">
                        <h2>Let's Celebrate Our Love</h2>                        
                    </div>
                </Container>
            </section>
        </>
        
    )
}
export default ImgBanner;