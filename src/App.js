import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
    { name: 'Brett', age: 28 },
    { name: 'Anne', age: 28 },
    { name: 'Meghan', age: 30}
    ],
    otherState: 'some other value'
  }

  switchNameHandler = () => {
    // console.log('Was clicked!');
    // This is incorrect, correct method below. this.state.persons[0] = 'Brettographer';
    this.setState({persons: [
      { name: 'Brett', age: 285 },
      { name: 'Anne', age: 368 },
      { name: 'Meghan', age: 30}
      ] 
    })
  }

  render() {
    return (
      <div className="App">
      <h1>Hi, I'm a React App</h1>
      <button onClick={this.switchNameHandler}>Switch Name</button>
      <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
      <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My Hobbies: Racing </Person>
      <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>
    );
    // return React.createElement('div', {className: 'App"'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
