import React from 'react';
import { useState } from 'react';
import './Styles/contact.css';
import emailjs from '@emailjs/browser';

export default function Contact() {
    const [Result, showResult] = useState(false);
    const sendEmail = (e) => {
        e.preventDefault();
        // sending mail to official comapany mail
        emailjs.sendForm('service_u129yov', 'template_60vr1v2', e.target, 'user_8PpG3ZPT7ffRvVjXahzd4')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        e.target.reset();
        showResult(true);
    };

     setTimeout(() => {
         showResult(false)
     }, 4000);

    const [baseStyle, setbaseStyle] = useState('80px')
    const [contactFormIs, setcontactFormIs] = useState(false)
    const expand_contactForm = () => {
        if (contactFormIs === false) {
            setbaseStyle('400px')
            setcontactFormIs(true)
        }
        else {
            setbaseStyle('80px')
            setcontactFormIs(false)
        }
    }

    return (
        <section className="contact scroll" id="contact">
            <div className="base" style={{ height: baseStyle }}>
                <div className="contactHeading">
                    <p className='SmallHeadings'>Have any Querries? Send us here.</p>
                    <button onClick={expand_contactForm} className="universalButton contactButton">{contactFormIs ? "Close" : "Send a message"}</button>
                </div>
                {
                    contactFormIs === true ? <div className="contactForm">
                        <form className="textFeilds" onSubmit={sendEmail}>
                            <div className="nameEmail">
                                <input type="text" name="fullName" id="name" placeholder="What's your name ?" required></input>
                                <input type="text" name="email" id="email" placeholder="What's your email ?" required></input>
                            </div>
                            <div className="message">
                                <textarea name="message" id="" placeholder="Write your message here..." required></textarea>
                            </div>
                            <button className="send">Send Message</button>
                        </form>
                        {
                            Result ? <Success /> : ''
                        }
                    </div>
                        : ''
                }



            </div>
        </section>
    )
}

function Success() {
    return (
        <p className="universalParaghraph result">Message sent successfully.</p>
    );
};