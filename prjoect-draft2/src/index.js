import React from 'react';
import ReactDOM from 'react-dom/client';
import './css.css';
import App from './components/App';
// import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';



// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCW91ivUSBPmy9zXVookPP8KMJSOMMLpHk",
  authDomain: "dubmatch-c9be9.firebaseapp.com",
  databaseURL: "https://dubmatch-c9be9-default-rtdb.firebaseio.com/",
  projectId: "dubmatch-c9be9",
  storageBucket: "dubmatch-c9be9.appspot.com",
  messagingSenderId: "27172219689",
  appId: "1:27172219689:web:f3cfa64d6b49cc3df8a538"
};

// Initialize Firebase
initializeApp(firebaseConfig);



document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  const rootElement = ReactDOM.createRoot(root);
  rootElement.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
  );
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals(console.log);