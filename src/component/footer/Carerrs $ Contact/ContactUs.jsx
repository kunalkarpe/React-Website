import React from "react";

const ContactUs = () => {
  return (
    <>
      <div className="container d-flex flex-wrap flex-column mt-4">
        <h3 className="d-flex flex-wrap justify-content-center text-start mt-5">
          Request Form
        </h3>
        <div className="container w-50 mt-3 border border-3 rounded-3 poppins">
          <form action="https://formspree.io/f/mjvdnylg" method="POST">
            <div className="mb-3">
              <label
                htmlFor="exampleFormControlInput1"
                className="form-label mt-2"
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
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Contact No.
              </label>
              <input
                type="tel"
                className="form-control"
                id="exampleFormControlInput1"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Email:
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleFormControlInput1"
              />
            </div>

            <div className="container mb-2">
              <p className="text-start"> Do You have ?</p>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="exampleRadios"
                  id="exampleRadios1"
                  value="option1"
                />
                <label className="form-check-label" htmlFor="exampleRadios1">
                  Bike
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="exampleRadios"
                  id="exampleRadios2"
                  value="option2"
                />
                <label className="form-check-label" htmlFor="exampleRadios2">
                  Car
                </label>
              </div>
            </div>

            <input
              className="btn btn-success mb-3 justify-content-center mt-2"
              type="submit"
              value="Submit"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
