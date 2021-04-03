import React from "react";
import AwesomeSlider from 'react-awesome-slider'; 
import { useEffect, useState } from "react";
import 'react-awesome-slider/dist/styles.css';
// import $ from 'jquery';

function Home(){
     
     

           
          const calculateTimeLeft = () => {
            let year = new Date().getFullYear();
            const difference = +new Date(`${year}-4-10`) - +new Date();
            let timeLeft = {};
        
            if (difference > 0) {
              timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
              };
            }
        
            return timeLeft;
          };
        
          const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
          const [year] = useState(new Date().getFullYear());
        
          useEffect(() => {
            setTimeout(() => {
              setTimeLeft(calculateTimeLeft());
            }, 70);
          });
        
          const timerComponents = [];
        
          Object.keys(timeLeft).forEach((interval) => {
            if (!timeLeft[interval]) {
              return;
            }
        
            timerComponents.push(
              <span>
                {timeLeft[interval]} {interval}{" "}
              </span>
            );
          });

  return (
    <div className="container-fluid" style={{padding :0 }}>
   
     <br/>
     <br/>
     <br/>
<div>

  
<div className="alrazy-title" data-splitting>Welcome To <span className="ted-color">TEDx</span> Helwan University</div>
<script src="https://unpkg.com/splitting@1.0.0/dist/splitting.js"></script>
<script>
    Splitting();
</script>
  <AwesomeSlider bullets={false} class="slider-container" >
    {/*  eslint-disable-next-line  */}
    <div data-src="\img\Teleportation\1.jpg" />
    {/*  eslint-disable-next-line  */}
    <div data-src="\img\Teleportation\5.jpg" />
    {/*  eslint-disable-next-line  */}
    <div data-src="\img\Teleportation\6.jpg"/>
    {/*  eslint-disable-next-line  */}
    <div data-src="\img\Event-Cover.jpg" />
     {/*  eslint-disable-next-line  */}
    <div data-src="\img\slider\cover-1.png" />
  </AwesomeSlider>
  </div>
  <div className="brief-conatiner ">
    
    <h2 className="helwan-head" style={{textAlign:"center"}}><i className="arrow right"></i> About <span className="ted-color">Tedx</span>HelwanUniversity</h2>
    <p>An independently organized TED event in Helwan
        Proceeding from our belief in the power of ideas, we determined to create a community of ideas aiming to enrich our community minds.
        Also inspiring and motivating them to cope with and contribute to the age of renaissance that our country lives in recently,
        hoping to get out and reach the global edge of success starting from Helwan University.
    </p>
  </div>
  <div className="brief-conatiner "></div>

  <div className="grid-holder">
          <div className="grid-box">
          
            <h5 className="calco">Attendees <br></br>
            1100
            </h5>
          </div>
        
          <div className="grid-box">
          <h5  className="calco">
              Members <br></br>
              +400
              </h5>
          </div>
          <div className="grid-box">
          <h5  className="calco">Speakers <br></br>43</h5>
          </div>
          <div className="grid-box">
          <h5 className="calco">
              sponsors <br></br>
              18
              </h5>                  
          </div>
      </div>
      <div className="brief-conatiner "></div>
      <div className="event-headline">
        <span>Our Upcoming <span className="ted-color" style={{fontWeight:"700",color:"#000"}}>Event</span></span>
      </div>
      <section className="padd container boot-elemant-bg py-md-5 py-4  " >
    
    <div className="container position-relative py-md-5 py-0">
    <div className="brief-conatiner "></div>

                <div className="row">
            <div className="evicon col-lg-8">
                <span className="text-black text-uppercase  "> </span>
                <h2 className="text-white display-3 font-weight-bold"> </h2>
                <p className="f-w-16 mb-4"> </p>
                
                <a target="_blank" href=" https://www.ted.com/tedx/events/40335" className="btn btn-outline-white btn-lg px-4"  >TED <i className="fas fa-times" style={{color: "red"}}></i> </a>
                <a target="_blank" href=" https://www.facebook.com/events/3336545329780286/" className="btn btn-outline-white btn-lg px-4"> <i className="fab fa-facebook-f"></i> </a>
                <a target="_blank" href=" https://www.youtube.com/playlist?list=PLwCKOAvD-tKnyzziugxDDquCA1-Pi-42t" className="btn btn-outline-white btn-lg px-4"> <i className="fab fa-youtube"></i> </a>
                <a target="_blank" href="./Tangram " className="btn btnn  btn-outline-white btn-lg px-4"> Read more </a>

            </div>
        </div>
    </div>
    <div className="elemant-bg-overlay black"></div>
</section>
    <div className="brief-conatiner "></div>
    <div className="container">
    <div className="row text-center">
    <div className = "centered">
    <div className = "blob-1"></div>
    <div className = "blob-2"></div>
</div>
    </div>
</div>

<div id="countdown" className="container">
      <h1 id="headline">Tangram {year} Countdown </h1>
      <div className="cd">
   
      {timerComponents.length ? timerComponents : <span >Time's up!</span>}
      </div>
      </div>

    {/* <div id="countdown" className="container">
  <h1 id="headline">Countdown To Our Next Event:</h1>
  <div id="countdown">
    <ul>
      <li className="cd"><span id="days"></span>days</li>
      <li className="cd"><span id="hours"></span>Hours</li>
      <li className="cd"><span id="minutes"></span>Minutes</li>
      <li className="cd"><span id="seconds"></span>Seconds</li>
    </ul>
  </div>
  <div className="message">
  </div>
</div> */}
<div className="latest-speakers">
    <span className="latest-speakers-title">Our Favorite <span className="ted-color">Speakers</span></span>
    <div className="latest-speakers-title-dash"><span>_____________</span></div>
</div>
<div className="speakers-holder" id="home-speakers-holder">
    
      <div className="speaker-element">
        <img src="\img\speakers\mariamahmed-mod.jpg" alt="" className="image" style={{maxWidth:"100%"}}/>
        <div className="brief-middle">
          <div className="speaker-context-title">Mariam Ahmed</div>
          <div className="speaker-context">Maryam is a video Blogger , Motivational speaker, Director, But best 
          know as a Comedian and she worked in Fundraising at “Baheya“</div>
          <div className="speaker-context">
            <a href="https://youtu.be/LjqGCElWv98" rel="noreferrer" target="_blank">See His Talk</a>
          </div>
        </div>
      </div>
           <div className="speaker-element">
  <img src="\img\speakers\tang-aboelnaga.jpg" alt="" className="image" />
  <div className="brief-middle">
    <div className="speaker-context-title">Mohamed Aboelnaga Nagaty</div>
    <div className="speaker-context">Mohamed is an experienced entrepreneur and executive with more than 15 years of experience.</div>
    <div className="speaker-context">
      {/* <a href="https://youtu.be/-H_3rkcAo2Y" rel="noreferrer" target="_blank">See His Talk</a> */}
    </div>
  </div>
</div>
<div className="speaker-element">
        <img src="\img\speakers\tele-nureen.png" alt="" className="image" />
        <div className="brief-middle">
          <div className="speaker-context-title">This Is Naureen Youssef</div>
          <div className="speaker-context">Naureen is a marketer, fashion model, and a great writer.</div>
          <div className="speaker-context">
            <a href="https://youtu.be/jY80nrjMRBs" rel="noreferrer" target="_blank">See Her Talk</a>
          </div>
        </div>
      </div>
      <div className="speaker-element">
        <img src="\img\speakers\andrewashraf-mod.png" alt="" className="image" style={{maxWidth:"100%"}}/>
        <div className="brief-middle">
          <div className="speaker-context-title">This Is Andrew Ashraf</div>
          <div className="speaker-context">Andrew helps youth in getting a job from all 
          the categories in the market and preparing many workshops and online courses</div>
          <div className="speaker-context">
            <a href="https://youtu.be/YfRk3QGcizE" rel="noreferrer" target="_blank">See His Talk</a>
          </div>
        </div>
      </div>
      <div className="speaker-element">
        <img src="\img\speakers\tele-nada.png" alt="" className="image" />
        <div className="brief-middle">
          <div className="speaker-context-title">This Is Nada Khalil</div>
          <div className="speaker-context">Grew up in so many diffrent cultures, talk about how that afftec her.</div>
          <div className="speaker-context">
            <a href="https://youtu.be/zWjz5a_wrNw" rel="noreferrer" target="_blank">See His Talk</a>
          </div>
        </div>
      </div>
      
      <div className="speaker-element">
  <img src="\img\speakers\tang-ahmedradi.jpg" alt="" className="image" />
  <div className="brief-middle">
    <div className="speaker-context-title">This Is Ahmed Radi</div>
    <div className="speaker-context">Co-Founder at Fleurelle for food industries, Co-Founder & 
    CMO at RoadRunner, Former Country Marketing Manager at Delivery Hero (Otlob - Talabat - Carriage)</div>
    <div className="speaker-context">
      {/* <a href="https://youtu.be/G2_fL3oHdxs" rel="noreferrer" target="_blank">See His Talk</a> */}
    </div>
  </div>
</div>
<div className="speaker-element">
        <img src="\img\speakers\tele-mina.png" alt="" className="image" />
        <div className="brief-middle">
          <div className="speaker-context-title">This Is Mina Henein</div>
          <div className="speaker-context">Mina Henein believes that life is too short to keep hitting the snooze button.</div>
          <div className="speaker-context">
            <a href="https://youtu.be/G2_fL3oHdxs" rel="noreferrer" target="_blank">See His Talk</a>
          </div>
        </div>
      </div>
<div className="speaker-element">
        <img src="\img\speakers\youssefemad.jpg" alt="" className="image" />
        <div className="brief-middle">
          <div className="speaker-context-title">This Is Youssef Emad</div>
          <div className="speaker-context">He is 20 years old, also he is a Business developer at Google, Founder of "قعده كارير"</div>
          <div className="speaker-context">
            <a href="https://youtu.be/zDVW2Q-W9ks" rel="noreferrer" target="_blank">See His Talk</a>
          </div>
          </div>
      </div>
</div>
    
        {/* 
           __   
        .__(.)< (Buck Buck)
        (____)
           __   
        .__(.)< (Buck Buck)
        (____)
           __   
        .__(.)< (Buck Buck)
        (____)
        */} 
     

        </div>

);

    }
export default Home;