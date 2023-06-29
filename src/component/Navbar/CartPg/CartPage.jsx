import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../ContextApi/Cart";
import "./CartPage.css";
import Currency from "../../Helpers/Currency";

const Cart = () => {
  const { cart, increaseQuantity, decreaseQuantity, removeFromCart } =
    useCart();

  const ShippingFee = 50;

  const cartTotal = () => {
    return cart.reduce(
      (acc, item) => acc + item.product.price * item.quantity,
      0
    );
  };
  return (
    <>
      <div className="container mt-5 d-flex flex-row ">
        <div className="container mt-5 d-flex flex-column ">
          {cart.length >= 1 ? (
            <div className="container d-flex flex-column flex-wrap">
              <div className="container d-flex flex-column flex-wrap">
                <h2>Order Summary</h2>
                {cart.map((item) => (
                  <>
                    <div
                      className="container d-flex flex-row mt-2 mb-2 ms-2 me-3 border border-3 rounded-4 justify-content-around"
                      key={item.product.id}
                    >
                      <div className="container d-flex  flex-column  justify-content-between">
                        <div className="container d-flex  flex-column  flex-sm-column justify-content-evenly flex-md-column flex-lg-row  align-items-center ">
                          <div className="card card-width d-flex justify-content-center align-items-center mt-1 mb-1  border-0">
                            <img
                              src={item.product.image}
                              className="card-img-top img-thumbanail d-flex mt-2 mb-2 cart-image-width "
                              alt="..."
                            />
                          </div>
                          <div className="container d-flex flex-column flex-xl-row flex-sm-column flex-xs-column  flex-sm-column flex-lg-column ">
                            <div className="container d-flex text-sm-center text-md-center text-lg-center text-wrap text-center mt-3 ms-2">
                              <Link
                                to={"/SingleProduct/" + item.product.id}
                                className=" card-title   text-decoration-none  d-flex  flex-wrap text-wrap  mukta "
                              >
                                {item.product.title}
                              </Link>
                            </div>
                            <div className="container d-flex flex-row flex-xl-row  ">
                              <div className="d-flex mt-2  container">
                                <p className="  text-wrap secular ">
                                  <Currency price={item.product.price} />
                                </p>
                              </div>

                              <div className=" container d-flex flex-wrap justify-content-center flex-column ">
                                <div className="  d-flex flex-column">
                                  <div className="d-flex flex-row">
                                    <button
                                      type="button"
                                      className=" btn btn-sm btn-outline-warning me-2"
                                      onClick={() =>
                                        decreaseQuantity(item.product.id)
                                      }
                                      disabled={item.quantity === 1}
                                    >
                                      -
                                    </button>

                                    <span className="mt-1">
                                      {item.quantity}
                                    </span>

                                    <button
                                      type="button"
                                      className="button btn btn-sm btn-outline-success ms-2"
                                      onClick={() =>
                                        increaseQuantity(item.product.id)
                                      }
                                    >
                                      +
                                    </button>
                                  </div>
                                  <div className="d-flex">
                                    <button
                                      type="button"
                                      className="btn btn-outline-danger btn-sm mt-2 ms-2"
                                      onClick={() =>
                                        removeFromCart(item.product.id)
                                      }
                                    >
                                      Remove
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                ))}
              </div>

              {/* Respomsive done */}
              <div className="container mt-4 ms-1  d-flex flex-column border border-dark-subtle border-5 rounded-4">
                <h2 className="mt-2 mb-2">Payment Summary</h2>

                <div className="d-flex justify-content-between ">
                  <p className="text-start">Subtotal :</p>
                  <p className="text-start me-5">
                    <Currency price={cartTotal()} />
                  </p>
                </div>

                <div className=" d-flex  justify-content-between">
                  <p className="text-start">Shipping Fess : </p>
                  <p className="text-start me-5">
                    <Currency price={ShippingFee} />
                  </p>
                </div>
                <div className=" d-flex justify-content-between">
                  <p className="text-start">Total :</p>
                  <p className="text-start me-5">
                    <Currency price={cartTotal() + ShippingFee} />
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div className="container d-flex mt-3  justify-content-center text-start shadow-lg p-3 mb-5 bg-body-tertiary rounded">
              <p className="text-start  d-flex">
                {" "}
                Cart is Empty! Add some{" "}
                <Link
                  to="/Product"
                  className="text-decoration-none ms-1 text-dark"
                >
                  Products
                </Link>{" "}
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;
