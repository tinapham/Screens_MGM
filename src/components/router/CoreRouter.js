import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import App from '../app/App.js';
import Admin from '../admin/Admin.js';

class CoreRouter extends Component{

	render(){
		return(
			<Router>
				<Switch>
					<Route exact path="/" component={App}/>
					<Route path="/admin" component={Admin}/>
				</Switch>
			</Router>
		);
	}
}

export default CoreRouter;