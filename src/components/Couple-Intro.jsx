import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import WOW from "wowjs";
import '../assets/css/Couple-Intro.css';

const Intro = () => {
    const [wow, setWow] = useState(new WOW.WOW())
    useEffect(() => {
        setWow(wow.init())
    }, []);

    return (
        <>
            <section className="couple-section section-padding" id="couple">
                <div className="shape_1"><Image src={require('../assets/images/intro/bg_shape_1.png')} className="img-fluid" alt="side-img" width="100%" /></div>
                <div className="shape_2"><Image src={require('../assets/images/intro/bg_shape_2.png')} className="img-fluid" alt="side-img" width="100%" /></div>
                <Container>
                    <div className="row align-items-center z_index">
                        <div className="col-lg-3 text-center text-lg-end bride wow fadeInDown mt-5" data-wow-delay="0.1s" data-wow-duration="1.2s" >                            
                            <p>¡Llegó el día!</p>
                            <p>Queda en el recuerdo mi niñez y comienza una etapa que me permitirá reconocer nuevos retos y metas para cumplir mis sueños.</p>
                            <p>Estoy construyendo mi propio camino y deseso compartirlo rodeada de todos los que quiero.</p>
                            <h3>Mis papás</h3>                            
                            <p>Jessica Herrera Tapia</p>
                            <p>Javier Vargas Campos</p>
                        </div>
                        <div className="col-lg-6 text-center wow fadeInUp" data-wow-delay="0.1s" data-wow-duration="1.2s">
                            <div className="middle-couple-pic">
                                <Image src={require('../assets/images/intro/1.jpeg')} alt="image" className='img-fluid wow zoom' data-wow-delay='0.2s' data-wow-duration='1.5s' />
                                <div className="frame-img">
                                    <Image src={require('../assets/images/intro/shape.png')} alt="image" className='img-fluid' />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 text-center text-lg-start groom wow fadeInDown" data-wow-delay="0.1s" data-wow-duration="1.2s">                            
                            <h3>Mis padrinos</h3>
                            <p>Emilia Conde Flores</p>                        
                            <p>Jorge Campos Fuentes</p> 
                            {/* TODO: Agregar una cruz catolica  */}                                                        
                        </div>
                    </div>
                </Container>
            </section>
        </>
    )
}
export default Intro;