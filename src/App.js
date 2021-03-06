import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
    { id: '12', name: 'Brett', age: 28 },
    { id: '456', name: 'Anne', age: 28 },
    { id: '585', name: 'Meghan', age: 30}
    ],
    otherState: 'some other value',
    showPersons: false
  }

  nameChangedHandler = (event, id) => {
const personIndex = this.state.persons.findIndex(p => {
  return p.id === id;
});

const person = {
 ...this.state.persons [personIndex]
};

person.name = event.target.value;

const persons = [...this.state.persons];
persons[personIndex] = person;

    this.setState( {persons: persons})
  }

  deletePersonHandler = (personIndex) => {
    const persons = this.state.persons.slice();
    persons.splice(personIndex, 1);
    this.setState({persons: persons})
  }
  
  togglePersonsHandler= () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow})
  }

  render () {



    let persons = null;
if (this.state.showPersons) {
  persons = (
    <div>
      {this.state.persons.map((person, index) => {
        return <Person 
        click={() =>this.deletePersonHandler(index)} 
        name={person.name} 
        age={person.age} 
        key={person.id}
        changed={(event) =>this.nameChangedHandler(event, person.id)} />
      })}
      </div>
  );
}
    

    return (
      <div className="App">
      <h1>Hi, I'm a React App</h1>
      <button onClick={this.togglePersonsHandler}>Toggle Persons</button>
      
     {persons}
     
      </div>
    );
    // return React.createElement('div', {className: 'App"'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
