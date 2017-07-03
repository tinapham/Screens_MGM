import React, { Component }  from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import AdminManagement from './management/AdminManagement.js';
import ScreenPlayAddingForm from './management/adding_form/ScreenPlayAddingForm.js';


class Admin extends Component {

	render(){
		let addScreenPlayURL = this.props.match.url + "/addscreenplay";
		return(
			<Router>
				<Switch>
					<Route path={addScreenPlayURL} component={ScreenPlayAddingForm}/>
					<Route exact path={this.props.match.url} component={AdminManagement}/>
					{/*<Route exact path={`${match.url}/login`} component={Admin}/>*/}
				</Switch>
			</Router>
		);
	}
}

export default Admin;