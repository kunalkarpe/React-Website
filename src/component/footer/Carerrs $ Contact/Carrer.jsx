import React from "react";
import { Link } from "react-router-dom";

const Carrer = () => {
  return (
    <>
      <div className="container d-flex flex-wrap mt-5">
        <div className="container mt-5 border border-3 rounded-4">
          <h2>Delivery Partners</h2>
          <p className="text-start">
            <h3>We are looking for Delivery boys who have: </h3>
          </p>
          <p className="text-start text-decoration-none">
            <div className="container d-flex">
              <p className="text-start fw-bold">Cars - </p>
              <p>Who can delivers items to their location.</p>
            </div>
            <div className="container d-flex">
              <p className="text-start fw-bold">Bikes - </p>
              <p>
                Who can moves easily from traffic in order to deliver items fast
                to their respective location.
              </p>
            </div>
          </p>
          <p className="text-start d-flex flex-column">
            <strong>Required Documents- </strong>
            <li>10th pass certificate.</li>
            <li>Driving License.</li>
            <li>Proof of vehicles belongs to them.</li>
          </p>
          <p>
            Wan'a join us, mail your details at :{" "}
            <Link to="/"> onepiece@gmail.com</Link>
          </p>
          Or
          <p>
            Fill the Form at:
            <Link to="/Contact">Contact Us</Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Carrer;
