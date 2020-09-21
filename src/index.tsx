import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import AppRouter from './App';
import app from 'firebase/app';

const config = {
    apiKey: 'AIzaSyBKwZVG7Vn06bVgh62KMSL-ZZEukZzYWTA',
    authDomain: 'react-jdr.firebaseapp.com',
    databaseURL: 'https://react-jdr.firebaseio.com',
    projectId: 'react-jdr',
    storageBucket: 'react-jdr.appspot.com',
    messagingSenderId: '920603066318',
    appId: '1:920603066318:web:29b92528a5d3d771'
};

app.initializeApp(config);

ReactDOM.render(<AppRouter />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
