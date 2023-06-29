import React from "react";
import { Link } from "react-router-dom";
import Currency from "../../Helpers/Currency";
import "./Card.css";

const Card = ({ data, addToCart }) => {
  const { id, image, title, price, category } = data;
  return (
    <>
      <div className="card card-width align-items-center mt-2">
        <img
          src={image}
          className="card-img-top img-fluid img-thumbnail card-image-width border-0"
          alt="..."
        />
        <div className="card-body">
          <Link
            to={`/SingleProduct/${id}`}
            className="card-link text-decoration-none poppins"
          >
            {title}
          </Link>
          <p className="card-text mt-4 text-uppercase mukta">{category}</p>
          <div className="d-flex flex-wrap justify-content-between mt-3">
            <p className="card-text secular">
              <Currency price={price} />
            </p>
            <button
              className="btn  btn-outline-success btn-sm"
              onClick={addToCart}
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
