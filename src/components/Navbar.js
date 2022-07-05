import React, { useState } from 'react';
// import { scroller } from "react-scroll";
import './Styles/navbar.css';
import logoDesktop from './assets/logoNew.png';

export default function Navbar(props) {

  const [Active, setActive] = useState(0);

  var prevScrollpos = window.pageYOffset;
  window.onscroll = function () {

    // for hiding the navbar
    var currentScrollPos = window.pageYOffset;
    prevScrollpos = currentScrollPos;



    // // for changing the navbar color on scroll
    if (currentScrollPos < document.getElementById('deviceData').offsetTop) {
      document.getElementById("navbar").style.backgroundColor = "transparent";
      document.getElementById("he").style.color = "white";
    }
    else {
      document.getElementById("navbar").style.backgroundColor = "var(--trans)";
      document.getElementById("he").style.color = "var(--PrimaryBackCol)";
    }
    // changing current page
    if (currentScrollPos >= document.getElementById("home").offsetTop && currentScrollPos < document.getElementById("about").offsetTop) {
      setActive(0);
    }
    else if (currentScrollPos >= document.getElementById("about").offsetTop && currentScrollPos < document.getElementById("parts").offsetTop) {
      setActive(1)
    }
    else if (currentScrollPos >= document.getElementById("parts").offsetTop && currentScrollPos < document.getElementById("application").offsetTop) {
      setActive(2);
    }
    else if (currentScrollPos >= document.getElementById("application").offsetTop && currentScrollPos < document.getElementById("benefits").offsetTop) {
      setActive(3);
    }
    else if (currentScrollPos >= document.getElementById("benefits").offsetTop && currentScrollPos < document.getElementById("join").offsetTop) {
      setActive(4);
    }
    else if (currentScrollPos >= document.getElementById("join").offsetTop) {
      setActive(5);
    }

    if( currentScrollPos > document.getElementById("home").offsetHeight*1/4 && currentScrollPos < document.getElementById('deviceData').offsetTop ){
      props.setCurrentSection(10);
      // console.log("data triggered");
    }
  }

  //  useEffect(() => {

  //     console.log(Active);
  //  }, [Active])


  // autoscroll function for mobile devices
  const scrollToSection = (key) => {
    window.scrollTo({
      top: document.getElementById(key).offsetTop,
      left: 0,
      behavior: 'smooth'
    });
  };


  const [hamMenu, sethamMenu] = useState(false);

  return (
    <div className="navbarBase" id='navbar'>

      <div className="companylogocontainer" onClick={() => { scrollToSection("home") }}>
        <img src={logoDesktop} alt="logo" id="logoDesktop" />
        <img src="https://ik.imagekit.io/hgfugmm0dbi/Decon/Group_1102_xf771cIJc.png?ik-sdk-version=javascript-1.4.3&updatedAt=1651300985923" alt="" id="logoMobile" />
      </div>

      <div className="navbarWrapper">

        <div className="websiteLinks" id='he'>
          <div className={Active === 0 ? "linkContainer active" : "linkContainer"} onClick={() => { scrollToSection("home") }}>Home</div>
          <div className={Active === 1 ? "linkContainer active" : "linkContainer"} onClick={() => { scrollToSection("about") }}>About</div>
          <div className={Active === 2 ? "linkContainer active" : "linkContainer"} onClick={() => { scrollToSection("parts") }}>Device</div>
          <div className={Active === 3 ? "linkContainer active" : "linkContainer"} onClick={() => { scrollToSection("application") }}>Mobile App</div>
          <div className={Active === 4 ? "linkContainer active" : "linkContainer"} onClick={() => { scrollToSection("benefits") }}>Benefits</div>
          <div className={Active === 5 ? "linkContainer active" : "linkContainer"} onClick={() => { scrollToSection("join") }}>Join us</div>
        </div>



        <div className="hamburgerMenu" id='ham'>
          <div className="bars" onClick={() => { sethamMenu(true) }}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
          {
            hamMenu === true ? <div className="hamMenuItems">
              <i className="fas fa-times" onClick={() => { sethamMenu(false) }}></i>
              <a data-aos="fade-up" data-aos-duration="400" onClick={() => { sethamMenu(false) }} href="#home" className={Active === 0 ? "option active" : "option"}>Home</a>
              <a data-aos="fade-up" data-aos-duration="500" onClick={() => { sethamMenu(false) }} href="#about" className={Active === 1 ? "option active" : "option"}>About</a>
              <a data-aos="fade-up" data-aos-duration="600" onClick={() => { sethamMenu(false) }} href="#parts" className={Active === 2 ? "option active" : "option"}>Parts</a>
              <a data-aos="fade-up" data-aos-duration="700" onClick={() => { sethamMenu(false) }} href="#application" className={Active === 3 ? "option active" : "option"}>Application</a>
              <a data-aos="fade-up" data-aos-duration="800" onClick={() => { sethamMenu(false) }} href="#benefits" className={Active === 4 ? "option active" : "option"}>Benefits</a>
              <a data-aos="fade-up" data-aos-duration="1000" onClick={() => { sethamMenu(false) }} href="#join" className={Active === 5 ? "option active" : "option"}>Join</a>
            </div> : null
          }
        </div>
      </div>
    </div>
  )
}
