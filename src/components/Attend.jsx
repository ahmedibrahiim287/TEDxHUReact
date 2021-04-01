import React from "react";
import Gallery from 'react-grid-gallery';

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
    <hl></hl>

    <ul className="eventinfo row">               
                    <li className="eventit"><a href="https://goo.gl/maps/HfReUaoNNUyQn2Qs9" target="_blank" rel="noreferrer">
                      <i class=" fas fa-map-marker-alt"> El Nahar Theater</i></a></li> 
                      <li className="eventit"> <i className=" fas fa-calendar-alt">Saturday, 10 April 2021</i> </li> 
                      <li className="eventit"><i class="fas fa-clock" >10:00 AM</i> </li> 
    </ul>
               
    
    <div className="brief-conatiner "></div>
  
    <Gallery images={IMAGES}/>

    <div className="brief-conatiner "></div><div className="brief-conatiner "></div>
  </div>
  );
}

const IMAGES =
[{
        src: "/img/conductor/DSC_0058 (1).jpg",
        thumbnail: "/img/conductor/DSC_0058 (1).jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 174,
        
        
},{
  src: "/img/conductor/DSC_0040.jpg",
  thumbnail: "/img/conductor/DSC_0040.jpg",
  thumbnailWidth: 400,
  thumbnailHeight: 670,
  
},
{
        src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
        thumbnail: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212,
        tags: [{value: "Ocean", title: "Ocean"}, {value: "People", title: "People"}],
        caption: "Boats (Jeshu John - designerspics.com)"
},

{
        src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
        thumbnail: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_n.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212
}]

export default Attend;
