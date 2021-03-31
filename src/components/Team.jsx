import React from "react";

function Team() {
  return (
    <div id="container">
      
    <div className="brief-conatiner ">
      <h2>About <span className="ted-color">TED</span><div class="underline"></div></h2>
      <p>
          TED is a non profit organization devoted to Ideas worth Spreading. It started out (in 1984) as a conference bringing together people from three worlds: Technology, 
          Entertainment and Design. Since then its scope has become ever broader. Along with two annual conferences 
          - the TED Conference in Long Beach and Palm Springs each spring, and the TEDGlobal conference in Edinburgh UK each summer - 
          TED includes the award-winning TEDTalks video site, the Open Translation Project and TED Conversations, 
          the inspiring TED Fellows and TEDx programs, and the annual TED Prize.
      </p>
    </div>
    <div className="brief-conatiner">

        <h2><span>- </span>About <span className="ted-color">TEDx</span><span> -</span></h2>
        <p>
            In the spirit of ideas worth spreading, TED has created a program called TEDx. TEDx is a program of local, self-organized events that bring people together
            to share a TED-like experience. Our event is call TEDxHelwanUniversity, where x=independently organized TED event. At our TEDxHelwanUniversity event, TEDTalks
            video and live speakers will combine to spark deep discussion and connection in a small group.The TED Conference provides general guidance for the TEDx program, but
            individual TEDx events, including ours, are self-organized.
        </p>
    </div>

    <div className="brief-conatiner">
        <h2 className="helwan-head"><i className="arrow right"></i> About <span className="ted-color">Tedx</span>HelwanUniversity</h2>
        <p>An independently organized TED event in Helwan
            Proceeding from our belief in the power of ideas, we determined to create a community of ideas aiming to enrich our community minds.
            Also inspiring and motivating them to cope with and contribute to the age of renaissance that our country lives in recently,
            hoping to get out and reach the global edge of success starting from Helwan University.
        </p>
    </div>
    <div className="quote-container">
        <h2 className="team-head">Give A Hand To Our <span className="ted-color">Team</span></h2>
        <p className="quote">
            “Individually, we are one drop. Together, we are an ocean.” - Ryunosuke Satoro
        </p>
    </div>
    <div class="chairwoman-grid">
            <div class="grid-card">
                <img src="Fatma%20Sabry-Chairwoman.png" alt="Fatma Sabry" title="Fatma Sabry"/>
                <span class="fatma-name">Fatma Sabry</span>
                <span class="fatma-title">Chairwoman</span>
            </div>
        </div>
        <div class="table-parent">
            {/*HR Comittee*/}
            <div class="grid-card">
                <img src="Rawan Mahmoud - Human Resources Curator.png" alt="Rawan Mahmoud" title="Rawan Mahmoud"/>
                <span class="head-name"> Rawan Mahmoud</span>
                <span class="head-title">Human Resources Curator</span>
            </div>
            <div class="grid-card">
                <img src="Enass%20Abdullah-Executive%20of%20human%20resources.png" alt="Enass Abdullah" title="Enass Abdullah"/>
                <span class="head-name">Enass Abdullah</span>
                <span class="head-title">Executive of human resources</span>
            </div>
            {/* End Of HR Comittee*/}
            {/* Markting Comittee*/}
            <div class="grid-card">
                <img src="Mariam Hamza - Marketing Curator.png" alt="Mariam Hamza" title="Mariam Hamza"/>
                <span class="head-name">Mariam Hamza</span>
                <span class="head-title">Marketing Curator</span>
            </div>
            <div class="grid-card">
                <img src="Mostafa%20Gohary-Marketing%20Advisor.png" alt="Mostafa Gohary" title="Mostafa Gohary"/>
                <span class="head-name">Mostafa Gohary</span>
                <span class="head-title">Marketing Advisor</span>
            </div>
            <div class="grid-card">
                <img src="Mahmoud El Haiwan-Executive of Social Media Marketing.png" alt="Mahmoud El Haiwan" title="Mahmoud El Haiwan"/>
                <span class="head-name">Mahmoud El Haiwan</span>
                <span class="head-title">Executive of Social Media Marketing</span>
            </div>
            <div class="grid-card">
                <img src="Shahd Roshdy - Vice Executive of Social Media Marketing.png" alt="Shahd Roshdy" title="Shahd Roshdy"/>
                <span class="head-name">Shahd Roshdy </span>
                <span class="head-title">Vice Executive of Social Media Marketing</span>
            </div>
            <div class="grid-card">
                <img src="Ahmed%20Hesham-Executive%20of%20Graphic%20Design.png" alt="Ahmed Hesham" title="Ahmed Hesham"/>
                <span class="head-name">Ahmed Hesham</span>
                <span class="head-title">Executive of Graphic Design</span>
            </div>
            <div class="grid-card">
                <img src="Malak%20Magdy.png" alt="Malak Magdy" title="Malak Magdy"/>
                <span class="head-name">Malak Magdy</span>
                <span class="head-title">Vice Executive of Graphic Design</span>
            </div>
            <div class="grid-card">
                <img src="Maryam Esmaeil - Executive of IT .png" alt="Mariam ismail" title="Mariam Isamil"/>
                <span class="head-name">Mariam ismail</span>
                <span class="head-title">Executive of IT </span>
            </div>
            <div class="grid-card">
                <img src="Ahmed Ibrahim - Vice Executive of IT.png" alt="Ahmed Ibrahim" title="Ahmed Ibrahim"/>
                <span class="head-name">Ahmed Ibrahim</span>
                <span class="head-title">Vice Executive of IT</span>
            </div>
            <div class="grid-card">
                <img src="Mohamed Nasr - Vice Executive of IT.png" alt="Mohamed Nasr" title="Mohamed Nasr"/>
                <span class="head-name">Mohamed Nasr</span>
                <span class="head-title">Vice Executive of IT</span>
            </div>
            <div class="grid-card">
                <img src="Adham%20Ahmed-Executive%20of%20Multimedia.png" alt="Adham Ahmed" title="Adham Ahmed"/>
                <span class="head-name">Adham Ahmed</span>
                <span class="head-title">Executive of Multimedia</span>
            </div>
            <div class="grid-card">
                <img src="Abdallah%20Domery-Vice%20Executive%20of%20Multimedia.png" alt="Abdallah Domery" title="Abdallah Domery"/>
                <span class="head-name">Abdallah Domery</span>
                <span class="head-title">Vice Executive of Multimedia</span>
            </div>
            {/*End Of Marketing Comittee*/}
            {/* Opeation Comittee*/}
            <div class="grid-card">
                <img src="no-photo.png" alt="Omar Tamer" title="Omar Tamer"/>
                <span class="head-name">Omar Tamer</span>
                <span class="head-title">Operation Curator</span>
            </div>
            <div class="grid-card">
                <img src="Radwa%20Mohsen-Operation%20Advisor.png" alt="Radwa Mohsen" title="Radwa Mohsen"/>
                <span class="head-name">Radwa Mohsen</span>
                <span class="head-title">Operation Advisor</span>
            </div>
            <div class="grid-card">
                <img src="Radwa%20Ashraf-Executive%20of%20Fundraising.png" alt="Radwa Ashraf" title="Radwa Ashraf"/>
                <span class="head-name">Radwa Ashraf</span>
                <span class="head-title">Executive of Fundraising</span>
            </div>
            <div class="grid-card">
                <img src="Radwa%20Ashraf-Executive%20of%20Fundraising.png" alt="Rawan Mohamed" title="Rawan Mohamed"/>
                <span class="head-name">Rawan Mohamed</span>
                <span class="head-title">Vice Executive of Fundraising</span>
            </div>
            <div class="grid-card">
                <img src="no-photo.png" alt="Rawan Wael" title="Rawan Wael"/>
                <span class="head-name">Rawan Wael</span>
                <span class="head-title">Vice Executive of IT</span>
            </div>
            <div class="grid-card">
                <img src="Nayera Maged-Vice Executive of Public Relations.png" alt="Nayera Maged" title="Nayera Maged"/>
                <span class="head-name">Nayera Maged</span>
                <span class="head-title">Vice Executive of PR</span>
            </div>
            {/* End Of Opeation Comittee*/}
            {/* Logistics Comittee*/}
            <div class="grid-card">
                <img src="Mohamed Bakry-Logistics Curator.png" alt="Mohamed Bakry" title="Mohamed Bakry"/>
                <span class="head-name">Mohamed Bakry</span>
                <span class="head-title">Logistics Curator</span>
            </div>
            <div class="grid-card">
                <img src="Salma%20Hussien-Executive%20of%20Event%20Planning.png" alt="Salma Hussien" title="Salma Hussien"/>
                <span class="head-name">Salma Hussien</span>
                <span class="head-title">Executive of Event Planning</span>
            </div>
            <div class="grid-card">
                <img src="Weaam Essam - Executive of Coordination.png" alt="Weaam Essam" title="Weaam Essam"/>
                <span class="head-name">Weaam Essam </span>
                <span class="head-title">Executive of Coordination</span>
            </div>
            <div class="grid-card">
                <img src="Ahmed%20Ibrahim-Vice%20Executive%20of%20Coordination.png" alt="Ahmed Ibrahim" title="Ahmed Ibrahim"/>
                <span class="head-name">Ahmed Ibrahim</span>
                <span class="head-title">Vice Executive of Coordination</span>
            </div>  
            {/* End Of Logistics Comittee*/}
            {/* Coaching Comittee*/}
            <div class="grid-card">
                <img src="Abdelrahman%20Ahmed-Coaching%20Curator.png" alt="Abdelrahman Ahmed" title="Abdelrahman Ahmed"/>
                <span class="head-name">Abdelrahman Ahmed</span>
                <span class="head-title">Coaching Curator</span>
            </div>
            <div class="grid-card">
                <img src="no-photo.png" alt="Toaa Qandil" title="Toaa Qandil"/>
                <span class="head-name">Toaa Qandil</span>
                <span class="head-title">Coaching Executive</span>
            </div>
            <div class="grid-card">
                <img src="no-photo.png" alt="Aya ibrahim" title="Aya ibrahim"/>
                <span class="head-name">Aya ibrahim</span>
                <span class="head-title">Coaching Vice Executive</span>
            </div>
            {/* End Of Coaching Comittee*/}
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

export default Team;
