import React from 'react';

function ControllerMenu() {
	window.addEventListener("deviceorientation", handleOrientation, true);
	function handleOrientation(event){
		console.log(event);
	}
  return (
    <div className="App">
    	Controller
    </div>
  );
}

export default ControllerMenu;
