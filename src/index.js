import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import App from './App'; 
import * as serviceWorker from './serviceWorker';  // esto es lo que hace que mi app siga funcionando aun sin conexion a internet

ReactDOM.render(<App />, document.getElementById('root')); // Venia diferente pero lo modifique a JSX

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
