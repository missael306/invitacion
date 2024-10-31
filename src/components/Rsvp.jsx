import React, { useState, useEffect } from 'react';
import SimpleReactValidator from 'simple-react-validator';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import WOW from "wowjs";
import '../assets/css/Rsvp.css';
import Title from './Section-Title';

const RSVP = (props) => {
    const [wow, setWow] = useState(new WOW.WOW())
    useEffect(() => {
        setWow(wow.init())
    }, []);
    const [forms, setForms] = useState({
        name: '',
        email: '',
        address: '',
        meal: '',
        attend: '',
        guest: ''
    });

    const [validator] = useState(new SimpleReactValidator({
        className: 'errorMessage'
    }));

    const changeHandler = e => {
        setForms({ ...forms, [e.target.name]: e.target.value })
        if (validator.allValid()) {
            validator.hideMessages();
        } else {
            validator.showMessages();
        }
    };

    const submitHandler = e => {
        e.preventDefault();
        if (validator.allValid()) {
            validator.hideMessages();
            setForms({
                name: '',
                text: '',
                address: '',
                meal: '',
                attend: '',
                guest: ''
            })
        } else {
            validator.showMessages();
        }
    };
    return (
        <>
            <section>
                <Container>
                    <div className="row align-items-center z_index">
                        <div className="col-lg-6 text-center wow fadeInUp" data-wow-delay="0.1s" data-wow-duration="1.2s">
                            <div className="middle-couple-pic">
                                <Image src={require('../assets/images/campi12.png')} alt="image" className='img-fluid' />
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
            <section className="rsvp_section section-padding pb-0" id="rspv">
                <Container>
                    <div className="row justify-content-center">
                        <div className="d-none col-md-3 col-xl-3 d-lg-flex align-items-end">
                            <div className="bg_1">
                                <Image src={require('../assets/images/rsvp/1.png')} alt="image" className="img-fluid  wow fadeInLeft" data-wow-delay="0.8s" data-wow-duration="1.5s" />
                            </div>
                        </div>

                        <div className="col-lg-6 col-xl-6">
                            <div className="content_wrapper">
                                <div className="rsvpForm_area">
                                    <Title sec_title={'Are you attending?'} />
                                    <form onSubmit={(e) => submitHandler(e)} className="contact-validation-active" >
                                        <div className="form-field">
                                            <input
                                                value={forms.name}
                                                type="text"
                                                name="name"
                                                onBlur={(e) => changeHandler(e)}
                                                onChange={(e) => changeHandler(e)}
                                                className="form-control"
                                                placeholder="Your Name" />
                                            {validator.message('name', forms.name, 'required|alpha_space')}
                                        </div>
                                        <div className="form-field">
                                            <input
                                                value={forms.text}
                                                type="number"
                                                name="text"
                                                onBlur={(e) => changeHandler(e)}
                                                onChange={(e) => changeHandler(e)}
                                                className="form-control"
                                                placeholder="Your Number" />
                                            {validator.message('text', forms.text, 'required|text')}
                                        </div>
                                        <div className="form-field radio-buttons">
                                            <p className="mb-0">
                                                <input type="radio" id="attend" name="radio-group" defaultChecked className="d-none" />
                                                <label htmlFor="attend">Yes, I will be there</label>
                                            </p>
                                            <p className="mb-0">
                                                <input type="radio" id="not" name="radio-group" className="d-none" />
                                                <label htmlFor="not">Sorry, I can’t come</label>
                                            </p>
                                        </div>
                                        <div className="form-field">
                                            <select
                                                onBlur={(e) => changeHandler(e)}
                                                onChange={(e) => changeHandler(e)}
                                                value={forms.guest}
                                                type="text"
                                                className="form-control"
                                                name="guest">
                                                <option>Number Of Guests</option>
                                                <option>01</option>
                                                <option>02</option>
                                                <option>03</option>
                                                <option>04</option>
                                                <option>05</option>
                                            </select>
                                            {validator.message('guest', forms.guest, 'required')}
                                        </div>
                                        <div className="form-field">
                                            <input
                                                value={forms.attend}
                                                type="text"
                                                name="attend"
                                                onBlur={(e) => changeHandler(e)}
                                                onChange={(e) => changeHandler(e)}
                                                className="form-control"
                                                placeholder="What Will You Be Attending" />
                                            {validator.message('attend', forms.attend, 'required')}
                                        </div>
                                        <div className="form-field">
                                            <select
                                                onBlur={(e) => changeHandler(e)}
                                                onChange={(e) => changeHandler(e)}
                                                value={forms.meal}
                                                type="text"
                                                className="form-control"
                                                name="meal">
                                                <option>Meal Preferences</option>
                                                <option>Chicken Soup</option>
                                                <option>Motton Kabab</option>
                                                <option>Chicken BBQ</option>
                                                <option>Mix Salad</option>
                                                <option>Beef Ribs </option>
                                            </select>
                                            {validator.message('meal', forms.meal, 'required')}
                                        </div>
                                        <div className="submit-area">
                                            <button type="submit" className="theme-btn">Submit Now</button>
                                        </div>
                                    </form >
                                    <div className="border-style"></div>
                                </div>
                            </div>
                        </div>
                        <div className="d-none d-lg-block col-md-3 col-xl-3">
                            <div className="bg_2">
                                <Image src={require('../assets/images/rsvp/2.png')} alt="image" className="img-fluid" />
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default RSVP;