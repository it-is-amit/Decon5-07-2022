import './Styles/home.css';
import React, { useState, useEffect } from 'react'

export default function Home() {
    const [PlayVideo, setPlayVideo] = useState(false);
    const [Loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 1000);
    }, [PlayVideo === true])

    return (
        <div className="home scroll" id='home'>
            <img src="https://ik.imagekit.io/hgfugmm0dbi/Decon/DeconHome2x_gnpnrO4iT.png?ik-sdk-version=javascript-1.4.3&updatedAt=1650256019404" alt="" className='back' />

            <div className="bigHeading">
                <p>Devices empowering the Nation<br className='paragraph_BreakPoint' /> with smart infrastructures</p>
            </div>

            <div className="deviceWrapper">
                <img src="https://ik.imagekit.io/hgfugmm0dbi/Decon/device_and_shadow_bd6JzIS3C.png?ik-sdk-version=javascript-1.4.3&updatedAt=1649315169262" alt="" className='device' />
            </div>

            <div className="smallHeading">
                <p className='universalParaghraph'>Worried about the deteriorating condition of the environment and building cost-efficient superior industrial infrastructure?<br/> Well, Decon innovatively does that for you with IoT enabled smart Devices having features like real-time monitoring,<br/> remote controlling, and smart AI algorithms.</p>
                <div className='button'>
                    <div className="universalButton videoButton" onClick={() => { setPlayVideo(true) }}>Watch Demo <i className="fas fa-play fa-sm"></i></div>
                </div>
            </div>
            {
                PlayVideo === true ? <DemoVideo setPlayVideo={setPlayVideo} Loading={Loading} /> : ''
            }
        </div>
    )
}

function DemoVideo(props) {
    return (
        <div className="VideoWrapper" onClick={() => { props.setPlayVideo(false) }}>
            <iframe src="https://www.youtube.com/embed/3FnmrWmKSoY" className="video" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            {/* <iframe width="1280" height="720" src="https://www.youtube.com/embed/2LbS8BK_CYY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
            <div className="close">
                <div className="circle">
                    <i className="far fa-arrow-left fa-lg"></i>
                </div>
            </div>
            {
                props.Loading === true ? <Spinner /> : ''
            }
        </div>
    )
}

function Spinner() {
    return (
        <div className='spinner'></div>
    )
}