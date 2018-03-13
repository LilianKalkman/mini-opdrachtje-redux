import React, { Component } from 'react';

import './AddPerson.css';

class AddPerson extends Component {
  state = {
    name: '',
    age: 0
  }
  render(){
    return (
      <div className="AddPerson">
          <input
            type="text"
            name="name"
            placeholder="name"
            value={this.state.name}
            onChange={(event)=> this.setState({name: event.target.value })}/>
          <input
            type="number"
            name="age"
            placeholder="age"
            value={this.state.age}
            onChange={(event)=> this.setState({age: event.target.value })}/>
          <button onClick={() => this.props.personAdded(this.state.name, this.state.age)}>Add Person</button>
      </div>
    );
  }
}

export default AddPerson;
