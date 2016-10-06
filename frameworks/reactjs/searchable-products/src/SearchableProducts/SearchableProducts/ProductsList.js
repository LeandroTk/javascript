import React, { Component } from 'react';
import ProductCategoryRow from './ProductCategoryRow';
import ProductRow from './ProductRow';

export default class ProductsList extends Component {
	_groupBy(products , iterator) {
	  var groups = {};

	  products.forEach(function(product) {
	    const category = JSON.stringify(iterator(product));
	    groups[category] = groups[category] || [];
	    groups[category].push(product);
	  });

	  return groups;
	}

	render() {		
		var result = this._groupBy(this.props.products, function(product) {
		  return product.category;
		});

		var productsTables = [];

		Object.keys(result).forEach((category) => {
		  let filteredProducts = result[category].map((product) => {
		  	if (product.name.toUpperCase().indexOf(this.props.filterText.toUpperCase()) > -1) {
		  		return product;
		  	}
		  });

		  if (filteredProducts.length > 0) {
		  	productsTables.push(<ProductCategoryRow category={category} key={category} />);
		  }

			filteredProducts.forEach((filteredProduct) => {				
				productsTables.push(<ProductRow product={filteredProduct} key={filteredProduct.name} />);
			})		  
		});

		return (
			<table>
				<tbody>{productsTables}</tbody>
			</table>
		);
	}	
}
