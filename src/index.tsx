import './styles/main.scss';

import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './components/App';
// import reportWebVitals from './reportWebVitals';
// import * as serviceWorkerRegistration from './serviceWorkerRegistration';



const app = (<React.StrictMode><App /></React.StrictMode>);
const appRoot = ReactDOM.createRoot(document.getElementById('root')!);

appRoot.render(app);