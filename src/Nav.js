import React from 'react';
import { Link } from 'react-router-dom';
function Nav() {
  return (
    <div className="header">
    <Link to="/"><h2>Menu</h2></Link>
    </div>
  );
}

export default Nav;
