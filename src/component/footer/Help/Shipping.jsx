import React from "react";

const Shipping = () => {
  return (
    <>
      <div className="container  d-flex flex-wrap mt-5 ">
        <div className="container d-flex mt-3 border border-3 rounded-4 flex-column">
          <h2 className="container d-flex mt-2 fw-bold text-decoration-underline">
            Shipping
          </h2>
          <h3 className="d-flex mt-1 fw-semibold ">
            What are the delivery charges?
          </h3>
          <p className="fw-normal ">
            Delivery charge varies with each Seller. Sellers incur relatively
            higher shipping costs on low value items. In such cases, charging a
            nominal delivery charge helps them offset logistics costs. Please
            check your order summary to understand the delivery charges for
            individual products. For Products listed as One Piece Plus, a Rs 40
            charge for delivery per item may be applied if the order value is
            less than Rs 500. While, orders of Rs 500 or above are delivered
            free.
          </p>

          <h3 className="d-flex mt-1 fw-semibold ">
            What is the estimated delivery time?
          </h3>
          <p className="fw-normal ">
            Sellers generally procure and ship the items within the time
            specified on the product page. Business days exclude public holidays
            and Sundays.
          </p>
          <p className="fw-normal ">
            Estimated delivery time depends on the following factors:
            <li>The Seller offering the product</li>
            <li>Product's availability with the Seller</li>
            <li>
              The destination to which you want the order shipped to and
              location of the Seller.
            </li>
          </p>
        </div>
      </div>
    </>
  );
};

export default Shipping;
