import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './main/App';
import reportWebVitals from './reportWebVitals';

/*
 Solução para o problema gerado pelo eslint é resalvar a pasta package.json toda
 vez que um arquivo JSX for modificado.
 */

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
