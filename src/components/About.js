import React from 'react';
import './Styles/about.css';

export default function About() {
  return (
    <div className="about scroll" id='about'>
      <div className="textWrapper">
        <div className="aboutContainer" data-aos="fade-right">
          <div style={{ textAlign: 'left' }}>
            <p className="SmallHeadings">About Decon</p>
            <p className="universalParaghraph"><b>Decon</b> is a smart initiative by <b>Vysion Technology</b> to build a stronger industrial infrastructure for future India. <br className="breakPoint" /><br className="breakPoint" /> Decon comprises a series of  <b>Smart IoT-enabled</b> devices that use the power of the Cloud and Advance AI algorithms to sense different types of Industrial parameters with utmost efficiency. The parametric data processed is useful in addressing some neglected issues that cause constant degradation of the environment and quality of living. <br className="breakPoint" /><br className="breakPoint" />Decon with smart build and tireless innovations help to create a sustainable model with Reduced Operational Cost.</p>
          </div>
        </div>
        <div className="vysion" data-aos="fade-right" data-aos-duration="1300">
          <div style={{ textAlign: 'left' }}>
            <p className="SmallHeadings">About Vysion Technology</p>
            <p className='universalParaghraph'>Vysion Technology is a technical startup, currently incubated by the Department of Science and Technology-Supported Technology Business Incubator(ASHINE) under the SSIP Initiative.<br className="breakPoint" /><br className="breakPoint" /> The team comprises young and skilled enthusiasts from IITs, NITs, and IIITs innovating tirelessly in different domains like <b>IoT, Artificial Intelligence, Mobile and Web Development, Robotics, Embedded Systems, Cloud</b>, and so on. 
            <br className="breakPoint" /><br className="breakPoint" />We tend to deliver smart solutions in the sectors where the Nation is lagging to compete in the world. We help to build better infrastructure for technology-driven industries.
            </p>
            <a href="https://www.techvysion.com/" target="_blank" rel="noreferrer"><div className="universalButton vysionWebsiteButton">Know more</div></a>
          </div>
        </div>
      </div>
      <div className="OpendeviceWrapper">
        <img src="https://ik.imagekit.io/hgfugmm0dbi/Decon/DeconAbout_d959MTaZP.png?ik-sdk-version=javascript-1.4.3&updatedAt=1650543564841" alt="opendevice" />
      </div>
    </div>
  )
}