import React from 'react';
import ReactDOM from 'react-dom';

function ControllerMenu() {
	const params = window.location.search;
	const vparams = params.substr(5);
	var remoteSdp = {};
	remoteSdp.type = 'offer';
	remoteSdp.sdp = atob(vparams);
	console.log(remoteSdp);
	const peerConnection = new RTCPeerConnection();
    peerConnection.setRemoteDescription(new RTCSessionDescription(remoteSdp));
    const answer = peerConnection.createAnswer();
    peerConnection.setLocalDescription(answer);
	const dataChannel = peerConnection.createDataChannel('dataChannel');
    dataChannel.send(answer);

	function handleOrientation1(event){
		ReactDOM.render(<div><p>{event.alpha}</p><p>{event.beta}</p><p>{event.gamma}</p>
			</div>, document.getElementById('ControllerMenu'))
	}
	function handleOrientation2(event){
		ReactDOM.render(<div><p>{event.x}</p><p>{event.y}</p><p>{event.z}</p>
			</div>, document.getElementById('ControllerMenu'))
	}
	function handleOrientation3(event){
		ReactDOM.render(<div><p>{event}</p>
			</div>, document.getElementById('ControllerMenu'))
	}
	if (window.DeviceOrientationEvent) {
    	window.addEventListener("deviceorientation", handleOrientation1, true);
	} else if (window.DeviceMotionEvent) {
    	window.addEventListener('devicemotion', handleOrientation2, true);
	} else {
    	window.addEventListener("MozOrientation", handleOrientation3, true);
	}



  return (
    <div id="ControllerMenu">
    </div>
  );
}

export default ControllerMenu;
