import React from "react";

function Home() {
  return (
    <div class="gradient-bg">
      <div class="containerS">
        <div class="slides">
          <div class="slide">
            <img src="img\slider\cover-1.png" alt="" />
            <div class="slide-content">
            </div>
          </div>
          <div class="slide">
            <img src="img\slider\cover.png" alt="" />
            <div class="slide-content">
              <h1 class="newsCont"># MSP created an event, presenting AI & Data science and some other related topics </h1>
            </div>
          </div>
          <div class="slide">
            <img src="img\slider\leaveyourl.jpg" alt="" />
            <div class="slide-content">
              <h1 class="newsCont"># Shamofors make thier first party in Helwan university</h1>
            </div>
          </div>
          <div class="slide">
            <img src="slider4.jpg" alt="" />
            <div class="slide-content">
              <h1 class="newsCont"># Computer science students have to take a written exam the next  month</h1>
            </div>
          </div>
        </div>
        <div class="slide-controls" >
          <button id="prev-btn" >
            <i class="fas fa-chevron-left"></i>
          </button>

          <button id="next-btn" >
            <i class="fas fa-chevron-right"></i>
          </button>
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
        <div class="footer" ></div>
        <script src="..\component\slider.js" ></script>

        </div>

  );
}

export default Home;
