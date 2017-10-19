import React from 'react';
import ReactDOM from 'react-dom';

import ToDoList from './to-do-list.jsx';

import { AddToDo } from './add-to-do.jsx';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      toDos: ['task1', 'task2', 'task3']
    }

  }

  addToDo(toDo) {

    const toDos = this.state.toDos;

    toDos.push(toDo);

    this.setState({
      toDos: toDos
    })

  }

  render() {
    
    return (<section>
      <ToDoList toDos={ this.state.toDos }/>
      <AddToDo addToDo={ this.addToDo.bind(this) }/>
    </section>);
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));
