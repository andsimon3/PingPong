import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import Host from './HostMenu.js';
import ControllerMenu from './ControllerMenu.js';

function App() {
	function RenderHost(){
		ReactDOM.render(
		    <Host />,
		  document.getElementById('root')
		);
	}
	function RenderController(){
		ReactDOM.render(
		    <ControllerMenu />,
		  document.getElementById('root')
		);
	}
  return (
    <div className="App">
    	<input type='button' value='HOST' onClick={RenderHost}/>
    	<input type='button' value='Controller' onClick=''/>
    </div>
  );
}

export default App;
