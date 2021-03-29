import React from "react";

function Home() {
  return (
    <div class="gradient-bg">
      <div class="container">
        <div class="slides">
          <div class="slide">
            <img src="public\img\Event-Cover.jpg" alt="" />
            <div class="slide-content">
              <h1 id="slider" >Latest news</h1>
              <h1 id="slider"># A group of computer science major students designed a websites to help thier collugues </h1>
            </div>
          </div>
          <div class="slide">
            <img src="public\img\slider\cover-1.png" alt="" />
            <div class="slide-content">
                <br/><h1 id="slider" class ="newsCont"># MSP created an event, presenting AI & Data science and some other related topics </h1>
              </div>
          </div>
          <div class="slide">
            <img src="public\img\slider\cover.png" alt="" />
            <div class="slide-content">
                <br/><h1 id="slider" class ="newsCont"># Shamofors make thier first party in Helwan university</h1>
              </div>
          </div>
          <div class="slide">
            <img src="public\img\slider\leaveyourl.jpg" alt="" />
            <div class="slide-content">
                <br/><h1 id="slider" class ="newsCont"># Computer science students have to take a written exam the next  month</h1>
              </div>
          </div>
        </div>
        <div class="slide-controls" >
          <button id="prev-btn">
            <i class="fas fa-chevron-left"></i>
          </button>
          
          <button id="next-btn" >
            <i class="fas fa-chevron-right"></i>
          </button>
        </div>
      </div>
      <script src="./slider.jsx"></script>
    <img class="slide" alt= "" src="maxresdefault-4.jpg"></img>



    </div>
   
    
  );
}

export default Home;
