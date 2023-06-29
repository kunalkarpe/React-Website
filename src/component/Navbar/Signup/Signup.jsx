import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import signup from "../../images/signupimage.png";
import "./Signup.css";

const Signup = () => {
  return (
    <>
      <section>
        <div className="container d-flex mt-5 flex-wrap flex-column">
          <div className="  d-flex flex-wrap shadow p-3 mt-4 mb-5 bg-body-tertiary rounded flex-row">
            <div className="container d-flex flex-wrap login-form flex-column mt-3">
              <h2 className=" container fs-2 d-flex  justify-content-center">
                <b>Sign Up</b>
              </h2>
              <div className="container d-flex flex-wrap ">
                <div className="container d-flex flex-wrap  mt-2 justify-content-between">
                  <form method="POST">
                    <div className="container d-flex flex-wrap flex-column ">
                      <div className="container d-flex flex-wrap  mt-4 mb-4">
                        <label htmlFor="name">
                          <FontAwesomeIcon
                            icon={faUser}
                            className="me-2 mt-2"
                          />
                          :
                          <input
                            type="text"
                            className=" border border-0 border-bottom ms-2"
                            name="name"
                            autoComplete="Off"
                            placeholder="Your name"
                          />
                        </label>
                      </div>

                      <div className="container d-flex flex-wrap  mt-3 mb-4">
                        <label htmlFor="email">
                          <FontAwesomeIcon
                            icon={faEnvelope}
                            className="me-2 mt-2"
                          />
                          :
                          <input
                            type="email"
                            name="email"
                            placeholder="name@gmail.com"
                            className=" border border-0 border-bottom ms-2 "
                          />
                        </label>
                      </div>

                      <div className="container d-flex flex-wrap  mt-3 mb-4">
                        <label htmlFor="password">
                          <FontAwesomeIcon
                            icon={faLock}
                            className="me-2 mt-2"
                          />
                          :
                          <input
                            type="password"
                            className="border border-0 border-bottom ms-2"
                            placeholder="Your password"
                          />
                        </label>
                      </div>

                      <div className="container d-flex flex-wrap  mt-3 mb-4">
                        <label htmlFor="cpassword">
                          <FontAwesomeIcon
                            icon={faLock}
                            className="me-2 mt-2"
                          />
                          :
                          <input
                            type="password"
                            className="border border-0 border-bottom ms-2"
                            name="cpassword"
                            placeholder="Your password"
                          />
                        </label>
                      </div>

                      <div className="container d-flex flex-wrap mt-3 mb-4">
                        <label htmlFor="phone">
                          <FontAwesomeIcon
                            icon={faPhone}
                            className="me-2 mt-2"
                          />
                          :
                          <input
                            type="tel"
                            className="border border-0 border-bottom ms-2"
                            name="phone"
                            placeholder="Your 10 digits number"
                          />
                        </label>
                      </div>
                    </div>

                    <div className="form-group d-flex flex-wrap">
                      <button
                        className="btn btn-outline-warning btn-sm btn-l mt-2"
                        type="submit"
                      >
                        Sign Up
                      </button>

                      <div className="container d-flex flex-wrap mt-3">
                        Already a member
                        <Link
                          to="/Login"
                          className="ms-2 me-1 text-decoration-none text-warning"
                        >
                          Login Now!
                        </Link>
                      </div>
                    </div>
                  </form>
                  <img
                    src={signup}
                    className="d-flex container img-width  img-fluid  border rounded  mt-5 mb-2  align-self-sm-center align-self-md-center"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Signup;
