import React from 'react';
import logo from './logo.svg';
import QRCode from'qrcode.react';
import ReactDOM from 'react-dom';
//import './App.css';

const sitteUrl = 'https://thepingpong.vercel.app';
function HostMenu() {
	function ControllerConnect(){
		const peerConnection = new RTCPeerConnection();
		//const dataChannel = peerConnection.createDataChannel();
    	const offer = peerConnection.createOffer();
    	peerConnection.setLocalDescription(offer);
		peerConnection.addEventListener('datachannel', event => {
    		const dataChannel = event.channel;
    		console.log(event);
		});
    	console.log(offer);
    	offer.then((e)=>{
    		const url = sitteUrl+"/?sdp="+btoa(e.sdp);
    		ReactDOM.render(<div>{url}<br /><QRCode value={url} size='256'/></div>, document.getElementById('HostMenu'));
    		var remoteSdp = {}
    		remoteSdp.type = 'answer';
    		remoteSdp.sdp = e.sdp;
    		peerConnection.setRemoteDescription(new RTCSessionDescription(remoteSdp));
    	})
    	ReactDOM.render(<div><br /><QRCode value={offer} size='256'/></div>, document.getElementById('HostMenu'))
    	/*peerConnection.addEventListener('datachannel', event => {
    		const dataChannel = event.channel;
		});*/
	}
  return (
    <div id="HostMenu">
    	<button value="start" onClick={ControllerConnect}/>
    </div>
  );
}

export default HostMenu;
