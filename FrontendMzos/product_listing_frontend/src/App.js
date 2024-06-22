import React from 'react';
import './App.css';
import AddProduct from './component/AddProduct';
import ProductList from './component/ProductList';

function App() {
  return (
    <div className="App">
      <h1>Product Management App</h1>
      <AddProduct />
      <hr />
      <ProductList />
    </div>
  );
}

export default App;
