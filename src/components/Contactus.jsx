import React from "react";

function About() {
  return (
    <div class="container">
       <br/>
       <br/>
       <br/> <br/> <br/> <br/> <br/> <br/> <br/>
       <br/>
      <div class="brief-container">
    <form className="forrm" action="#">
     
         <div class="formdiv">
            <h2 class="ted-color"> Contact Us </h2>
         

             <label> Name  </label>
           {/* <i class=" fas fa-user "></i> */}
            <input type="text" name="name" placeholder="Your name" />
         
         
         
            {/* <i  class="far fa-envelope" ></i>  */}
         <label> E-mail  </label> 
         <input type="email" name="email" placeholder=" email@server.com" />
         
        
          
         {/* <i  class="fas fa-align-left" ></i> */}
         <label >Subject  </label> 
         <input type="text" name="subject" placeholder="Message Subject" />
         
         
         
         <label>Message Content   </label>
         <input type="text" name="message" placeholder=" Type your Message here " />
         
         
         <div>
            <button class=" ">SEND!</button>
         </div>
         </div>
         <div class="brief-container"></div>
   </form>
   <div class="sections">
  <img  alt=" contact us" src="img\clipart-phone-black-and-white-9.png" style={{width:500,height:500,float:'right',padding:10,margintop:30}}/>
  </div>
</div>
<br/>
       <br/> <br/> <br/> <br/> <br/> <br/> <br/>
    </div>
  );
}

export default About;
