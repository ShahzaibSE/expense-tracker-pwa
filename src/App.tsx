import React from 'react';
import { getTokenSourceMapRange } from 'typescript';
import './App.css';
// Component.
import GridComponent from "./components/Grid/Grid"
// Firebase configuration.
import firebase from "./firebase"
function App() {
  const messaging = firebase.messaging()
  Notification.requestPermission().then(() =>{
    return messaging.getToken()
  }).then(token => {
    console.log("Token")
    console.log(token)
  })

  return (
    <div>
      <GridComponent/>
    </div>
  );
}

export default App;
