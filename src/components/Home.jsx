import React from "react";
import AwesomeSlider from 'react-awesome-slider'; 
import 'react-awesome-slider/dist/styles.css';
function Home() {
  return (
    <div class="container">
     
  <AwesomeSlider bullets={false} class="slider-container" >
    <div data-src="\img\slider\cover-1.png" />
    <div data-src="\img\slider\cover.png" />
    <div data-src="\img\slider\leaveyourl.jpg" />
    <div data-src="\img\Event-Cover.jpg" />
  </AwesomeSlider>

  <div className="grid-holder">
          <div className="grid-box">
          
            {/* Attendees <br></br> */}
            1100
         
          </div>
          <div className="grid-box">
            
              Members <br></br>
              +400
            
          </div>
          <div className="grid-box">
          
            Speakers <br></br>
            43
          
          </div>
          <div className="grid-box">
              sponsors <br></br>
              notyet
            
          </div>
  
          <tbody>
  
          </tbody>
      </div>
      <div className="brief-conatiner "></div>
        </div>

  );
}

export default Home;
