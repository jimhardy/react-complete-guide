import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const App = props => {
    const [ personsState, setPersonsState ] = useState({
        persons: [
            {name: 'James', age: 30},
            {name: 'Liz', age: 30},
            {name: 'Lappy', age: 1}
        ]
    });

const[otherState, setOtherState] = useState('some other value');

console.log(personsState , otherState);
    
    const switchNameHandler = () => {
        // console.log('was clicked!');
        setPersonsState({
            persons: [
            {name: 'James', age: 100},
            {name: 'Liz', age: 99},
            {name: 'Lappy', age: 62}
        ],
        otherState: personsState.otherState
    });
    };
        return (
            <div className="App">
                <h1>Hi, I'm a react app!!</h1>
                <button onClick={switchNameHandler}>Switch Name</button>
                <Person name={personsState.persons[0].name} age={personsState.persons[0].age}/>
                <Person name={personsState.persons[1].name} age={personsState.persons[1].age}/>
                <Person name={personsState.persons[2].name} age={personsState.persons[2].age}/>
            </div>
        );
    }

export default App;
