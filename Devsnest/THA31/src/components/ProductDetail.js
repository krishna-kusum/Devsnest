import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { selectedProduct, removeSelectedProduct,loadProductToCart } from '../redux/actions/productActions';

function ProductDetail() {
  const { productId } = useParams();
  console.log(productId);

  const dispatch = useDispatch();

  const product = useSelector(state => state.product);
  console.log(product);

  const {image, title, price, category,description} = product;

  const fetchProductDetail = async () => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .catch(error => console.log(error));

    dispatch(selectedProduct(response.data));
  };

  useEffect(() => {
    if (productId && productId !== '') fetchProductDetail();

    return ()=> {
      dispatch(removeSelectedProduct())
    }
  }, [productId]);
  return (
    <div>
      {/* <h1>ProductDetail</h1> */}
      <div className="ui grid container">
        {Object.keys(product).length === 0 ? (
          <div>...Loading</div>
        ) : (
          <div className="ui placeholder segment">
            <div className="ui two column stackable center aligned grid">
              <div className="ui vertical divider">AND</div>
              <div className="middle aligned row">
                <div className="column lp">
                  <img src="{image}" alt="" className="ui fluid image" />
                </div>
                <div className="column rp">
                  <h1 className="">{title}</h1>
                  <h2>
                    <a href="" className="ui teal tag label">${price}</a>
                  </h2>
                  <h3 className="ui brown block header">{category}</h3>
                  <p>{description}</p>
                  <div className = "ui vertical animated button" tabIndex = "0">
                    <div className="hidden content">
                      <i className = "shop icon"></i>
                    </div>
                    <div className="visible content" onClick = {()=> {
                      dispatch(loadProductToCart(product))
                    }}>Add To Cart</div>
                    </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductDetail;
