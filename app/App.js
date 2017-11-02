import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ToDoList from './to-do-list.jsx';
import AddToDo from './add-to-do.jsx';
import * as actions from './actions';

class App extends Component {
  
  componentWillMount() {
    const { actions } = this.props;
    actions.fetchToDos();
  }

  render() {

    return (
      <section className="col-xs-10 col-xs-offset-1">
        <ToDoList { ...this.props }/>
        <br/>
        <AddToDo { ...this.props }/>
      </section>
    );

  }

}

const mapStateToProps = (state = {}) => {
  return {
    toDos: state.toDos
  }
}

const mapDispatchToProps = dispatch => {
  return { actions: bindActionCreators(actions, dispatch) }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
