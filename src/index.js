import React from 'react';
import ReactDOM from 'react-dom';
import './static/css/bootstrap3_3_7.min.css';
import './static/css/font-awesome.min.css';
import './index.css';
import CoreRouter from './components/router/CoreRouter';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(<CoreRouter />, document.getElementById('root'));
registerServiceWorker();
