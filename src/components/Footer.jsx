import  React, { Fragment}  from "react";

function Footer() {
  return (
    <div id="footer" >
      <footer className=" footer fluid-bottom">
        <div className="container">
          <Fragment>
        <p className="social-fot">
        &copy;2021 TEDxHelwanUniversity. This independent TEDx event is operated under license from TED.{" "}
       </p>
      <div>
      <ul className="respo">
        <li className="ico">
          <a target="_blank" rel="noopener noreferrer" href={'https://www.linkedin.com/company/tedxhuni/'}
          >
            <i className="fab fa-linkedin"></i>
          </a>
        </li>
        <li className="ico">
          <a target="_blank" rel="noopener noreferrer" href={'https://www.instagram.com/TEDxHUni/'}>
            <i className="fab fa-instagram"></i>
          </a>
        </li>
        <li className="ico">
          <a target="_blank" rel="noopener noreferrer" href={' https://www.facebook.com/TEDxHUni/'}>
            <i className="fab fa-facebook-f"></i>
          </a>
        </li>
      </ul>
</div>
         </Fragment>
         </div>
         
      </footer>
    </div>
  );
  }

export default Footer;
