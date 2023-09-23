import React from "react";
import gallery1 from "../assets/images/5.jpeg";
import gallery2 from "../assets/images/2.jpeg";
import gallery3 from "../assets/images/22.jpeg";
import gallery4 from "../assets/images/10.jpeg";
import gallery5 from "../assets/images/14.jpeg";  
import gallery6 from "../assets/images/8.jpeg";
function Gallery() {
  return (
    <div id="gallery" className="section-padding">
      <div className="container">
        <div className="row">
          <div className="col-md-12 mb-30">
            <h2 className="oliven-title">
              Thousands have found their life partner at ShubhSangam Matrimonial
              Services
            </h2>
            <span className="oliven-title-meta">Gallery</span>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row gallery-filter mt-3">
          <div className="col-md-4 gallery-item ceremony">
            <a href="/" className="img-zoom">
              <div className="gallery-box">
                <div className="gallery-img">
                  {" "}
                  <img
                    src={gallery1}
                    className="img-fluid mx-auto d-block"
                    alt=""
                  />{" "}
                </div>
                <div className="gallery-detail">
                  <h4 className="mb-0">Wedding Ceremony</h4>
                </div>
              </div>
            </a>
          </div>
          <div className="col-md-4 gallery-item party">
            <a href="/" className="img-zoom">
              <div className="gallery-box">
                <div className="gallery-img">
                  {" "}
                  <img
                    src={gallery2}
                    className="img-fluid mx-auto d-block"
                    alt=""
                  />{" "}
                </div>
                <div className="gallery-detail">
                  <h4 className="mb-0">Wedding Party</h4>{" "}
                </div>
              </div>
            </a>
          </div>
          <div className="col-md-4 gallery-item ceremony">
            <a href="/" className="img-zoom">
              <div className="gallery-box">
                <div className="gallery-img">
                  {" "}
                  <img
                    src={gallery3}
                    className="img-fluid mx-auto d-block"
                    alt=""
                  />{" "}
                </div>
                <div className="gallery-detail">
                  <h4 className="mb-0">Wedding Ceremony</h4>{" "}
                </div>
              </div>
            </a>
          </div>
          <div className="col-md-4 gallery-item party">
            <a href="/" className="img-zoom">
              <div className="gallery-box">
                <div className="gallery-img">
                  {" "}
                  <img
                    src={gallery4}
                    className="img-fluid mx-auto d-block"
                    alt=""
                  />{" "}
                </div>
                <div className="gallery-detail">
                  <h4 className="mb-0">Wedding Party</h4>{" "}
                </div>
              </div>
            </a>
          </div>
          <div className="col-md-4 gallery-item ceremony">
            <a href="/" className="img-zoom">
              <div className="gallery-box">
                <div className="gallery-img">
                  {" "}
                  <img
                    src={gallery5}
                    className="img-fluid mx-auto d-block"
                    alt=""
                  />{" "}
                </div>
                <div className="gallery-detail">
                  <h4 className="mb-0">Wedding Ceremony</h4>{" "}
                </div>
              </div>
            </a>
          </div>
          <div className="col-md-4 gallery-item party">
            <a href="/" className="img-zoom">
              <div className="gallery-box">
                <div className="gallery-img">
                  {" "}
                  <img
                    src={gallery6}
                    className="img-fluid mx-auto d-block"
                    alt=""
                  />{" "}
                </div>
                <div className="gallery-detail">
                  <h4 className="mb-0">Wedding Party</h4>{" "}
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
