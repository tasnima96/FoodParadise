import React, { useState } from "react";
import {useStripe, useElements, CardElement} from '@stripe/react-stripe-js';

const SimpleCardForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const [paymentError, setPaymentError] = useState('');

  const handleSubmit = async (event) => {
    // We don't want to let default form submission happen here,
    // which would refresh the page.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }


    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of 
    // each type of element.

    const cardElement = elements.getElement(CardElement);

    // Use your card Element with other Stripe.js APIs

    const {error, paymentMethod} = await stripe.createPaymentMethod({
        type: 'card',
        card: cardElement,
    });

    if (error) {
      // console.log('[error]', error);
      setPaymentError(error.message);
    } else {
        console.log('[PaymentMethod]', paymentMethod);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <CardElement />
        <button type="submit" disabled={!stripe}>Submit</button>
      </form>
      {paymentError && <p style={{color: 'red'}}>{paymentError}</p>}
    </div>
  )
};

export default SimpleCardForm;