import React, { Component } from 'react';

export default class SearchProducts extends Component {
	constructor(props) {
		super(props);
		this.updateInputValue = this.updateInputValue.bind(this);
	}

	updateInputValue(e) {
		this.setState({ filterText: e.target.value });
	}

	render() {
		return (
			<form>
				<input 
					type="text" 
					placeholder="Enter product" 
					defaultValue={this.props.filterText} 
					onChange={this.updateInputValue}
				/>
			</form>
		);
	}
};