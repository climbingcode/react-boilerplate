import React from 'react';
import PropTypes from 'prop-types';

const ToDoList = props => {

  return (<ul>
  {
    props.toDos.map((toDo, index) => {
      return <li key={ `to_do_${ index }` }>{ toDo }</li>;
    })
  }
  </ul>);

}

ToDoList.propTypes = {
  toDos: PropTypes.array.isRequired
}

export default ToDoList;
