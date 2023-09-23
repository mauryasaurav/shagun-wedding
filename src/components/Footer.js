import React from "react";
import Logo from "../assets/images/download.webp";
function Footer() {
  return (
    <div className="footer2">
      <div className="oliven-narrow-content">
        <div className="row">
          <div className="col-md-12 text-center ">
            <div className="div-center">
              <a href="/">
                <img src={Logo} alt="" style={{ width: 150 }} />
              </a>
            </div>
            <p className="copyright">Address – Sector 142, Noida</p>
            <p className="copyright">Contact US – 88826 13920</p>
            <p className="copyright">Owner – Ram Jaiswal</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
