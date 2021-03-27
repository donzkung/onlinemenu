import React from 'react';
import Header from "./Header";
import "./App.css";
import Nav from './Nav';
import Item from './Item'


function App() {
  return (
    <div>    
      <Header/>
      <Nav/>
      <Item name="he" description="cool"/>
    </div>

  );
}

export default App;
