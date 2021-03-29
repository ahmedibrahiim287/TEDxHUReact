import React from "react";

function About() {
  return (
    <div>
      
      <div class="container">
    <form class="form" action="#">
     
         <div class="formdiv">
            <h2> Contact Us </h2>
         </div>
         <div class="formdiv">
             <label class="name"> Name  </label>
           {/* <i class=" fas fa-user "></i> */}
            <input type="text" name="name" placeholder="Your name" />
         </div>
         
         <div class="formdiv">
         <label class="name"> E-mail  </label> 
         {/* <i  class="far fa-envelope" ></i>  */}
         <input type="email" name="email" placeholder=" email@server.com" />
         </div>
        
         <div class="formdiv">
         {/* <i  class="fas fa-align-left" ></i> */}
         <label class="name ">Subject  </label> 
         <input type="text" name="subject" placeholder="Message Subject" />
         </div>
         
         <div class="formdiv">
         <label class="name">Message Content   </label>
         <input type="text" name="message" placeholder=" Type your Message here " />
         </div>
         
         <div class=" botton ">
            <button class=" ">SEND!</button>
         </div>
      
   </form>
   <div class="sections">
  <img  alt=" contact us" src="img\clipart-phone-black-and-white-9.png" style={{width:400,height:400,align:'center',padding:10,margintop:30}}/>
  </div>
</div>

    </div>
  );
}

export default About;
