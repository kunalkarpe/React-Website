import React from "react";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <>
      <section>
        <div className="container d-flex flex-wrap flex-column mt-4">
          <div className="container  d-flex flex-wrap mt-3">
            <p className="text-start fw-bold fs-2 mt-5 d-flex flex-wrap roboto">
              Check your nearby store using google map :
            </p>
          </div>
          <div className="container  d-flex flex-wrap">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.1835324191516!2d72.91405497451613!3d19.099602782109866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c7cb91a08e4b%3A0x10408c61181384c3!2sR%20City%20Mall!5e0!3m2!1sen!2sin!4v1687779208186!5m2!1sen!2sin"
              title="myFrame"
              allowFullScreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              className=" i-frame border-0 d-flex flex-wrap mt-2"
            ></iframe>
          </div>

          <h3 className="d-flex flex-wrap justify-content-center m-auto mt-5 secular">
            Send FeedBack
          </h3>
          <div className="container w-50 mt-3 border border-3 rounded-3 poppins">
            <form action="https://formspree.io/f/mjvdnylg" method="POST">
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label mt-2 secular"
                >
                  Username
                </label>
                <input
                  type="name"
                  name="username"
                  className="form-control"
                  id="exampleFormControlInput1"
                />
              </div>

              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput1 "
                  className="form-label secular"
                >
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="xyz@gmail.com"
                />
              </div>

              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlTextarea1"
                  className="form-label secular"
                >
                  Example textarea
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                ></textarea>
              </div>

              <input
                className="btn btn-success mb-3 justify-content-center"
                type="submit"
                value="Submit"
              />
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
