import React from 'react';
import './Styles/parts.css';

export default function Parts() {
  return (
    <div className='parts scroll' id='parts'>

      <PartDarks
        heading="InHouse designed Sensors"
        desc="The use of in-house designed sensitive float switch sensors accurately detects the level of sewage water and processes that data efficiently."
        image="https://ik.imagekit.io/hgfugmm0dbi/Decon/sensor_v7ImlhCF2.png?ik-sdk-version=javascript-1.4.3&updatedAt=1650543562873"
      />

      <PartLight
        heading="Long-life battery"
        desc="Install once and then forget what the Decon Battery is all about. The battery is non-rechargeable yet extremely powerful to sustain the device for over 3 years."
        image="https://ik.imagekit.io/hgfugmm0dbi/Decon/battery_xxnMuMxER.png?ik-sdk-version=javascript-1.4.3&updatedAt=1650543562900"
      />

      <div className="childSnapper"></div>

      <PartDarks
        heading="Robust Enclosure"
        desc="Worried about the harsh environment under a manhole? Decon S0 is created from thermoplastic polypropylene that makes it super durable and robust.
        "
        image="https://ik.imagekit.io/hgfugmm0dbi/Decon/body_5QxErQ76Q.png?ik-sdk-version=javascript-1.4.3&updatedAt=1650543563572"
      />

      <PartLight
        heading="Smart Processing and Communication"
        desc="Devices act as independent nodes using the GSM module to communicate with the database through a strong packet transmission networking technique.
        "
        image="https://ik.imagekit.io/hgfugmm0dbi/Decon/controller_ySN6rUNH9.png?ik-sdk-version=javascript-1.4.3&updatedAt=1650543563979"
      />

    </div>
  )
}

function PartDarks(props) {
  return (
    <div className="partWrapper" data-aos="fade-right">
      <div className="imagecontainer">
        <img src={props.image} alt="" draggable={false}/>
      </div>

      <div className="textcontainer">
        <div>
          <p className="SmallHeadings"> {props.heading} </p>
          <p className='universalParaghraph'> {props.desc} </p>
        </div>
      </div>
    </div>
  )
}

function PartLight(props) {
  return (
    <div className="partWrapper light" data-aos="fade-left">
      <div className="imagecontainer">
        <img src={props.image} alt="" draggable={false}/>
      </div>

      <div className="textcontainer">
        <div className='align'>
          <p className="SmallHeadings"> {props.heading} </p>
          <p className='universalParaghraph'> {props.desc} </p>
        </div>
      </div>
    </div>
  )
}