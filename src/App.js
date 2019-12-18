import React, {Component} from 'react';
//import logo from './logo.svg';
import './App.css';
import TodoComponent from './todo.js';

class App extends Component {

    render() {
        return (
            <div className="App">
               <h1>La mia prima app React</h1>
                <hr />
                <TodoComponent/>
            </div>
        );
    }
}
export default App;
