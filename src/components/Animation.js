import React, { useState, useEffect } from 'react';
import './Styles/animation.css'
// import anim from './assets/anim.riv'
// import Rive from 'rive-react';
// import ScrollMagic from 'scrollmagic';
// import video from './assets/weekly.mp4'
import iphone from './Styles/iphone.png';
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function Animation() {

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        // device pinning animation
        gsap.to(".AnimationWrapper", {
            scrollTrigger: {
                trigger: ".AnimationWrapper",
                start: "top top",
                end: "bottom top",
                //  markers: { fontSize: "3rem"},
                pin: true,
                // pinSpacing: 0
            },
        })

        // waves scroll animation
        gsap.to(".header", {
            scrollTrigger: {
                trigger: ".AnimationWrapper",
                start: "top 0%",
                end: "bottom 0%",
                // markers: true,
                scrub: 0.7,
                toggleActions: "restart pause reverse pause"
            },
            duration: 10,
            y: 0
        })

        // normal level trigger
        gsap.to(".mobileDeviceContainer", {
            scrollTrigger: {
                trigger: ".mobileDeviceContainer",
                start: "120% 93.75%",
                end: "120% 87.5%",
                // markers: { startColor: "darkviolet", endColor: "darkviolet", fontSize: "2rem", fontWeight: "600" },
                toggleActions: "restart pause reverse pause",
                pinSpacing: 0,
                // scrub: 1,
                onToggle: () => setStatus(0)
            },
            // duration: 1,
            // backgroundColor: "#828282"
        })



        // ground level trigger
        gsap.to(".mobileDeviceContainer", {
            scrollTrigger: {
                trigger: ".mobileDeviceContainer",
                start: "120% 87.5%",
                end: "120% 75%",
                // markers: { startColor: "green", endColor: "green", fontSize: "2rem", fontWeight: "600" },
                toggleActions: "restart pause reverse pause",
                pinSpacing: 0,
                // scrub: 1,
                onToggle: () => setStatus(1)
            },
            // duration: 1,
            // backgroundColor: "#27AE60"
        })


        // informatory trigger
        gsap.to(".mobileDeviceContainer", {
            scrollTrigger: {
                trigger: ".mobileDeviceContainer",
                start: "120% 75%",
                end: "120% 50%",
                // markers: { startColor: "yellow", endColor: "yellow", fontSize: "2rem", fontWeight: "600" },
                toggleActions: "restart pause reverse pause",
                pinSpacing: 0,
                // scrub: 1,
                onToggle: () => setStatus(2)
            },
            // duration: 1,
            // backgroundColor: "#F2C94C"
        })


        // critical trigger
        gsap.to(".mobileDeviceContainer", {
            scrollTrigger: {
                trigger: ".mobileDeviceContainer",
                start: "120% 50%",
                end: "120% 0%",
                // markers: { startColor: "red", endColor: "red", fontSize: "2rem", fontWeight: "600" },
                toggleActions: "restart pause reverse pause",
                pinSpacing: 0,
                // scrub: 1,
                onToggle: () => setStatus(3)
            },
            // duration: 1,
            // backgroundColor: "#EB5757",
            // x: 100
        })

    }, [])



    const [Status, setStatus] = useState(0);
    useEffect(() => {
        console.log(Status);
    }, [Status])



    return (
        <div className='AnimationWrapper'>

            <div className="leftSection">
                <div className="leftUpper">
                    <h1>Real Time 24x7<br />Sewer Monitoring</h1>
                </div>


                <div className="leftLower">
                    {/* mobile device status showing mockup */}
                    <div className="mobileDevice">
                        <div className="mobileDeviceContainer">
                            <img src={iphone} alt="iphone" />
                            <div className={
                                Status === 0 ? "popup NormalBack"
                                    : Status === 1 ? "popup GroundBack"
                                        : Status === 2 ? "popup InformatoryBack"
                                            : Status === 3 ? "popup CriticalBack"
                                                : "popup"
                            }>
                                <p>
                                    {
                                        Status === 0 ? "Device is at Ground Level "
                                            : Status === 1 ? "Device is at Normal Level"
                                                : Status === 2 ? "Device is at Informatory Level"
                                                    : Status === 3 ? "Device is at Critical Level"
                                                        : "null"
                                    }
                                </p>
                            </div>
                        </div>
                    </div>





                    {/* device status tracker */}
                    <div className="statusWrapper">

                        {/* <div className="progressSliderWrapper"></div> */}

                        <div className={
                            Status === 3 ? "status Critical"
                                : "status"
                        }
                        >
                            <div className='showingAlert'>
                                {
                                    Status === 3 ? <lord-icon
                                        src="https://cdn.lordicon.com/rslnizbt.json"
                                        trigger="loop"
                                        colors="primary:#eb5757"
                                        style={{ width: "50px", height: "50px" }}>
                                    </lord-icon> : ""
                                }
                            </div>
                            <h3 className='statusHeading'>
                                Device is at Critical Level
                            </h3>
                            <p className='statusParagraph'>
                                Manhole could overflow, time to clean.
                            </p>
                        </div>
                        <div className={
                            Status === 2 ? "status Informatory"
                                : "status"
                        }>
                            <h3 className='statusHeading'>
                                Device is at Informatory Level
                            </h3>
                            <p className='statusParagraph'>
                                Manhole level is rising rapidly, be attentive.
                            </p>
                        </div>
                        <div className={
                            Status === 1 ? "status Ground"
                                : "status"
                        }>
                            <h3 className='statusHeading'>
                                Device is at Normal Level
                            </h3>
                            <p className='statusParagraph'>
                                Manhole level is rising slowly.
                            </p>
                        </div>
                        <div className={
                            Status === 0 ? "status Normal"
                                : "status"
                        }>
                            <h3 className='statusHeading'>
                                Device is at Ground Level
                            </h3>
                            <p className='statusParagraph'>
                                Manhole is empty.
                            </p>
                        </div>
                    </div>
                </div>
            </div>


            <div className="rightSection">

                {/* decon device */}
                <div className="centerContentWrapper">
                    <img src="https://ik.imagekit.io/hgfugmm0dbi/Decon/render_decon_light_from_above_1_TI_w0GD8Y.png?ik-sdk-version=javascript-1.4.3&updatedAt=1649160220171" alt="device" />
                </div>



                {/* waves */}
                <div className="header">
                    <svg className="waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                        viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
                        <defs>
                            <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
                        </defs>
                        <g className="parallax">
                            <use xlinkHref="#gentle-wave" x="48" y="0" fill="#1E76C73B" />
                            <use xlinkHref="#gentle-wave" x="48" y="3" fill="#1E76C73B" />
                            <use xlinkHref="#gentle-wave" x="48" y="5" fill="#1E76C73B" />
                            <use xlinkHref="#gentle-wave" x="48" y="7" fill="#1E76C73B" />
                        </g>
                    </svg>
                    <div className='cover'></div>
                </div>
            </div>
        </div >
    )
}

