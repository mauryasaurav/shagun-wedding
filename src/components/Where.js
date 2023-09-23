import React from "react";
import where1 from "../assets/images/r1.jpeg";
import where2 from "../assets/images/r2.jpeg";
import where3 from "../assets/images/r3.jpeg";
function Where() {
  return (
    <div id="whenwhere" className="whenwhere section-padding bg-pink">
      <div className="container">
        <div className="row">
          <div className="col-md-12 mb-30">
            {" "}
            <h2 className="oliven-title">With Loved One</h2>{" "}
            <span className="oliven-title-meta">Blogs</span>
          </div>
        </div>
        <div className="row">
          <div className="item col-12 col-md-4">
            <div className="whenwhere-img">
              {" "}
              <img src={where1} alt="" />
            </div>
            <div className="content">
              <h5>Rahul & Pooja</h5>
              <p>
                <i className="ti-location-pin"></i> I'm very glad to share my
                happiness here Thanks a lot Defence Wards Matrimony for playing
                a big role in selection of my desired life partner.
                <br />
                <br />
              </p>
              <p>
                <i className="ti-time"></i> <span>30 AUG 2018</span>
              </p>
            </div>
          </div>
          <div className="item col-12 col-md-4">
            <div className="whenwhere-img">
              {" "}
              <img src={where2} alt="" />
            </div>
            <div className="content">
              <h5>Aaryan & Kavya</h5>
              <p>
                <i className="ti-location-pin"></i> A marriage leads to the life
                of sharing,caring and endless love for each other. Thanks to the
                Defence Wards Matrimony team. It was a great experience.
              </p>
              <p>
                <i className="ti-time"></i> <span>28 JUNE 2018</span>
              </p>
            </div>
          </div>
          <div className="item col-12 col-md-4">
            <div className="whenwhere-img">
              {" "}
              <img src={where3} alt="" />
            </div>
            <div className="content">
              <h5>Vijay & Kirti</h5>
              <p>
                <i className="ti-direction-alt"></i> Having a dedicated service
                is the best thing about Defence Wards Matrimony. Our Select
                Service Advisory was excellent and provided us very good
                service.
              </p>
              <p>
                <i className="ti-direction"></i> 1 MAY 2017
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Where;
