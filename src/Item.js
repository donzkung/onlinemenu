import React from 'react';

function Item({name,description,price,setCount}) {
  return (
    <div className="item">
    <h2>{name}</h2>
    <h3>{description}</h3>
    <h3>{price}</h3>
    <button onClick={setCount}>Add to cart</button>
    </div>
  );
}

export default Item;
