import React from "react";


function Attend() {
  return (
  <div className="container">
<br/>
<br/>
<br/>
<br/>


<div className="brief-container">
  <img src="/img/slider/tang.png" alt="Tangram logo" class="img-responsive"/>
</div>

<div className="brief-conatiner ">
      <h2>About <span className="ted-color">Tangram</span><div class="underline"></div></h2>
      <p>
          TED is a non profit organization devoted to Ideas worth Spreading. It started out (in 1984) as a conference bringing together people from three worlds: Technology, 
          Entertainment and Design. Since then its scope has become ever broader. Along with two annual conferences 
          - the TED Conference in Long Beach and Palm Springs each spring, and the TEDGlobal conference in Edinburgh UK each summer - 
          TED includes the award-winning TEDTalks video site, the Open Translation Project and TED Conversations, 
          the inspiring TED Fellows and TEDx programs, and the annual TED Prize.
      </p>
    </div>
    <div className="location-container">
      {/* Location Div*/}
      <div className="location-box">
        <a rel="noreferrer" href="https://www.google.com/maps/place/El+Nahar+Theater/@30.0277383,31.2298957,17z/data=!3m1!4b1!4m5!3m4!1s0x145847311324514b:0xa3537595f7e8729f!8m2!3d30.0277383!4d31.2320844?hl=en-US" target="_blank">
          <i className="fa fa-map-marker" aria-hidden="true"></i>
          <span> El Nahar Theater</span>
        </a>
      </div>
      {/* End Of Location Div*/}
      {/*Calender Div*/}
        <div className="location-box">
          <i className="fa fa-calendar" aria-hidden="true"> </i>
          <span> Satuerday, 10 April 2021</span>
        </div>
      {/*End Of Calender Div*/}
      {/*Clock Div*/}
      <div className="location-box">
        <i className="fa fa-clock-o" aria-hidden="true"></i>
        <span>10:00 A.M</span>
      </div>
      {/*End Of Clock Div*/}
      {/*Clock Div*/}
      <div className="attend-box">
        <a rel="noreferrer" href="https://docs.google.com/forms/d/e/1FAIpQLScuHWLJFBMlPveaevj-_XkRl1dOufoo6QSNn9PsixqVReDI8g/viewform" target="_blank" title="Button fade lightblue" className="button btnFade">Attend Now</a>
      </div>
      {/*End Of Clock Div*/}
    </div>
               
    
    <div className="brief-conatiner "></div>
  
 

    <div className="brief-conatiner "></div><div className="brief-conatiner "></div>
  </div>
  );
}


export default Attend;
