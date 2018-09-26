import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import Client from "../src/components/Client.js";

ReactDOM.render(<Client />, document.getElementById('root'));
registerServiceWorker();
