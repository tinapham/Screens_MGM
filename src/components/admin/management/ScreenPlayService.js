import axios from 'axios';

export const url = "http://localhost:9090/";

export function getAllScreenPlayData(){
	axios.get(url+"api/screensplay/all")
}

export function handleScreenPlayData(data){
	var output = [];
	for(var i=0; i<data.length; i++){
		var temp = JSON.parse(data[i]);
		var screenPlay = {
			id: temp.id,
			name: temp.name,
			"display-time": temp["display-time"],
			"screen-apps": handleScreenAppsData(temp["screen-apps"])
		}
		output.push(screenPlay);
	}
	return output;
}

function handleScreenAppsData(data){
	var output = [];
	for(var i=0; i<data.length; i++){
		var temp = JSON.parse(data[i]);
		var screenApp = {
			type: temp.type,
			"animation-type": temp["animation-type"],
			params: temp.params
		}
		output.push(screenApp);
	}
	return output;
}