import React, { Fragment } from 'react';
import Loader from '../components/Loader';
import Header from '../components/Header';
import Banner from '../components/Banner';
import Address from '../components/Address';
import Intro from '../components/Couple-Intro';
import Footer from '../components/Footer';
import ImgBanner from '../components/Image_banner';
import OurLovestory from '../components/OurLove_story';
import OurLovestory2 from '../components/OurLove_story2';
import Gallery from '../components/Gallery';
import RSVP from '../components/Rsvp';
import Presentation from '../components/Presentation.jsx';
import '../assets/css/animate.min.css';
import '../assets/css/flaticon.css';
import '../assets/css/themify.css';
import '../assets/css/Default.css';
import '../assets/css/Header.css';
import '../assets/js/script.js';
import '../assets/css/Custom.css';

const Home = () => {
    return (
        <>
            {/* <Loader loader={true}/>
            <Fragment>
                <Presentation/>
            </Fragment> */}
            <Fragment>
                <Presentation />
                <Header />
                {/* <Banner/> */}
                <Intro />
                <OurLovestory />
                <ImgBanner />
                <OurLovestory2 />               
                <RSVP />
                <Gallery />
                <Address />
                <Footer />
            </Fragment>
        </>
    )
}
export default Home;