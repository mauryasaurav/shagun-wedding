import React, { useState } from "react";
import Multistep from "./Register";

function RSVP() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    if (name === "contact" && value.length > 12) return;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const email = "s2maurya1@fmail.com";
  const subject = inputs.name; // Replace with the desired subject
  const body = JSON.stringify(inputs); // Replace with the desired body content

  const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;

  return (
    <div id="rsvp" className="section-padding bg-img bg-fixed">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 bg-white p-40">
            {" "}
            <span className="oliven-title-meta text-center">
              Find your life partner With us?
            </span>
            <h2 className="oliven-title text-center">Email US.</h2>
            <br />
            <form method="post" className="row">
              <div className="col-md-12">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Name"
                    name="name"
                    value={inputs.name || ""}
                    onChange={handleChange}
                    required
                  />{" "}
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-group">
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Phone number"
                    name="contact"
                    value={inputs.contact || ""}
                    onChange={handleChange}
                    required
                    min={1}
                    max={12}
                  />{" "}
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-group">
                  <textarea
                    name="message"
                    id="message"
                    cols="30"
                    rows="7"
                    className="form-control"
                    placeholder="Message"
                    value={inputs.message || ""}
                    onChange={handleChange}
                  ></textarea>
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-group">
                  <a className="btn buttono" href={mailtoLink}>
                    SEND
                  </a>
                </div>
              </div>
            </form>
          </div>
        </div>
      {/* <Multistep /> */}
      </div>
    </div>
  );
}

export default RSVP;
