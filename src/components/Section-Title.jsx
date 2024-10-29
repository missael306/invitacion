import React from'react';
import Image from 'react-bootstrap/Image';
import '../assets/css/Section-title.css';
const Title = (props) =>{
    return(
        <>
            <div className="section-title wow flipInX center" data-wow-delay="0.1s" data-wow-duration="1.3s">
                <div className="section-title-simg">
                    <Image src={require('../assets/images/bg/section_title.png')} alt="image" className='img-fluid'/>
                </div>
                <h2>{props.sec_title}</h2>
                <div className="section-title-img">
                    <div className="round-ball"></div>
                </div>
            </div>
        </>
    )
}
export default Title;