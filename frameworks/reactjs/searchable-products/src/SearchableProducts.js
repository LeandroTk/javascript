import React, { Component } from 'react';
import './SearchableProducts.css';
import SearchProducts from './SearchableProducts/SearchProducts';
import ProductsList from './SearchableProducts/ProductsList';

export default class SearchableProducts extends Component {
  render() {
    return (
      <div className="SearchableProducts">
        <SearchProducts />
        <ProductsList />
      </div>
    );
  }  
}