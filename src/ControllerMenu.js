import React from 'react';
import ReactDOM from 'react-dom';

function ControllerMenu() {
	window.addEventListener("deviceorientation", handleOrientation, true);
	function handleOrientation(event){
		ReactDOM.render(<div><p>{event.absolute}</p><p>{event.alpha}</p><p>{event.beta}</p><p>{event.gamma}</p>
			</div>, document.getElementById('ControllerMenu'))
	}
  return (
    <div id="ControllerMenu">
    	Controller
    </div>
  );
}

export default ControllerMenu;
