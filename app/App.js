import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ToDoList from './to-do-list.jsx';

import * as actions from './actions';

// This is a container component (Connects to the store and renders a presentational component)
class App extends Component {

  componentWillMount() {
    const { actions } = this.props;
    actions.fetchToDos();
  }

  render() {

    return (
      <ToDoList { ...this.props }/>
    );

  }

}

// We are defining what data we need in the store here
const mapStateToProps = (state = {}) => {
  return {
    toDos: state.toDos
  }
}

// We are binding all the actions to the store here (can now access them with this.props.actions)
const mapDispatchToProps = dispatch => {
  return { actions: bindActionCreators(actions, dispatch) }
}

// Connects the component to the store, Magic, this is now a container
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
