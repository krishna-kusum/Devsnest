import React from 'react';
import { useSelector } from 'react-redux';

function ProductComponent() {
  const products = useSelector(state => state.allProducts.products);
  console.log(products);

  const renderList = products.map(product => {
    const { id, title, category, image, price } = product;
    return (
      <div className="four column wide" key = {id}>
        <div className="ui link cards">
          <div className="card">
            <div className="image" >
              <img src={image} alt = {title}/>
            </div>
            <div className="content">
              <div className="header">{title}</div>
              <div className="meta price">${price}</div>
              <div className="meta">{category}</div>
            </div>
          </div>
        </div>
      </div>
    );
  });

  return <> { renderList}</>;
}

export default ProductComponent;

// <div className="four column wide">
//   {/* <h1>ProductComponent</h1> */}
//   <div className="ui link cards">
//     <div className="card">
//       <div className="image"></div>
//       <div className="content">
//         <div className="header">{title}</div>
//       </div>
//     </div>
//   </div>
// </div>
