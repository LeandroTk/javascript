import React, { Component } from 'react';

export default class ProductCategoryRow extends Component {
	render() {
		return (
			<tr><th>{this.props.category}</th></tr>
		);
	}
}