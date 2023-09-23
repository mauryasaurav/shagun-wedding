import React from "react";
import { BiPhoneIncoming } from "react-icons/bi";

function Header() {
  const handleCallButtonClick = () => {
    const telLink = `tel:8882613920`;
    window.open(telLink);
  };

  return (
    <header id="home" className="header valign bg-img parallaxie">
      <div className="container">
        <BiPhoneIncoming
          cursor={"pointer"}
          size={40}
          transition="color 200ms"
          color="white"
          onClick={() => handleCallButtonClick()}
          className="phone_icon"
        />

        <div className="row">
          <div className="col-md-12 text-header caption">
            <div className="half-background">
              Find your Perfect Match With Us
            </div>

            <div
              className="content_class animate-box"
              data-animate-effect="fadeInUp"
            >
              <h2>ShubhSangam</h2>
              <h2>ShubhSangam</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="arrow bounce text-center">
              <a href="#couple">
                {" "}
                <i className="ti-heart"></i>{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
