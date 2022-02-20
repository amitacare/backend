import React, { useContext } from "react";
import { CartContext } from "../context/cart";
//import { FiChevronUp } from "react-icons/fi";
//import { FiChevronDown } from "react-icons/fi";
import { Link, useHistory } from "react-router-dom";
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const Cart = () => {
  const history = useHistory();
  const { cart, total, increaseAmount, decreaseAmount } = useContext(CartContext);

  
  return (
    <section className="cart">
      {(!cart.length) ?
     <h3 style={{marginBottom:50}}>Empty Cart</h3>:
    <>
      <header>
        <h2>My Cart</h2>
      </header>
      <div className="cart-wrapper">
        {cart.map(({ id, title, price, image, amount }) => (
          <article key={id} className="cart-item">
            <div className="image" style={{width:'40%'}}>
              <img src={image} alt="cart item" />
            </div>
            <div className="details">
              <p>{title}</p>
              <p>&#8377; {price}</p>
            </div>
            <div className="amount">
              <button className="btn" style={{width:60,height:40,padding:5,paddingTop:-5,fontSize:25}} onClick={() => increaseAmount(id)}><ArrowDropUpIcon fontSize='inherit'/></button>
              <p>{amount}</p>
              <button className="btn" style={{width:60,height:40,padding:5,paddingTop:-5,fontSize:25}} onClick={() => decreaseAmount(id, amount)}><ArrowDropDownIcon fontSize='inherit' /></button>
            </div>
          </article>
        ))}
      </div>
      <div>
        <h3>Total: &#8377; {total}</h3>
      </div>
      <div style={{marginBottom:50}}>
        <button className="btn" onClick={() => history.push("/backend/checkout")}
        >Checkout</button>
      </div>
      </>
      }
      <Link to={'/backend/orders'} className="btn" style={{borderRadius:20,backgroundColor:'#650a8c'}}>View Previous Orders</Link>
    </section>
  );
};

export default Cart;
