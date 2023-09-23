import React from "react";

function Organization() {
  return (
    <div id="organization" className="organization section-padding bg-pink">
      <div className="container">
        <div className="row">
          <div className="col-md-12 mb-30">
            <span className="oliven-title-meta">Wedding</span>
            <h2 className="oliven-title">Success Stories</h2>
          </div>
        </div>
        <div
          className="row bord-box bg-img"
          data-background="images/slider.jpg"
        >
          <div className="col-md-3 item-box">
            <h2 className="custom-font numb">01</h2>
            <h6 className="title">Shri Rameshji Poddar</h6>
            <p>
              We are cracked the right formula to effective service in the
              Martrimony biz sphere! Everything from meetings to engagement
              planning is well orchestrate
              <br />
              <br />
              <br />
            </p>
          </div>
          <div className="col-md-3 item-box">
            <h2 className="custom-font numb">02</h2>
            <h6 className="title">Padmabhushan Shri</h6>
            <p>
              The quality of service offered is worthy of more than just a
              mention. We recommend their services and look forward to seeing
              them very soon at our next marriage proposal.
              <br />
              <br />
              <br />
            </p>
          </div>
          <div className="col-md-3 item-box">
            <h2 className="custom-font numb">03</h2>
            <h6 className="title">Shri Pravitiji Tayal</h6>
            <p>
              Our family is always been apprehensive of the limelight.we
              assured us of our prospective in-laws?s credibility and their
              background while maintaining the trust of confidentiality..
              <br />
              <br />
            </p>
          </div>
          <div className="col-md-3 item-box">
            <h2 className="custom-font numb">04</h2>
            <h6 className="title">Shri Kamalji Morarka</h6>
            <p>
              Team is a delight to work with. We were a little apprehensive with
              letting someone in on so much information but were pleasantly
              surprised with their level of professionalism and confidentiality.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Organization;
