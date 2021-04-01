import React from "react";


function Tangram() {
  return (
 <div className="container">
         <br/><br/><br/><br/>
<img  alt="cover" className="img-responsive" src="\img\slider\tang.png"/>
<br/>
<div className="brief-conatiner">

        <h2><span>- </span>Are you ready for the <span className="ted-color">Tangram </span><span>! -</span></h2>
        <p>
        
We strongly believe in the saying: "Ideas worth spreading'', and any idea presented on our stage should be the link between your audience and your ideas that worth to Spread!
<br/>
Luckily, The Conductor who will lead the idea will be YOU
<br/>
You are the chest of ideas, you have to spread the ideas and are responsible for keeping them safe for the rest of the world to hear and learn about them

!
<br/>
join us on this unique journey

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



export default Tangram;
