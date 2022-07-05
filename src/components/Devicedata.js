import React from 'react';
import { useState, useEffect } from 'react';
import './Styles/devicedata.css';
// import axios from "axios";
// import cors from "cors";


export default function Devicedata(props) {

    const [LiveData, setLiveData] = useState([]);
    const [LoadingData, setLoadingData] = useState(false)
    // const fetchingData = async () => {

    // }
    useEffect(async () => {
        setLoadingData(true);
        let Api = "https://us-central1-decon-3545e.cloudfunctions.net/restApis/getDeconSiteDetail";
        let data = await fetch(Api);
        let parsedDataFromApi = await data.json()
        // console.log(parsedDataFromApi);
        // console.log(parsedDataFromApi.kmsCovered);
        setLiveData(parsedDataFromApi);
        setLoadingData(false);
    }, [])

     useEffect(() => {
         setTimeout(() => {
            const counters = document.querySelectorAll(".data");
            counters.forEach((counter) => {
                counter.innerText = "0";
                const updateCounter = () => {
                    const target = +counter.getAttribute("data-target");
                    const c = +counter.innerText;
                    const increment = target / 100;
                    if (c < target) {
                        counter.innerText = `${Math.ceil(c + increment)}`;
                        setTimeout(updateCounter, 10);
                    } else {
                        counter.innerText = target;
                    }
                };
                updateCounter();
            });
         }, 1000);
     }, [props.CurrentSection === 10]);
     
    //   useEffect(() => {
    //     updateCounter();
    //   });
     
    return (
        <div className="dataWrapper scroll" id='deviceData'>
            <div className="no_of_cities">
                {LoadingData === true ? <SpinnerData /> : <h1 className='data' data-target={LiveData.noOfCitiesCovered} data-aos="fade-up" data-aos-duration="400">.</h1>}
                <p className="universalParaghraph" data-aos="fade-up" data-aos-duration="500">
                    Cities covered so far
                </p>
            </div>

            <div className="km_covered">
                {
                    LoadingData === true ? <SpinnerData /> : <h1 className='data' data-target={LiveData.kmsCovered} data-aos="fade-up" data-aos-duration="600">.</h1>
                }
                <p className="universalParaghraph" data-aos="fade-up" data-aos-duration="700">
                    Kms of sewer lines getting monitored
                </p>
            </div>

            <div className="no_of_critical_level">
                {
                    LoadingData === true ? <SpinnerData /> : <h1 className='data' data-target={LiveData.noOfCriticalDetected} data-aos="fade-up" data-aos-duration="800">.</h1>
                }

                <p className="universalParaghraph" data-aos="fade-up" data-aos-duration="900">
                    Critical level notifications recieved
                    by various municipal corporations
                </p>
            </div>
        </div>
    )
}
function SpinnerData() {
    return (
        <div className='spinnerData'></div>
    )
}
