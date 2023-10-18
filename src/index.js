import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.js';
import * as firebase from 'firebase';
import registerServiceWorker from './registerServiceWorker';
var config = {
  apiKey: 'AIzaSyCltYFCDx384KMoFkjYvdPiqNheCLXYpek',
  authDomain: 'image-recognition-56343.firebaseapp.com',
  databaseURL: 'https://image-recognition-56343-default-rtdb.firebaseio.com',
  projectId: 'image-recognition-56343',
  storageBucket: 'image-recognition-56343.appspot.com',
  messagingSenderId: '987813759802',
  appId: '1:987813759802:web:6b17ac4a36a2d895d69e03',
  measurementId: 'G-D6F3EPPMV3',
};
firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
