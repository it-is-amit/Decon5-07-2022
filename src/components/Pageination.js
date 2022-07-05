import React, { useState, useEffect } from 'react';
import './Styles/pagination.css';

export default function Pageination(props) {

    const [Move, setMove] = useState("translateY(0px)");
    useEffect(() => {
        if (props.CurrentSection === 0) {
            setMove("translateY(0px)");
        }
        else if (props.CurrentSection === 1) {
            setMove("translateY(30px)");
        }
        else if (props.CurrentSection === 2) {
            setMove("translateY(60px)");
        }
        else if (props.CurrentSection === 3) {
            setMove("translateY(90px)");
        }
        else if (props.CurrentSection === 4) {
            setMove("translateY(120px)");
        }
        else if (props.CurrentSection === 5) {
            setMove("translateY(150px)");
        }
    }, [props.CurrentSection])


    return (
        <>
            <div className="pagination">
                <div className="sliderGola" style={{ transform: Move }}></div>
                <a href="#home"><div className="gola"></div></a>
                <a href="#about"><div className="gola"></div></a>
                <a href="#parts"><div className="gola"></div></a>
                <a href="#application"><div className="gola"></div></a>
                <a href="#benefits"><div className="gola"></div></a>
                <a href="#join"><div className="gola"></div></a>
            </div>


            <div className="naming">
                {
                    props.CurrentSection === 0 ? <p className='hide'>01 / Home</p>
                    
                    : props.CurrentSection === 1 ? <p style={{ 
                        color: "var(--DeconOfficialCol)" 
                        
                    }}>02 / About</p>


                    : props.CurrentSection === 2 ? <p style={{ 
                        color: "var(--DeconOfficialCol)" 
                    }}>03 / Parts</p>


                    : props.CurrentSection === 3 ? <p style={{ 
                        color: "var(--DeconOfficialCol)" 
                    }}>04 / Application</p>


                    : props.CurrentSection === 4 ? <p style={{ 
                        color: "var(--DeconOfficialCol)" 
                    }}>05 / Benefits</p>
                    
                    
                    : <p style={{ 
                        color: "var(--DeconOfficialCol)"
                     }}>06 / Join us</p>

                }
            </div>
        </>
    )
}
