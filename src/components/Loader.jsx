import React, { useState } from "react";
import Image from 'react-bootstrap/Image';
import "../assets/css/Loader.css";


const Loader = (props) => {
    const [loader, ] = useState(props.loader)
    return(
        <>  
            {
                loader === true
                ?    
                <div className="page_loader" id="pageLoader"> 
                    <div className="loading-wrapper">
                        <div className="loader-heart loader-heart1"><Image src={require('../assets/images/loader/intro-heart.png')} alt="heart img" /></div>
                        <div className="loader-heart loader-heart2"><Image src={require('../assets/images/loader/intro-heart.png')} alt="heart img" /></div>
                        <div className="loader-heart loader-heart3"><Image src={require('../assets/images/loader/intro-heart.png')} alt="heart img" /></div>
                        <Image src={require('../assets/images/loader/loader_wedlove.gif')} className="img-fluid" alt="heart img" />
                    </div>   
                </div>
                :
                ''
            }        
        </>
    )
}
export default Loader;