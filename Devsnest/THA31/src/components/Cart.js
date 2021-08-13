import React from 'react';
import { useSelector } from 'react-redux';

function Cart() {
  const products = useSelector(state => state.cartProducts.products);

  const renderList = products.map(product => {
    const { id, title, category, image, price } = product;
    return (
      <div className="four column wide" key={id}>
        {/* <Link to = {`/product/${id}`} >  */}
        <div className="ui link cards">
          <div className="card">
            {/* <div className="image" >
              <img src={image} alt = {title}/>
            </div> */}
            <div className="content">
              <div className="header">{title}</div>
              <div className="meta price">${price}</div>
              <div className="meta">{category}</div>
            </div>
          </div>
        </div>
        {/* </Link> */}
      </div>
    );
  });

  return (
    <div>
      {/* Cart */}
      <div className="ui grid four column stackable container">
        {renderList}
      </div>
    </div>
  );
}

export default Cart;
