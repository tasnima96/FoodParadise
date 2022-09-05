import React, { useMemo, useState } from "react";
import {
  useStripe,
  useElements,
  CardNumberElement,
  CardCvcElement,
  CardExpiryElement,
} from "@stripe/react-stripe-js";
import { useNavigate } from "react-router-dom";

// to use it install npm responsive fontsize
// import useResponsiveFontSize from "../../useResponsiveFontSize";

const useOptions = () => {
  //   const fontSize = useResponsiveFontSize();
  const options = useMemo(
    () => ({
      style: {
        base: {
          fontSize: "16px",
          color: "#424770",
          letterSpacing: "0.025em",
          fontFamily: "Source Code Pro, monospace",
          "::placeholder": {
            color: "#aab7c4",
          },
        },
        invalid: {
          color: "#9e2146",
        },
      },
    }),
    []
  );

  return options;
};

const SplitCardForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const options = useOptions();

  const [paymentError, setPaymentError] = useState("");
  const [paymentSuccess, setPaymentSuccess] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    // const payload = await stripe.createPaymentMethod({
    //   type: "card",
    //   card: elements.getElement(CardNumberElement)
    // });

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardNumberElement),
    });

    if (error) {
      // console.log('[error]', error);
      setPaymentError(error.message);
      setPaymentSuccess(null);
    } else {
      setPaymentSuccess(paymentMethod.id);
      handleNext();
      setPaymentError(null);
      //console.log('[PaymentMethod]', paymentMethod);
    }
    // console.log("[PaymentMethod]", payload);
  };

  const navigate = useNavigate();
  const handleNext = () => {
  navigate('/ordersuccess/');
}

  return (
    <div className="checkout-container">
      <form onSubmit={handleSubmit}>
        <div className="row">
          <label>
            Card number
            <CardNumberElement
              options={options}
              onReady={() => {
                console.log("CardNumberElement [ready]");
              }}
              onChange={(event) => {
                console.log("CardNumberElement [change]", event);
              }}
              onBlur={() => {
                console.log("CardNumberElement [blur]");
              }}
              onFocus={() => {
                console.log("CardNumberElement [focus]");
              }}
            />
          </label>
          <br></br>
          <label>
            Expiration date
            <CardExpiryElement
              options={options}
              onReady={() => {
                console.log("CardNumberElement [ready]");
              }}
              onChange={(event) => {
                console.log("CardNumberElement [change]", event);
              }}
              onBlur={() => {
                console.log("CardNumberElement [blur]");
              }}
              onFocus={() => {
                console.log("CardNumberElement [focus]");
              }}
            />
          </label>
          <br></br>
          <label>
            CVC
            <CardCvcElement
              options={options}
              onReady={() => {
                console.log("CardNumberElement [ready]");
              }}
              onChange={(event) => {
                console.log("CardNumberElement [change]", event);
              }}
              onBlur={() => {
                console.log("CardNumberElement [blur]");
              }}
              onFocus={() => {
                console.log("CardNumberElement [focus]");
              }}
            />
          </label>
        </div>
        <br></br>

        <label>
          <input type="checkbox" name="sameadr" /> Billing address same as Shipping
        </label>
        <br></br>

        <button type="submit" className="submit-btn" disabled={!stripe}>
          Submit
        </button>

        {paymentError && <p style={{ color: "red" }}>{paymentError}</p>}

        {paymentSuccess && (
          <p style={{ color: "green" }}>Payment Successfull. Thank you!</p>
        )}
      </form>
    </div>
  );
};

export default SplitCardForm;
