import React from 'react';
import { Link } from 'react-router-dom';
import Cart from './Cart'


function Header() {
  return (
    <div className="ui fix menu">
      <div className="ui container center flex">
        <Link to="/">
          <h1>Welcome Store</h1>
        </Link>
      </div>
      <div className="center " style={{ justifySelf: 'center' }}>
        <Link to="/cart">
          <h3>Cart</h3>
        </Link>
      </div>
    </div>
  );
}

export default Header;
