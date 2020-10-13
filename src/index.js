import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Host from './HostMenu.js';
import Controller from './Controller.js';
import * as serviceWorker from './serviceWorker';

const params = window.location.search;
const nparams = params.substr(1,3);
const vparams = params.substr(5);
if(nparams=='sdp'){
	ReactDOM.render(
	  <React.StrictMode>
	    <Controller />
	  </React.StrictMode>,
	  document.getElementById('root')
	);
}else{
	ReactDOM.render(
	  <React.StrictMode>
	    <HostMenu />
	  </React.StrictMode>,
	  document.getElementById('root')
	);
}
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
