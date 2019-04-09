import React, { Component } from 'react';

import './App.css';
import firebase from './firebase.js';

var db = firebase.firestore();

db.collection("users").add({
  first: "Ada",
  last: "Lovelace",
  born: 1815
})
.then(function(docRef) {
    console.log("Document written with ID: ", docRef.id);
  })
.catch(function(error) {
    console.error("Error adding document: ", error);
  })

class App extends Component {
  render() {
    return (

      <div className="App">

      </div>
    );
  }
}

export default App;
