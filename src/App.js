import logo from './logo.svg';
import './App.css';
import React from 'react';

class ContactList extends React.Component {
  render() {
    const people = [
      {name: 'Micheal'},
      {name: 'Ryan'},
      {name: 'Tyler'}
    ]

    return <ol>
      {people.map(person => (
        <li key={person.name}>{person.name}</li>
      ))}
    </ol>

  }
}

function App() {
  
  return (
    <div className="App">
      <ContactList/>
      <ContactList/>
      <ContactList/>
    </div>
  );
}

export default App;
