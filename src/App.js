import React from 'react';
import './App.css';

const firebase = require('firebase');

class App extends React.Component {

  constructor(){
    super();
      this.state = {
        selectedNoteIndex: null,
        selectedNote: null,
        notes: null
      }
  }

  render(){
    return(
      <div>
        <h1>Note App</h1>
      </div>
    ) 
  }

  componentDidMount = () => {
    firebase.firestore().collection('notes').onSnapshot(serverUpdate => {
      const notes = serverUpdate.docs.map(doc => {
        const data = doc.data();
          data['id'] = doc.id;
            return data; 
      });
      console.log(notes);
      //Setting notes state to returned data from array 
      this.setState({notes: notes});
    });
  }
}

export default App;
