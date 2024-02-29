import React from 'react';
import ReactDOM from 'react-dom/client';
import './css.css';
import App from './components/App';
// import reportWebVitals from './reportWebVitals';

import cardData from './data/cards.json'; //the data to display


document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
    const rootElement = ReactDOM.createRoot(root);
    rootElement.render(
      <React.StrictMode>
        <App cardData={cardData} />
      </React.StrictMode>
    );
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals(console.log);
