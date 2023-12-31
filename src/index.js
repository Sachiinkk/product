 import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import { BrowserRouter } from 'react-router-dom';
import store from './Redux/store';
 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
<BrowserRouter>
<Provider store={store}>
<App/>
</Provider>
</BrowserRouter>
);

 
