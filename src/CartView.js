import React from 'react';
import { Link } from 'react-router-dom';
function CartView() {

  function sendOrder(){
    alert("Please sit tight your food is cooking!");
  }
  function checkOut(){
    alert("Server is comming! your total is $25.98");
  }
  return (
    <div>
    <h2>Item in the cart</h2>
    <h3>Item 1 </h3>
    <h3>Price: $12.99 </h3>

    <h3>Item 2 </h3>
    <h3>Price: $12.99 </h3>

    <h2>Sub total: $25.98</h2>

    <button onClick={sendOrder}>Send order!</button>
    <button onClick={checkOut}>Get the bill</button>
    </div>
  );
}

export default CartView;
