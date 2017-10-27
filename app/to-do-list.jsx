import React from 'react';
import PropTypes from 'prop-types';

import ToDo from './to-do.jsx';

const ToDoList = props => {

  return (<ul>
  {
    props.toDos.map((toDo, index) => <ToDo key={ `to_do_${index}` } { ...toDo }/>)
  }
  </ul>);

}

ToDoList.propTypes = {
  toDos: PropTypes.array.isRequired
}

export default ToDoList;
