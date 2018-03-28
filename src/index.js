import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ChildCareFinderApp from './ChildCareFinderApp';
import registerServiceWorker from './registerServiceWorker';
require("dotenv").config();

ReactDOM.render(<ChildCareFinderApp />, document.getElementById('root'));
registerServiceWorker();
