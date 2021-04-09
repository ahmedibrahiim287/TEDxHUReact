import React, {Fragment} from "react";
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
    <Fragment>
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
              22
              </h5>                  
          </div>
      </div>
      <div className="brief-conatiner "></div>
      <div className="event-headline">
        <span>Our Upcoming <span className="ted-color" style={{fontWeight:"700"}}>Event</span></span>
      </div>
      <section className="padd container boot-elemant-bg py-md-5 py-4  " >
    
    <div className="container position-relative py-md-5 py-0">
    <div className="brief-conatiner "></div>

                <div className="row">
       
        </div>
    </div>
    <div className="elemant-bg-overlay black" style={{borderRadius:"0"}}></div>
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

  
      <div class="container mt-40">
    
      <div className="latest-speakers">
          <span className="latest-speakers-title">Upcoming <span className="ted-color">Speakers</span></span>
          <div className="latest-speakers-title-dash"><span>_____________</span></div>
      </div><div class="row mt-30">
         


      <div class="col-md-4 col-sm-6">
      <div class="box8">
          <img src="\img\speakers\tang-ahmedradi.jpg"/>
          <h3 class="title">Ahmed Radi</h3>
          <div class="box-content">
          <ul class="icon">
          <div className="wrapper col-6">
          {/*  eslint-disable-next-line  */}
         <a href=" " rel="noreferrer" target="_blank"><button type="submit" className=" btn--border btn-read btn--animated">Waiting His Talk</button></a>
          </div> 
          </ul>
      </div>
      </div>
      </div>
      
      
      
      
          <div class="col-md-4 col-sm-6">
              <div class="box8">
              <img src="\img\speakers\tang-aboelnaga.jpg"/>
              <h3 class="title">Mohamed Aboelnaga</h3>
              <div class="box-content">
              <ul class="icon">
              <div className="wrapper col-6">
              {/*  eslint-disable-next-line  */}
             <a href="https://youtu.be/-H_3rkcAo2Y" rel="noreferrer" target="_blank"><button type="submit" className=" btn--border btn-read btn--animated">Waiting His Talk</button></a>
              </div> 
              </ul>
          </div>
              </div>
          </div>
          <div class="col-md-4 col-sm-6">
  <div class="box8">
      <img src="\img\last-sp\5.jpg"/>
      <h3 class="title">Eman Sobhy</h3>
      <div class="box-content">
      <ul class="icon">
      <div className="wrapper col-6">
      {/*  eslint-disable-next-line  */}
     <a href="" rel="noreferrer" target="_blank"><button type="submit" className=" btn--border btn-read btn--animated">Waiting Her Talk</button></a>
      </div> 
      </ul>
  </div>
  </div>
  </div>

         
         
      </div>
      </div>

<div className="brief-container"></div>
        </div>
        </Fragment>
);

    }
export default Home;


