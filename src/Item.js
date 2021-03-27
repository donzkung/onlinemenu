import React from 'react';

function Item({name,description}) {
  return (
    <div className="item">
    <h2>{name}</h2>
    <h3>{description}</h3>
    <button>Add to cart</button>
    </div>
  );
}

export default Item;
