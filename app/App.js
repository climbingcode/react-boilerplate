import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import ToDoList from './to-do-list.jsx';

import { AddToDo } from './add-to-do.jsx';

export class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      toDos: []
    }
  }

  componentWillMount() {

    axios.get('/api/to-dos')
    .then(({ data }) => {
      this.setState({
        toDos: data
      })
    })
    .catch(err => alert(err))
  }

  addToDo(toDo) {

    const { toDos } = this.state;

    axios.post('/api/to-dos', {
      title: toDo
    })
    .then(({ data }) => {
      toDos.push(data);
      this.setState({
        toDos: toDos
      });
    })

  }

  render() {

    return (<section className="col-xs-10 col-xs-offset-1">
      <ToDoList toDos={ this.state.toDos }/>
      <AddToDo addToDo={ this.addToDo.bind(this) }/>
    </section>);
  }
}
