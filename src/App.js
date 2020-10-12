import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import Host from './HostMenu.js';

function App() {
	function RenderHost(){
		ReactDOM.render(
		    <Host />,
		  document.getElementById('root')
		);
	}
  return (
    <div className="App">
    	<input type='button' value='HOST' onClick={}/>
    	<input type='button' value='Controller' onClick=''/>
    </div>
  );
}

export default App;
