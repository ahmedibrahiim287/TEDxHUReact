import React, {Component} from "react";
import AwesomeSlider from 'react-awesome-slider'; 
import 'react-awesome-slider/dist/styles.css';


    export class Home extends Component{
        
     
        render(){
  return (
    <div className="container-fluid" style={{padding :0 }}>
   
     <br/>
     <br/>
     <br/>
<div>

  
<div class="alrazy-title" data-splitting>Welcome TEDx Helwan university 2021</div>
<script src="https://unpkg.com/splitting@1.0.0/dist/splitting.js"></script>
<script>
    Splitting();
</script>
  <AwesomeSlider bullets={false} class="slider-container" >
  
    <div data-src="\img\Teleportation\40330198_2092329610791458_9202531322231259136_o.jpg" />
    {/*  eslint-disable-next-line  */}
    <div data-src="\img\Teleportation\40298030_2092329867458099_5504781320389132288_o.jpg" />
    {/*  eslint-disable-next-line  */}
    <div data-src="\img\Teleportation\40512934_2092332977457788_6237028374833790976_o.jpg"/>
    {/*  eslint-disable-next-line  */}
    <div data-src="\img\Event-Cover.jpg" />
    <div data-src="\img\slider\cover-1.png" />
  </AwesomeSlider>
  </div>


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
          <h5  className="calco">
            Speakers <br></br>
            43
            </h5>
          </div>
          <div className="grid-box">
          <h5 className="calco">
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

    <div className="brief-conatiner "></div>
    <div class="container">
    <div class="row text-center">
    <div class = "centered">
    <div class = "blob-1"></div>
    <div class = "blob-2"></div>
</div>
    </div>
</div>
    <div id="countdown" class="container">
  <h1 id="headline">Countdown To Our Next Event:</h1>
  <div id="countdown">
    <ul>
      <li class="cd"><span id="days"></span>days</li>
      <li class="cd"><span id="hours"></span>Hours</li>
      <li class="cd"><span id="minutes"></span>Minutes</li>
      <li class="cd"><span id="seconds"></span>Seconds</li>
    </ul>
  </div>
  <div class="message">
    <div id="content">
      <span class="emoji">🥳</span>
      <span class="emoji">🎉</span>
      <span class="emoji">🎂</span>
    </div>
  </div>
</div>
<div className="latest-speakers">
    <span className="latest-speakers-title">Our Latest Speakers</span>
    <div className="latest-speakers-title-dash"><span>_____________</span></div>
</div>
<div className="speakers-holder">
    <div className="speaker-element">
        <img src="sample.png" alt="" className="image" />
        <div className="brief-middle">
          <div className="speaker-context-title">This Is Mohamed Nasr</div>
          <div className="speaker-context">enim praesent elementum facilisis leo vel fringilla est ullamcorper eget</div>
          <div className="speaker-context">
            <a href="https://www.youtube.com/watch?v=zWjz5a_wrNw" target="_blank">See His Talk</a>
          </div>
        </div>
      </div>
      <div className="speaker-element">
        <img src="sample.png" alt="" className="image" />
        <div className="brief-middle">
          <div className="speaker-context-title">This Is Mohamed Nasr</div>
          <div className="speaker-context">enim praesent elementum facilisis leo vel fringilla est ullamcorper eget</div>
          <div className="speaker-context">
            <a href="https://www.youtube.com/watch?v=zDVW2Q-W9ks" target="_blank">See His Talk</a>
          </div>
        </div>
      </div>
      <div className="speaker-element">
        <img src="mahmoud.jpg" alt="Mahmoud Abd Elmageed" className="image" />
        <div className="brief-middle">
          <div className="speaker-context-title">Mahmoud Abd Elmageed</div>
          <div className="speaker-context">Founder of Have A Dream and Co-Founder of Schema Advertising</div>
          <div className="speaker-context">
            <a href="https://www.youtube.com/watch?v=g9sHfsLbsxA&list=PLwCKOAvD-tKnyzziugxDDquCA1-Pi-42t&index=3&t=1s" target="_blank">See His Talk</a>
          </div>
        </div>
      </div>
      <div className="speaker-element">
        <img src="sample.png" alt="" className="image" />
        <div className="brief-middle">
          <div className="speaker-context-title">This Is Mohamed Nasr</div>
          <div className="speaker-context">enim praesent elementum facilisis leo vel fringilla est ullamcorper eget</div>
          <div className="speaker-context">
            <a href="#" target="_blank">See His Talk</a>
          </div>
        </div>
      </div>
</div>
    <div className="brief-conatiner "></div>
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
}
export default Home;