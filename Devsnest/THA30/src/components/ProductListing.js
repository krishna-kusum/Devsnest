import React, { useEffect } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { setProducts } from '../redux/actions/productActions';
import ProductComponent from './ProductComponent';

function ProductListing() {
  const products = useSelector(state => state);
  // console.log(products);
  const dispatch = useDispatch();

  const fetchProducts = async () => {
    const response = await axios
      .get('https://fakestoreapi.com/products')
      .catch(error => {
        console.log('Error', error);
      });

    // console.log(setProducts(response.data));
    dispatch(setProducts(response.data));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  console.log('Products : ', products);

  return (
    <div className="ui grid four column stackable container">
      <ProductComponent />

      {/* <h1>ProductListing</h1> */}
    </div>
  );
}

export default ProductListing;
