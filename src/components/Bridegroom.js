import React from "react";
import Bride from "../assets/images/mandapa-sideimage.svg";
import Groom from "../assets/images/wedding-bazaar-sideimage.svg";

function Bridegroom() {
  return (
    <div id="couple" className="bridegroom clear bg-pink">
      <div className="row">
        <div
          className="col-md-12 mb-12 text-center animate-box"
          data-animate-effect="fadeInUp"
        >
          <h3 className="oliven-couple-title section-padding">
            Our wedding services
          </h3>
        </div>
      </div>
      <div className="container">
        <div className="row mb-60">
          <div className="col-md-6">
            <div
              className="item toright mb-30 animate-box"
              data-animate-effect="fadeInLeft"
            >
              <div className="img">
                {" "}
                <img src={Bride} alt="" />{" "}
              </div>
              <div className="info valign">
                <div className="full-width">
                  <h6>
                    WeddingBazaar <i className="ti-heart"></i>
                  </h6>{" "}
                  <span>weddingbazaar.com</span>
                  <p>
                    India's largest wedding planning platform with 2 Lakh
                    vendors over 40+ cities.
                  </p>
                  <div className="social">
                    <div className="full-width">
                      <a href="#0" className="icon">
                        {" "}
                        <i className="ti-facebook"></i>{" "}
                      </a>
                      <a href="#0" className="icon">
                        {" "}
                        <i className="ti-twitter"></i>{" "}
                      </a>
                      <a href="#0" className="icon">
                        {" "}
                        <i className="ti-instagram"></i>{" "}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div
              className="item mb-30 animate-box"
              data-animate-effect="fadeInRight"
            >
              <div className="img">
                {" "}
                <img src={Groom} alt="" />{" "}
              </div>
              <div className="info valign">
                <div className="full-width">
                  <h6>
                    Mandap<i className="ti-heart"></i>
                  </h6>{" "}
                  <span>mandap.com</span>
                  <p>
                    India's largest wedding venue booking platform with 40,000+
                    venues!
                    <br />
                    <br />
                  </p>
                  <div className="social">
                    <div className="full-width">
                      <a href="#0" className="icon">
                        {" "}
                        <i className="ti-facebook"></i>{" "}
                      </a>
                      <a href="#0" className="icon">
                        {" "}
                        <i className="ti-twitter"></i>{" "}
                      </a>
                      <a href="#0" className="icon">
                        {" "}
                        <i className="ti-instagram"></i>{" "}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row padding-bottom">
          <div
            className="col-md-12 text-center animate-box"
            data-animate-effect="fadeInUp"
          >
            <h3 className="oliven-couple-title">Are getting married!</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bridegroom;
