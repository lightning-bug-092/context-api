import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './components/Header';
import Product from './products/Product';
import CartProvider from './products/CartProvider';


import './App.css';
function App() {
  return (
    <CartProvider>
      <Router>
        <div className="App">
          <Header />
          <Switch>
            <Route path="/" exact><h2>Home</h2></Route>
            <Route path="/product" exact><Product /></Route>
            <Route path="/cart" exact>Cart</Route>
          </Switch>
        </div>
      </Router>
    </CartProvider>
    
  );
}

export default App;
