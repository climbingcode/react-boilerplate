import React from 'react';
import PropTypes from 'prop-types';

import ToDo from './to-do.jsx';

const ToDoList = ({
    toDos = [],
    deleteToDo
}) => {

  return (<ul>
  {
    toDos.map((toDo, index) => <ToDo key={ `to_do_${index}` }
                                     deleteToDo={ deleteToDo }
                                     { ...toDo }/>)
  }
  </ul>);

}

ToDoList.propTypes = {
  toDos: PropTypes.array.isRequired,
  deleteToDo: PropTypes.func.isRequired
}

export default ToDoList;
