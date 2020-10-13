import React from 'react';
import ReactDOM from 'react-dom';

function ControllerMenu() {
	window.addEventListener("deviceorientation", handleOrientation, true);
	function handleOrientation(event){
		ReactDOM.render(<div>{event.alpha}</div>, document.getElementById('ControllerMenu'))
	}
  return (
    <div id="ControllerMenu">
    	Controller
    </div>
  );
}

export default ControllerMenu;
