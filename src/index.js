import React from 'react';
import ReactDOM  from 'react-dom/client';
import '../node_modules/@fortawesome/fontawesome-free/css/all.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';
import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';

let myDiv=document.getElementById('root')

let myRoot=ReactDOM.createRoot(myDiv)

myRoot.render(<App/>)

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//     <App />
// );



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
