import React from 'react';
import './Styles/join.css';
import Contact from './Contact';

export default function Join() {
  return (
    <>
      <div className='join scroll' id='join'>
        <p className="SmallHeadings">Looking for a great career opportunity?</p>
        <h4>Send your queries over here</h4>
        <h2><a href="mailto:contact@techvysion.com">contact@techvysion.com</a></h2>
        <p className="universalParaghraph">We at Vysion Technology, provide the opportunity to work with a knowledgeable, experienced, and fun team that works collectively. You have the chance to work remotely and be a part of a growing startup and contribute to writing the next success story.<br /><br />

          We offer a diverse and collaborative environment in fields like Mechatronics, Robotics, CAD designing, Electronics, Material Sciences, Industrial Production,
          Embedded Systems and Flutter Development.<br /><br />

          We provide extensive training in respective domains, and we have some bigger plans and need ones who can contribute effectively and learn quickly.
        </p>
      </div>




      <Contact/>




      <section className="footer">
        <div className="upperFooter">

          <div className="vysionImg">
            <img src="https://ik.imagekit.io/hgfugmm0dbi/Vysion_Website_Assets/LandingVysion_h6b7jHRup.png?ik-sdk-version=javascript-1.4.3&updatedAt=1655200955883" alt="vysion" />
          </div>

          <div className="explore">
            <p><b>Explore</b></p>
            <a href="https://techvysion.com" target="_blank" rel="noreferrer"><p>Vysion Technologies</p></a>
            <a href="#home"><p>Decon</p></a>
            <a href="https://dhruvaan.com/" target="_blank" rel="noreferrer"><p>Dhruvaan</p></a>
            <p style={{ cursor: 'not-allowed' }}>Gurucamp</p>
          </div>

          <div className="visit">
            <p><b>Visit</b></p>
            <p>Vysion Technology, Top floor, Manibhadra building, 18/722, In front of Chand vilas, chopasani housing board, Jodhpur - 342008
              (Rajsthan)</p>
          </div>

          <div className="emailus">
            <p><b>Contact Us</b></p>
            <p>+91 - 80786 93503</p>
            <p>info@<br className='br' />techvysion.com</p>
          </div>

          <div className="legal">
            <p><b>Legal</b></p>
            <p>Terms</p>
            <p>Privacy</p>
          </div>
        </div>
        <div className="lowerFooter">
          <div className="socials">

            <a href="https://www.instagram.com/vysion_tech" target="_blank" rel="noreferrer"><i className="fab fa-instagram" id="insta"></i></a>

            <a href="https://twitter.com/vysion_tech" target="_blank" rel="noreferrer"><i className="fab fa-twitter" id="twitter"></i></a>

            <a href="https://in.linkedin.com/company/vysion-tech" target="_blank" rel="noreferrer"><i className="fab fa-linkedin-in" id="linkedin"></i></a>

            <a href="https://www.facebook.com/vysiontech95" target="_blank" rel="noreferrer"><i className="fab fa-facebook-f" id="facebook"></i></a>

          </div>
          <p className='universalParaghraph'><b>@ 2022 Vysion Technology. All right reserved.</b></p>
        </div>
      </section>
    </>
  )
}
