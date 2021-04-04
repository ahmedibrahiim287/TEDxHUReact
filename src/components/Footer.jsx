import  React, { Fragment}  from "react";

function Footer() {
  return (
    <div>
      <footer className="site-footer">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <h6 style={{color:"#f00",fontSize:"24px"}}>About</h6>
            <p className="text-justify">An independently organized TED event in Helwan Proceeding from our belief in the power of ideas, we determined to create a community of ideas aiming to enrich our community minds. Also inspiring and motivating them to cope with and contribute to the age of renaissance that our country lives in recently, hoping to get out and reach the global edge of success starting from Helwan University.</p>
          </div>

          <div className="col-xs-6 col-md-3">
            <h6>Be Part Of Us</h6>
            <ul className="footer-links">
              <li><a href="#">Volunteer</a></li>
              <li><a href="#">Speaker</a></li>
            </ul>
          </div>

          <div className="col-xs-6 col-md-3">
            <h6>Categories</h6>
            <ul className="footer-links">
              <li><a href="#">Attend</a></li>
              <li><a href="#">Watch</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Sponsers</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </div>
        </div>
        <hr/>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-sm-6 col-xs-12">
            <p className="copyright-text">Copyright &copy;2021 TEDxHelwanUniversity. This independent TEDx event is operated under license from TED.
            </p>
          </div>
          <div className="col-md-4 col-sm-6 col-xs-12">
            <ul className="social-icons">
              <li><a className="facebook" href="https://www.facebook.com/TEDxHUni/" target="_blank"><i className="fab fa-facebook-f"></i></a></li>
              <li><a className="youtube" href="https://www.youtube.com/playlist?list=PLwCKOAvD-tKnyzziugxDDquCA1-Pi-42t" target="_blank"><i className="fab fa-youtube"></i></a></li>
              <li><a className="linkedin" href="https://www.linkedin.com/company/tedxhelwanuniversity" target="_blank"><i className="fab fa-linkedin-in"></i></a></li>
            </ul>
          </div>
        </div>
      </div>
</footer>
    </div>
  );
  }

export default Footer;
