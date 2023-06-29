import React from "react";
import { Link } from "react-router-dom";
import fb from "../../images/facebook.png";
import insta from "../../images/instagram.png";
import linkedin from "../../images/linkedin.png";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <section className=" position-sticky mt-4 bottom-0 start-50 top-100 bg-dark">
        <div className=" d-flex flex-wrap justify-content-evenly">
          <div className="container d-flex flex-row mt-3 flex-md-column flex-lg-row">
            {/* THe above container is main */}

            <div className="container d-flex flex-column ">
              <h5 className=" text-white-50">One Piece Store</h5>
              <div className="conatiner d-flex flex-wrap flex-column  ">
                <Link
                  to="/About"
                  className="text-decoration-none link-secondary roboto"
                >
                  About us
                </Link>
                <Link
                  to="/Carrer"
                  className="text-decoration-none link-secondary roboto"
                >
                  Carrers
                </Link>
                <Link
                  to="/Contact"
                  className="text-decoration-none link-secondary roboto"
                >
                  Contact Us:
                </Link>
              </div>
            </div>

            {/* The above is for  */}

            <div className="container d-flex flex-column">
              <h5 className="text-white-50">Help</h5>
              <Link
                to="/Payment"
                className="text-decoration-none link-secondary roboto"
              >
                Payments
              </Link>
              <Link
                to="/Shipping"
                className="text-decoration-none link-secondary roboto"
              >
                Shipping
              </Link>
              <Link
                to="/ReturnPolicy"
                className="text-decoration-none link-secondary roboto"
              >
                Cancellation and Return
              </Link>
            </div>

            <div className="container d-flex flex-column">
              <h5 className="text-white-50">Policy</h5>
              <Link
                to="/ReturnPolicy"
                className="text-decoration-none link-secondary"
              >
                Return Policy
              </Link>
              <Link
                to="/Privacy"
                className="text-decoration-none link-secondary roboto"
              >
                Privacy
              </Link>
              <Link
                to="/Privacy"
                className="text-decoration-none link-secondary roboto"
              >
                Security
              </Link>
              <Link
                to="/Terms"
                className="text-decoration-none link-secondary roboto"
              >
                Term of use
              </Link>
            </div>

            <div className="container  d-flex flex-column">
              <h5 className="text-white-50">Follow us on:</h5>
              <div className="container justify-content-between">
                <Link
                  to="https://facebook.com"
                  target="_blank"
                  className="text-decoration-none link-secondary"
                >
                  <img src={fb} className="img-fluid icon" alt="..." />
                </Link>
                <Link
                  to="https://instagram.com"
                  target="_blank"
                  className="text-decoration-none link-secondary"
                >
                  <img src={insta} className="img-fluid icon" alt="..." />
                </Link>
                <Link
                  to="https://linkedin.com"
                  target="_blank"
                  className="text-decoration-none link-secondary"
                >
                  <img src={linkedin} className="img-fluid icon" alt="..." />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="d-flex flex-wrap justify-content-center mt-3 border border-end-0 border-bottom-0 border-start-0 border-top border-secondary-subtle">
          <p className="text-light mt-1">Copyright@ One Piece Store 2014</p>
        </div>
      </section>
    </>
  );
};

export default Footer;
