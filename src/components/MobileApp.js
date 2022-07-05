import React from 'react';
import './Styles/application.css';

export default function MobileApp() {
  return (
    <>
      <div id='application' className='scroll'>
        <div className='application' data-aos="fade-up">


          <div className="upperSection">
            <div className="headingWrapper">
              <p className="SmallHeadings">Decon Mobile App</p>
              <p className="universalParaghraph">Decon's multiple platform application is efficiently synced with the Smart Devices. Now monitor and access all the sensorial data and mapped visuals from any part of the world anytime.</p>
            </div>
            <div className="buttons">
              <div className="universalButton googlePLay" onClick={() => { window.open("https://play.google.com/store/apps/details?id=com.Vysion.Decon") }}><img src="https://ik.imagekit.io/hgfugmm0dbi/Decon/googleplay_IieEpx87v.png?ik-sdk-version=javascript-1.4.3&updatedAt=1650725044543" alt="google" /></div>
              <div className="universalButton webappButton" onClick={() => { window.open("https://decon-3545e.web.app/#/") }}><img src="https://ik.imagekit.io/hgfugmm0dbi/Decon/webapp_GTBThQjMN.png?ik-sdk-version=javascript-1.4.3&updatedAt=1650724925257" alt="webapp" /></div>
            </div>
          </div>

          <div className="lowerSection">
            <div className="leftSection">
              <img src="https://ik.imagekit.io/hgfugmm0dbi/Decon/MobileTablet_wqkIwm3I7.png?ik-sdk-version=javascript-1.4.3&updatedAt=1650543565307" alt="app" />
            </div>
            <div className="ApplicationrightSection" data-aos="fade-left" data-aos-duration="1000">
              <div className="details">
                <p className="SmallHeadings">Using Advanced AI Algorithms</p>
                <p className="universalParaghraph">The app uses smart and advanced AI algorithms to process and analyze the data retrieved. The data predicts 99.5% accurate results for the level of water and overflow inside the sewer.
                </p>
              </div>
              <div className="details">
                <p className="SmallHeadings">Connected with Cloud</p>
                <p className="universalParaghraph">Seamlessly connected with the Cloud, the app provides the device's all sensorial data and physical parameters within nanoseconds of processing.</p>
              </div>
            </div>
          </div>
        </div>









        <div className="application_page2">
          <div className="contentLeft" data-aos="fade-up">
            <div className='featureleft'>
              <img src="https://ik.imagekit.io/hgfugmm0dbi/Decon/team_bTi9gAXT1.png?ik-sdk-version=javascript-1.4.3&updatedAt=1650859576599" alt="team" className='featureImage' />
              <div>
                <p className="SmallHeadings">Team management</p>
                <p className="universalParaghraph">Users can create different teams to manage different tasks and assign roles effectively.</p>
              </div>
            </div>

            <div className='featureleft'>
              <img src="https://ik.imagekit.io/hgfugmm0dbi/Decon/reports_Ab90JoAw3.png?ik-sdk-version=javascript-1.4.3&updatedAt=1650859576589" alt="team" className='featureImage' />
              <div>
                <p className="SmallHeadings">Monthly reports</p>
                <p className="universalParaghraph">The automatically generated reports contain an overview of sensorial data to be reviewed anytime.</p>
              </div>
            </div>
          </div>


          <div className="deviceMockup" data-aos="fade-up" data-aos-duration="1500">
            <img src="https://ik.imagekit.io/hgfugmm0dbi/Decon/mobile_40Nlmiw1q.png?ik-sdk-version=javascript-1.4.3&updatedAt=1650860046379" alt="mock" />
          </div>


          <div className="contentRight" data-aos="fade-up">
            <div className='featureright'>
              <img src="https://ik.imagekit.io/hgfugmm0dbi/Decon/alert_q57y3QXSl.png?ik-sdk-version=javascript-1.4.3&updatedAt=1650859577209" alt="team" className='featureImage' />
              <div>
                <p className="SmallHeadings">Alerts and notifications</p>
                <p className="universalParaghraph">Processes the data through AI and gives timely alerts for critical situations without delay.
                </p>
              </div>
            </div>
            <div className='featureright'>
              <img src="https://ik.imagekit.io/hgfugmm0dbi/Decon/data_YKi_-YEat.png?ik-sdk-version=javascript-1.4.3&updatedAt=1650859577806" alt="team" className='featureImage' />
              <div>
                <p className="SmallHeadings">Complete devices data </p>
                <p className="universalParaghraph">To check a device's conditions, information like temperature, the battery can be accessed easily.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
