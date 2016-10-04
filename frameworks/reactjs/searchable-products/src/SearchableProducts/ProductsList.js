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
		var self = this;

		Object.keys(result).forEach(function(category) {
		  productsTables.push(<ProductCategoryRow category={category} key={category} />);

		  result[category].forEach(function(product) {
		  	if (product.name.indexOf(self.props.filterText) !== -1) {
		  		productsTables.push(<ProductRow product={product} key={product.name} />);
		  	}
		  });
		});

		return (
			<table>
				<tbody>{productsTables}</tbody>
			</table>
		);
	}	
}