import React from "react";
import storyImage from "../assets/images/jodi.jpg";
function Story() {
  return (
    <div id="story" className="story section-padding">
      <div className="container">
        <div className="row">
          <div className="col-md-5 mb-30">
            <div className="story-img animate-box">
              <div className="story-wedding">
                  {" "}
                  <img
                    src={storyImage}
                    className="img-fluid mx-auto d-block"
                    alt=""
                  />{" "}
              </div>
            </div>
          </div>
          <div className="col-md-7 animate-box">
            <h4 className="oliven-story-subtitle">A Little About Us.</h4>
            <p>
              The responsibility of ShubhSangam Matrimonial Services is to
              connect people who are matchmaking in heaven.
            </p>
            <p>
              We have our in-house experts with a keen knowledge in Indian
              cultures, and marriages. Our continuous training and exploration
              about Indian tradition make our personnel the best help for you
              during marriage activities. Our online elite matrimonial services
              serve a huge array of Indian cultures and religions including
              Elite, VIPs, Rajput's, Sikhs, Brahmins, Marwaris, and Agarwal's to
              name a few.
            </p>
            <p>
              We are Most Trusted Elite Matrimony Service, has helped Millions
              like you find matches from across different communities such as
              Agarwal, Brahmin, Marwari, Kayastha, Jain, Khatri, Lingayath,
              Maratha, Nair, Rajput, Reddy
            </p>
            <p>
              we strive to modernize the traditional Indian norms of matrimony
              by providing a professional edge to our services. Our faculty and
              partners are well-educated and come from affluent business
              families. We prioritize maintaining confidentiality of our
              client's information and aim to provide personalized services as
              much as possible. To innovate our services, we introduce new ideas
              such as hiring detectives and conducting personal visits for
              verification in India and abroad.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Story;
