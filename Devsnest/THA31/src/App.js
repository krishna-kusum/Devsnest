import React from 'react';
import './style.css';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import store from './redux/store';
import Header from './components/Header';
import ProductDetail from './components/ProductDetail';
import ProductListing from './components/ProductListing';
import Cart from './components/Cart'

export default function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <Header />
          <Switch>
            <Route exact path="/" component={ProductListing} />
            <Route exact path="/product/:productId" component={ProductDetail} />
            <Route exact path="/cart" component={Cart} />
            <Route> Error 404 Not Found</Route>
            {/* <Route exact path = "/" component = {ProductListing}/> */}
          </Switch>
        </Router>
      </div>
    </Provider>
  );
}
