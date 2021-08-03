import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './bootstrap.css';
import $ from 'jquery';
import App from './App';
import reportWebVitals from './reportWebVitals';



function tick() {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    
    document.getElementById('root')
  );
}

setInterval(tick, 100);




reportWebVitals();
