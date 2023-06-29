import React from "react";

const Payments = () => {
  return (
    <>
      <div className="container  d-flex flex-wrap mt-5 ">
        <div className="container d-flex mt-3 border border-3 rounded-4 flex-column">
          <h2 className="container d-flex mt-2 fw-bold text-decoration-underline">
            Payments
          </h2>
          <h3 className="d-flex mt-1 fw-semibold ">
            How do I pay for a product purchase?
          </h3>
          <p className="fw-normal ">
            One Piece Store offers you multiple payment methods. Whatever your
            online mode of payment, you can rest assured that One Piece Store's
            trusted payment gateway partners use secure encryption technology to
            keep your transaction details confidential at all times. You may use
            Internet Banking, Gift Card, Cash on Delivery and Wallet to make
            your purchase. One Piece Store also accepts payments made using
            Visa, MasterCard, Maestro and American Express credit/debit cards in
            India and 21 other countries.
          </p>

          <h3 className="d-flex mt-1 fw-semibold ">
            What is Cash on Delivery?
          </h3>
          <p className="fw-normal ">
            If you are not comfortable making an online payment , you can opt
            for the Cash on Delivery (C-o-D) payment method instead. With C-o-D
            you can pay in cash at the time of actual delivery of the product at
            your doorstep, without requiring you to make any advance payment
            online.
          </p>
          <p className="fw-normal ">
            The maximum order value for a Cash on Delivery (C-o-D) payment is
            ₹50,000. It is strictly a cash-only payment method. Gift Cards or
            store credit cannot be used for C-o-D orders. Foreign currency
            cannot be used to make a C-o-D payment. Only Indian Rupees accepted.
          </p>
        </div>
      </div>
    </>
  );
};

export default Payments;
