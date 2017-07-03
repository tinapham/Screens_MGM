import React, { Component }  from 'react';
import ParamsAddingForm from './ParamsAddingForm.js';

class ScreenPlayAddingForm extends Component{

	constructor(){
		super();
		this.state = {
			appLength: 0
		}
		//this.setAppLength = this.setAppLength.bind(this);
	}

	setAppLength(num){
		// /this.setState({appLength: num})
		console.log(num);
	}

	componentDidMount(){
	}

	render(){
		let amount;
		return(
			<div className="container">
				<div className="row">
					<div className="col-md-12 text-center">
						<h1>Add New ScreenPlay </h1>
					</div>
				</div>
				<div className="row">
					<div className="col-md-12 text-center">
						<form className="form-horizontal">
							<div className="form-group">
							    <label className="control-label col-md-2">Name:</label>
							    <div className="col-md-10">
							      <input type="text" className="form-control" placeholder="Enter name"/>
							    </div>
							</div>
							<div className="form-group">
							    <label className="control-label col-md-2">Display Time:</label>
							    <div className="col-md-10">
							      <input type="number" className="form-control" placeholder="Enter Display Time (second)"/>
							    </div>
							</div>
							<div className="form-group">
							    <label className="control-label col-md-2">Screen Apps:</label>
							    <div className="col-md-8">
							      <input type="number" className="form-control" ref={num => {amount = num}} placeholder="Enter Amount of ScreenApps "/>
							    </div>
							    <div className="col-md-2">
							      <button className="btn btn-primary" onClick={() => {this.setAppLength(amount.value)}}>Create</button>
							    </div>
							</div>
							<ParamsAddingForm numberOfParams={3} />
						</form>
					</div>
				</div>
			</div>
		);
	}

}

export default ScreenPlayAddingForm;