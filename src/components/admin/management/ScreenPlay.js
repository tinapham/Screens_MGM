import React, { Component }  from 'react';

class ScreenPlay extends Component{

	render(){
		return(
			<tr>
			        <td>{this.props.index}</td>
			        <td>{this.props.data.name}</td>
			        <td>{this.props.data["display-time"]}</td>
			        <td>{this.props.data["screen-apps"].map(function(screenApp, index){
			        	return <p key={index}>{screenApp.type}</p>
			        })}</td>
			        <td><span className="icon-action-size"><i className="fa fa-pencil-square"></i> <i className="fa fa-trash"></i></span></td>
			</tr>
		);
	}
}

export default ScreenPlay;