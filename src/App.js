import React, { useState } from 'react';
import Header from "./Header";
import "./App.css";
import Nav from './Nav';
import Item from './Item'
import Cart from './Cart'


function App() {
  const [items, setItems] = useState([
    {name: 'item 1 name',description:'item description',price:19.99},
    {name: 'item 2 name',description:'item description',price:19.99},
    {name: 'item 3 name',description:'item description',price:19.99},
    {name: 'item 4 name',description:'item description',price:19.99},
    {name: 'item 5 name',description:'item description',price:19.99},
  ])
  const [count,setCount] = useState(0);
  const [total,setTotal] = useState(0);
  
  const increment = () =>{
    setCount(count +1);
  }
  function calculate(price){
    setTotal(total + price);
  }

  return (
    <div>    
      <Header/>
      <Nav/>
      <Cart count={count}/>
      {items.map(item => (
        <Item name={item.name} description={item.description} price={item.price}setCount={increment}/>
      ))}
      
    </div>

  );
}

export default App;
