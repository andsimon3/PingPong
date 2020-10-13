import React from 'react';
import logo from './logo.svg';
import QRCode from'qrcode.react';
import ReactDOM from 'react-dom';
//import './App.css';

function HostMenu() {
	function ControllerConnect(){
		const peerConnection = new RTCPeerConnection();
		//const dataChannel = peerConnection.createDataChannel();
    	const offer = peerConnection.createOffer();
    	peerConnection.setLocalDescription(offer);
    	console.log(offer);
    	ReactDOM.render(<QRCode value={offer}/>, document.getElementById('HostMenu'))
    	/*peerConnection.addEventListener('datachannel', event => {
    		const dataChannel = event.channel;
		});*/
	}
	ControllerConnect();
  return (
    <div id="HostMenu">
    	
    </div>
  );
}

export default HostMenu;
