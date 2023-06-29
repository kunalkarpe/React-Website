import React from "react";
import { Link } from "react-router-dom";
import login from "../../images/login.avif";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import "./login.css";

const Login = () => {
  return (
    <>
      <section>
        <div className="container d-flex flex-wrap flex-column  mt-5 ">
          <div className="  d-flex flex-wrap shadow p-3 mt-4 mb-5 bg-body-tertiary rounded flex-row">
            <h2 className="container fs-2 d-flex  justify-content-center">
              <h1>Login</h1>
            </h2>
            <div className=" container d-flex flex-wrap login-form flex-column ">
              <div className="container d-flex flex-wrap justify-content-evenly flex-lg-row flex-sm-column  justify-content-lg-center  mb-3  justify-content-md-center align-items-md-center align-items-lg-center">
                <form method="POST">
                  <div className="container d-flex flex-column">
                    <div className="  d-flex flex-wrap">
                      <div className="container d-flex flex-wrap  mt-4 mb-4">
                        <label htmlFor="email ">
                          <FontAwesomeIcon
                            icon={faEnvelope}
                            className="me-2 mt-2"
                          />
                          :
                          <input
                            type="email"
                            name="email"
                            placeholder="name@gmail.com"
                            className=" border border-0 border-bottom ms-2"
                          />
                        </label>
                      </div>
                      <div className="container d-flex flex-wrap  mt-3 mb-4">
                        <label htmlFor="password">
                          <FontAwesomeIcon
                            icon={faLock}
                            className="mt-2 me-2"
                          />
                          :
                          <input
                            type="password"
                            name="password"
                            className="ms-2 border border-0 border-bottom "
                            placeholder="Your password"
                          />
                        </label>
                      </div>
                    </div>

                    <div className=" d-flex flex-wrap ">
                      <button
                        className="btn btn-outline-warning btn-sm btn-l mt-2 me-2"
                        type="submit"
                      >
                        Login
                      </button>
                    </div>
                    <p className="  d-flex flex-wrap mt-3 text-start">
                      Not Register Yet?
                      <Link
                        to="/Signup"
                        className="ms-2 text-decoration-none text-warning"
                      >
                        Signup Now
                      </Link>
                    </p>
                  </div>
                </form>
                <img
                  src={login}
                  className="d-flex login-img-width  img-fluid  border rounded  mt-5 mb-2  align-self-sm-center align-self-md-center"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
