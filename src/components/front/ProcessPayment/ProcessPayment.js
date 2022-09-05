import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import SimpleCardForm from "./SimpleCardForm";
import SplitCardForm from "./SplitCardForm";


const stripePromise = loadStripe(
  "pk_test_51LIFyrKunCviNeUKm7rX9jehhEYdyyaVXFBXsXI0WoLeaFY5wxdDKlFbtV3oFuSNivAmYyVMGfdzdMSOiN9LCUP400yE58DkbZ"
);

const ProcessPayment = () => {
  // const options = {
  //     // passing the client secret obtained from the server
  //     clientSecret: '{{CLIENT_SECRET}}',
  //   };

  return (
    <Elements stripe={stripePromise}>
        <SplitCardForm />
        {/* <SimpleCardForm /> */}
    </Elements>
  );
};

export default ProcessPayment;
