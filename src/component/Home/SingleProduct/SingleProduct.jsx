import React, { useEffect, useState } from "react";
import { FakeStoreApi } from "../../Helpers/FakeStoreApi.js";
import { useParams } from "react-router-dom";
import Currency from "../../Helpers/Currency.jsx";

import { useCart } from "../../ContextApi/Cart.js";
import "./SingleProduct.css";

const SingleProduct = () => {
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState();
  const { productId } = useParams();

  const { addToCart } = useCart();

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      const product = await FakeStoreApi.fetchProductsById(productId);
      setProduct(product);
      setLoading(false);
    };
    fetchProducts().catch(console.error);
  }, [productId]);

  if (!loading && !product) {
    return (
      <>
        <div className="container mt-5">
          <p className=" card-text border-bottom border-3 mt-5 fw-medium">
            No Products Found! Please return to our page
          </p>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="container d-flex flex-row">
        <div className="container d-flex flex-wrap mt-5 justify-content-center">
          {loading ? (
            <div
              className="container spinner-border mt-5 d-flex justify-content-center"
              role="status"
            >
              <span className="visually-hidden">Loading...</span>
            </div>
          ) : (
            <div className="container d-flex flex-wrap mt-5 ">
              <div className="container d-flex flex-column mt-5 border-bottom border-end border-3 rounded-4 flex-xs-column flex-sm-column flex-md-column  flex-lg-column flex-xl-row ">
                <div
                  className="container d-flex flex-wrap justify-content-center
                justify-content-xs-center justify-content-sm-center justify-content-md-center justify-content-lg-center"
                >
                  <div className="card card-width border-0">
                    <img
                      src={product.image}
                      className="card-img-top img-fluid"
                      alt="..."
                    />
                  </div>
                </div>

                <div className="container d-flex flex-wrap flex-row">
                  <div className="card-body">
                    <h5 className="card-title mt-4 text-decoration-none poppins">
                      {product.title}
                    </h5>
                    <p className="card-text mt-4 text-uppercase mukta">
                      {product.category}
                    </p>
                    <p className="card-text mt-4 text-capitalize roboto">
                      {product.description}
                    </p>
                    <div className="d-flex flex-row justify-content-between mt-5">
                      <p className="card-text justify-content-start secular">
                        {<Currency price={product.price} />}
                      </p>
                      <button
                        className="btn btn-outline-success btn-sm d-flex justify-content-end mb-3 rounded-2"
                        onClick={() => addToCart(product)}
                      >
                        Add
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
