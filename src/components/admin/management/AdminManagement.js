import React, { Component }  from 'react';
import './AdminManagement.css';
import { url, getAllScreenPlayData, handleScreenPlayData } from './ScreenPlayService.js';
import ScreenPlay from './ScreenPlay.js'
import ModalConfigScreenPlay from './ModalConfigScreenPlay.js';
import axios from 'axios';

class AdminManagement extends Component{


	constructor(){
		super();

		this.state = {
			display: false,
			data: []
		};
		this.showModalConfig = this.showModalConfig.bind(this);
	}

	componentDidMount(){
		this.fetchData();
	}

	fetchData(){
		axios.get(url+"api/screensplay/all").then(response => {
			var data = handleScreenPlayData(response.data);
			this.setState({data: data})
		})
	}

	showModalConfig(){
		this.setState({display: true});
	}


	render(){
		return(
			<div className="container">
				<div className="row">
					<h1 className="screenplay-title">ScreenPlay Management</h1>
				</div>
				<div className="row">
					<div className="col-md-12">
						<button type="button" className="btn btn-primary pull-right" onClick={this.showModalConfig}>Add new screenplay</button>
					</div>
				</div>
				<div className="table-responsive">
					<table className="table table-hover">
						<thead>
					      <tr>
					        <th>#</th>
					        <th>Name</th>
					        <th>Display Time</th>
					        <th>ScreenApps</th>
					        <th>Action</th>
					      </tr>
					    </thead>
					    <tbody>
					    	{this.state.data.map((element, index) => <ScreenPlay key={index} data={element} index={index+1}/>)}
					    </tbody>
					</table>
				</div>
				<ModalConfigScreenPlay display={this.state.display}/>
			</div>
		);
	}
}

export default AdminManagement;