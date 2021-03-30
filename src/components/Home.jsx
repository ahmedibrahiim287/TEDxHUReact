import React from "react";
import AwesomeSlider from 'react-awesome-slider'; 
import 'react-awesome-slider/dist/styles.css';


function Home() {
  return (
    <div class="container">
     <br/>
     <br/>
     <br/>
  <AwesomeSlider bullets={false} class="slider-container" >
    <div data-src="\img\Event-Cover.jpg" />
    <div data-src="\img\Teleportation\40298030_2092329867458099_5504781320389132288_o.jpg" />
    <div data-src="\img\Teleportation\40512934_2092332977457788_6237028374833790976_o.jpg"/>
    <div data-src="\img\Teleportation\40330198_2092329610791458_9202531322231259136_o.jpg" />
    <div data-src="\img\slider\cover-1.png" />
  </AwesomeSlider>

  <div className="grid-holder">
          <div className="grid-box">
          
            <h5>Attendees <br></br>
            1100
            </h5>
          </div>
        
          <div className="grid-box">
          <h5>
              Members <br></br>
              +400
              </h5>
          </div>
          <div className="grid-box">
          <h5>
            Speakers <br></br>
            43
            </h5>
          </div>
          <div className="grid-box">
          <h5>
              sponsors <br></br>
              18
              </h5>
          </div>
  
          <tbody>
  
          </tbody>
      </div>
          
    <div className="brief-conatiner ">
        <h2 className="helwan-head"><i className="arrow right"></i> About <span className="ted-color">Tedx</span>HelwanUniversity</h2>
        <p>An independently organized TED event in Helwan
            Proceeding from our belief in the power of ideas, we determined to create a community of ideas aiming to enrich our community minds.
            Also inspiring and motivating them to cope with and contribute to the age of renaissance that our country lives in recently,
            hoping to get out and reach the global edge of success starting from Helwan University.
        </p>
    </div>

    <div class="countdown-container">
    <script src="cdc"></script>
<div class="desc">
                <h1 class="title">Tangram Event </h1>
            </div>
            <div class="countdown">
                <div class="sections">
                    <span id="days">0</span>
                    <span  class="unit">Days</span>
                </div> 
                <text id='f'>:</text>
                <div class="sections" id="hs">
                    <span id="hours">0</span>
                    <span  class="unit">Hours</span>
                </div> 
                <text id="s">:</text>
                {/* <div id="mid"> */}
                <div class="sections">
                    <span id="minutes">0</span> 
                    <span   class="unit" >Minutes</span>
                </div>
                <text id="t">:</text>
                <div class="sections">
                    <span id="seconds">0</span> 
                    <span class="unit">Seconds</span>
                </div>
            {/* </div> */}
                
            </div>
            <div class="countdownTitle">
                  
                     
            </div>
            <h2>Left</h2>
        </div>

    <div className="brief-conatiner "></div>

        </div>

  );
}

export default Home;
