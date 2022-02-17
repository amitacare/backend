import React from 'react'
//import { Authenticator } from '@aws-amplify/ui-react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from "../components/CheckoutForm";

const Checkout = () => {
    const stripePromise = loadStripe('pk_test_51J6sA8SI2jhom7ITqaqa5Mf40NoYh1WfCnjDZDGbuR2H53yKD6NXDiPuFqurpLlboiNojsQ2emD4GV1rUKAqbrps001NNGr7k6');


    return (
        <section className="checkout-wrapper">
            
                <Elements stripe={stripePromise}>
                    <section>
                        <h2>Time to Checkout?</h2>
                        <CheckoutForm />
                    </section>
                </Elements>
            
        </section>
    )
}

export default Checkout
