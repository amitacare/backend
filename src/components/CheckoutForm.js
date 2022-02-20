import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import { BookContext } from "../context/books";
import { CartContext } from "../context/cart";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";

const CARD_ELEMENT_OPTIONS = {
  style: {
    base: {
      color: "#32325d",
      fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
      fontSmoothing: "antialiased",
      fontSize: "16px",
      "::placeholder": {
        color: "#aab7c4"
      }
    },
    invalid: {
      color: "#fa755a",
      iconColor: "#fa755a"
    }
  }
};

const CheckoutForm = () => {
  const { cart, total, clearCart } = useContext(CartContext);
  const { checkout } = useContext(BookContext);
  const [orderDetails, setOrderDetails] = useState({ cart, total, address: null, token: null });
  const [error, setError] = useState(null);
  const stripe = useStripe();
  const elements = useElements();
  const history = useHistory();
  const [submit,setSubmit]=useState(false)

  useEffect(() => {
    const fetch=()=>{
    if (orderDetails.token) {
       checkout(orderDetails).then(function(result){
        // do something with result
        console.log(result)
        if (result)
        {
          clearCart();
          history.push("/backend/checkout/success");
        }
        else{
          history.push("/backend/checkout/failed");
        }
     });
      
      //console.log(c.PromiseResult,c)
      //history.push("/");
    }
  }
  fetch()
  
  }, [orderDetails]);

  // Handle real-time validation errors from the card Element.
  const handleChange = (event) => {
    if (event.error) {
      setError(event.error.message);
    } else {
      setError(null);
    }
  };

  // Handle form submission.
  const handleSubmit = async (event) => {
    event.preventDefault();
    
    const card = elements.getElement(CardElement);
    
    const result = await stripe.createToken(card);
    setSubmit(true)
    if (result.error) {
      // Inform the user if there was an error.
      setError(result.error.message);
    } else {
      setError(null);
      // Send the token to your server.
      const token = result.token;
      setOrderDetails({ ...orderDetails, token: token.id });
      
    }
  };

  return (
    <>
    { submit ? 
      <>
      
{/* font-size to set the width and height of box (default is 100px),
--duration to set the animation duration (default is 1s),
--num-dot to set the number total of dot (default is 10) */}
<div className="bodyloading " style={{width:'100%',}}> 
Your Payment is under Process...
<div className="loading " style={{marginTop:-250}}>
 {/*  index start from 0   */}
  <div className="index0"></div>
  <div className="index1"></div>
  <div className="index2"></div>
  <div className="index3"></div>
  <div className="index4"></div>
  <div className="index5"></div>
  <div className="index6"></div>
  <div className="index7"></div>
  <div className="index8"></div>
  <div className="index9"></div>

{/*  index ended with (var(--num-dot) - 1)   */}
</div>
</div>
      </>
      :
    <form onSubmit={handleSubmit} className="checkout-wrapper">
      <h2>Time to Checkout?</h2>
      <div className="checkout-form">
        <label htmlFor="checkout-address">Shipping Address</label>
        <input
          id="checkout-address"
          type="text"
          onChange={(e) => setOrderDetails({ ...orderDetails, address: e.target.value })}
        />
        <div className="stripe-section">
          <label htmlFor="stripe-element"> Credit or debit card </label>
          <CardElement id="stripe-element" options={CARD_ELEMENT_OPTIONS} onChange={handleChange} />
        </div>
        <div className="card-errors" role="alert">
          {error}
        </div>
      </div>
      <button type="submit" className="btn">
        Submit Payment
      </button>
    </form>
    }
    </>
  );
    
};

export default CheckoutForm;
