import React from "react";
// import FeatureProduct from './featureProduct';
import "./Home.css";

import { useNavigate } from "react-router-dom";

import shopping from "../../images/shopping.jpg";

import product1 from "../../images/prdct1.jpg";
import product2 from "../../images/prdct2.jpg";
import product3 from "../../images/prdct3.jpg";

import cl1 from "../../images/caffeine.png";
import cl2 from "../../images/unity.png";
import cl3 from "../../images/beats-pill.png";
import cl4 from "../../images/astrazeneca.png";
import cl5 from "../../images/ati.png";

import securepayment from "../../images/payment-protection.png";
import givemoney from "../../images/give-money.png";
import op from "../../images/online-payment.png";
import freeshipping from "../../images/free-shipping.png";

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      {/* This section is for "Welcome to our....." */}
      <section>
        {/* <div className="container d-flex flex-wrap mt-5 mb-5 flex-column ">
          <div className="container d-flex mt-5 mb-5 flex-row ">
            <div className="container">
              <div className="container d-flex mb-5 flex-row text-wrap">
                <div className=" container d-flex word-wrap flex-column ">
                  <h4 className="mt-3 fs-2">Welcome to our</h4>

                  <p className=" fs-1 fst-italic fw-bold">Ecommerce store</p>
                  <p className="text-start ">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Fuga ab quos nihil porro expedita provident sint molestias
                    repudiandae! Necessitatibus vitae mollitia molestias
                    excepturi qui sequi obcaecati omnis, at fugiat quos dolores
                    dicta officia et?
                  </p>
                </div>
              </div>
              <div className="container d-flex section-1-text">
                <img
                  src={shopping}
                  className="img-fluid object-fit-fill border rounded "
                  alt=""
                />
              </div>
            </div>
          </div>
        </div> */}
        <div className="container d-flex  mt-5">
          <div className=" mt-5 d-lg-flex  flex-row w-100 mt-5">
            <div className=" container d-flex word-wrap flex-column  ">
              <h4 className="mt-3 fs-2 poppins">Welcome to our</h4>

              <p className=" fs-1 fst-italic fw-bold">One Piece Store</p>
              <p className="text-start roboto">
                Our Store provide branded quality clothes for both mens and
                womens. Top companies product available at cheap price only on
                our store. We had patrnship with more than 100+ companies.Always
                trying to deliver items before time. Our delivery partners workd
                24*7 for making the delivery on time.
              </p>
            </div>
            <div className="container  d-flex flex-row ">
              <img
                src={shopping}
                className="img-fluid object-fit-fill border rounded-4 mb-3"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>

      {/* THis section for Our products */}

      <div className="container d-flex flex-wrap  mt-2 mb-3 justify-content-center  border border-3 rounded-4 ">
        <p className=" container text-center fs-2 fw-bold text-decoration-underline">
          Our Products
        </p>
        <div className="container d-flex flex-wrap justify-content-evenly justify-content-md-between align-items-center mb-3 ">
          <div className="card card-w align-items-center   border-0">
            <img
              src={product1}
              className="card-img-top  img-fluid home-prdct-img "
              alt="..."
              onClick={() => navigate("/product")}
            />
            <div className="d-flex flex-wrap justify-content-center text-center mukta">
              BIYLACLESEN Jackets
            </div>
          </div>
          <div className="card card-w  align-items-center mt-2 ms-2 border-0">
            <img
              src={product2}
              className="card-img-top img-fluid home-prdct-img"
              alt="..."
              onClick={() => navigate("/product")}
            />
            <div className="d-flex flex-wrap justify-content-center text-center mukta">
              Monitor's
            </div>
          </div>
          <div className="card card-w  align-items-center mt-2 ms-2 border-0">
            <img
              src={product3}
              className="card-img-top img-fluid home-prdct-img"
              alt="..."
              onClick={() => navigate("/product")}
            />
            <div className="d-flex flex-wrap justify-content-center text-center mukta">
              SanDisk SSD
            </div>
          </div>
        </div>
      </div>

      {/* This sectioon is for our services */}
      <section>
        <div className=" d-flex  flex-wrap mt-3 section1 flex-column justify-content-center align-items-md-center">
          <div className=" mt-3 mb-3  text-center flex-column">
            <h4>Our Services</h4>
          </div>

          <div className="d-flex flex-wrap justify-content-center text-center">
            <div className="d-flex ">
              <figure className="figure  me-5 ">
                <img
                  src={freeshipping}
                  className="figure-img img-fluid rounded icon-width  truck"
                  alt="..."
                />
                <figcaption className="figure-caption d-flex flex-wrap josef ">
                  Free Shipping
                </figcaption>
              </figure>
            </div>

            <div className="d-flex">
              <figure className="figure  me-5">
                <img
                  src={op}
                  className="figure-img img-fluid rounded icon-width  rotate"
                  alt="..."
                />
                <figcaption className="figure-caption d-flex flex-wrap josef">
                  Card Payment
                </figcaption>
              </figure>
            </div>

            <div className="d-flex ">
              <figure className="figure  me-5">
                <img
                  src={givemoney}
                  className="figure-img img-fluid rounded icon-width  money"
                  alt="..."
                />
                <figcaption className="figure-caption d-flex flex-wrap josef">
                  Money Refund Policy
                </figcaption>
              </figure>
            </div>

            <div className="d-flex  ">
              <figure className="figure  me-5">
                <img
                  src={securepayment}
                  className="figure-img img-fluid rounded icon-width payment ms-4 "
                  alt="..."
                />
                <figcaption className="figure-caption d-flex flex-wrap text-center">
                  Payment Protection
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>

      {/* This section is for Trusted company */}

      <section>
        <div className="  d-flex flex-wrap mt-3 flex-column justify-content-center  align-items-md-center section1">
          <div className=" mt-3 mb-3 text-center">
            <h4>Trusted by 100+ companies</h4>
          </div>

          <div className=" d-flex position-relative text-center flex-wrap justify-content-center ">
            <div className="d-flex ">
              <figure className="figure text-center me-5">
                <img
                  src={cl1}
                  className="figure-img img-fluid rounded icon-width rotate"
                  alt="..."
                />
                <figcaption className="figure-caption d-flex flex-wrap josef">
                  EZB
                </figcaption>
              </figure>
            </div>
            <div className="d-flex ">
              <figure className="figure   me-5">
                <img
                  src={cl2}
                  className="figure-img img-fluid rounded icon-width rotate  "
                  alt="..."
                />
                <figcaption className="figure-caption d-flex flex-wrap josef">
                  SILLICON
                </figcaption>
              </figure>
            </div>
            <div className="d-flex ">
              <figure className="figure  me-5">
                <img
                  src={cl3}
                  className="figure-img img-fluid rounded icon-width rotateX"
                  alt="..."
                />
                <figcaption className="figure-caption d-flex flex-wrap josef">
                  PATNI
                </figcaption>
              </figure>
            </div>
            <div className="d-flex ">
              <figure className="figure   me-5">
                <img
                  src={cl4}
                  className="figure-img img-fluid rounded icon-width rotate"
                  alt="..."
                />
                <figcaption className="figure-caption d-flex flex-wrap">
                  VISTA
                </figcaption>
              </figure>
            </div>
            <div className="d-flex ">
              <figure className="figure text-center  me-5">
                <img
                  src={cl5}
                  className="figure-img img-fluid rounded icon-width rotate"
                  alt="..."
                />
                <figcaption className="figure-caption d-flexs flex-wrap ">
                  ACE
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
