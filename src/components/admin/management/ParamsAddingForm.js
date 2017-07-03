import React, { Component } from 'react';

class ParamsAddingForm extends Component {

	render() {
		let params = [];
		for (var i = 0; i < this.props.numberOfParams; i++) {
			params.push(
				<div className="line">
				<form className="form-horizontal">
					<div className="form-group">
						<label className="control-label col-md-2">Key:</label>
						<div className="col-md-10">
							<input type="text" className="form-control" placeholder="Enter name of param" />
						</div>
					</div>
					<div className="form-group">
						<label className="control-label col-md-2">Value:</label>
						<div className="col-md-10">
							<input type="number" className="form-control" placeholder="Enter value of param" />
						</div>
					</div>
				</form>
			</div>
			);
		}
		return params;
	}

}

export default ParamsAddingForm;