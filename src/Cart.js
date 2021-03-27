import React from 'react';
import { Link } from 'react-router-dom';
function Count({count,total}) {
  return (
    <div className="cart">
      <h2>Table# 1</h2>
    <h2>Item in the cart : {count}</h2>
    <a href ="test.html"><h2>View Cart</h2></a>
    </div>
  );
}

export default Count;
