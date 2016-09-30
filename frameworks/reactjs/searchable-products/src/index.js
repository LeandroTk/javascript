import React from 'react';
import ReactDOM from 'react-dom';
import SearchableProducts from './SearchableProducts';
import { products } from './data/products'
import './index.css';

ReactDOM.render(
  <SearchableProducts products={products} />,
  document.getElementById('root')
);
