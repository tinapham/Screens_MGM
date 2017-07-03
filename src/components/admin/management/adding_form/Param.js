import React, { Component } from 'react';
import Param from './Param.js';

class Param extends Component {
    render() {
        return(
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
}

export default Param;