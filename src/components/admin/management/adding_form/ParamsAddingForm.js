import React, { Component } from 'react';

class ParamsAddingForm extends Component {

	constructor(){
		super();
		this.state = {
			data: ["1", "2"]
		}
	}

	render() {
		let a;
		let params = [];
		console.log(this.props.numberOfParams);
		for (var i = 0; i < this.props.numberOfParams; i++) {
			params.push(
				<Param/>
			);
		}
		return (<div>
			{this.state.data.map((element, index) =>  <p key={index}>{element}</p>)
			}
		</div>);
	}

}

export default ParamsAddingForm;