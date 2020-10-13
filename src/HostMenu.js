import React from 'react';
import logo from './logo.svg';
import QRCode from'qrcode.react';
//import './App.css';

function HostMenu() {
	function ControllerConnect(){
		const peerConnection = new RTCPeerConnection(configuration);
    	const offer = await peerConnection.createOffer();
    	await peerConnection.setLocalDescription(offer);

	}
  return (
    <div className="App">
    	<QRCode value={offer}/>
    </div>
  );
}

export default HostMenu;
