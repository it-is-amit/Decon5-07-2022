import React from 'react';
import './Styles/benefits.css';
import b1 from './assets/b1.png';
import b2 from './assets/b2.png';
import b3 from './assets/b3.png';
import b4 from './assets/b4.png';
import b5 from './assets/b5.png';

export default function Benefits() {
  return (
    <div className='benefits scroll' id='benefits'>
      <p className="SmallHeadings">Product Benefits</p>
      <div className='benefitsWrapper'>
        <BenefitBox image={b1} heading="Strengthening Smart India" desc="Helps in strengthening the infrastructure of the industry for a sustainable long-term future of smart India" />
        <BenefitBox image={b2} heading="Save Millions of Lives" desc="Saves the lives taken by water-borne diseases and respiratory problems caused due to sewage water contamination." />
        <BenefitBox image={b3} heading="Preserves the Environment" desc="Saves the aquatic and plant lives by avoiding the sewage water to reach water bodies and water tables." />
        <BenefitBox image={b4} heading="Smart Industrial Infrastructure" desc="Helps in saving money spent to rebuild the roads damaged by water clogging that take the lives of millions." />
        <BenefitBox image={b5} heading="Reducing Operational Costs" desc="Reduces the operational cost of manhole cleaning as it increases drastically after an overflow." />
      </div>
    </div>
  )
}
function BenefitBox(props) {
  return (
    <div className="Benefitbox" data-aos="flip-left">
      <img src={props.image} alt="img" />
      <p className="XtraSmallHeadings">{props.heading}</p>
      <p className="universalParaghraph">{props.desc}
      </p>
    </div>
  )
}
