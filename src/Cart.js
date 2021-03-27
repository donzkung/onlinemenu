import React from 'react';
import { Link } from 'react-router-dom';
function Count({count,total}) {
  return (
    <div className="cart">
      <h2>Table# 1</h2>
    <h2>Item in the cart : {count}</h2>
    <Link to ="/cartview"><h2>View Cart</h2></Link>
    </div>
  );
}

export default Count;
