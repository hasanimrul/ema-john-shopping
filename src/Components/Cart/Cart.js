import React from "react";

const Cart = ({cart}) => {
  return (
    <div>
      <h2>Order Summery</h2>
      <h3>Cart Item: {cart.length}</h3>
    </div>
  );
};

export default Cart;
