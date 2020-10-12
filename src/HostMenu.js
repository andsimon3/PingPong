import React from 'react';
import logo from './logo.svg';
//import './App.css';

function HostMenu() {
	function WebRTC(){
		const iceConfiguration = {
    iceServers: [{urls: ''}]
		}
		const peerConnection = new RTCPeerConnection(iceConfiguration);
		const dataChannel = peerConnection.createDataChannel();
		const remoteDesc = new RTCSessionDescription(message.answer);
		return remoteDesc;
	}
  return (
    <div className="App">
    	HOST1
    	<QRCode value={WebRTC()} />
    </div>
  );
}

export default HostMenu;
