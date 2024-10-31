import React from'react';
import Image from 'react-bootstrap/Image';
import '../assets/css/Section-title.css';
const Title = (props) =>{
    return(
        <>
            <div className="section-title wow flipInX center" data-wow-delay="0.1s" data-wow-duration="1.3s">
                <div className="section-title-simg img-40">
                    <Image src={require('../assets/images/rosa4.png')} alt="image" className='img-fluid'/>
                </div>                
            </div>
        </>
    )
}
export default Title;