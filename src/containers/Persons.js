import React, { Component } from 'react';
import { connect } from 'react-redux';
import Person from '../components/Person/Person';
import AddPerson from '../components/AddPerson/AddPerson';

class Persons extends Component {

    personDeletedHandler = (personId) => {
        this.setState( ( prevState ) => {
            return { persons: prevState.persons.filter(person => person.id !== personId)}
        } );
    }

    render () {
        return (
            <div>
                <AddPerson personAdded={this.props.add} />
                {this.props.persons.map(person => (
                    <Person
                        key={person.id}
                        name={person.name}
                        age={person.age}
                        clicked={() => this.props.delete(person.id)}/>
                ))}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
  return {
    persons: state.persons
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    add: (name, age) => dispatch({type: 'ADD', payload: {name: name, age: age}}),
    delete: (id) => dispatch({type: 'DELETE', id: id})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Persons);
