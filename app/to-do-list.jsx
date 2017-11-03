import React from 'react';
import PropTypes from 'prop-types';

import ToDo from './to-do.jsx';
import AddToDo from './add-to-do.jsx';

const ToDoList = ({
    toDos = [],
    actions
}) => {

  return (
    <section className="col-xs-10 col-xs-offset-1">
      <ul>
      {
        toDos.map((toDo, index) => <ToDo key={ `to_do_${index}` } { ...toDo } { ...actions }/>)
      }
      </ul>
      <br/>
      <AddToDo { ...actions }/>
    </section>
  );

}

ToDoList.propTypes = {
  toDos: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}

export default ToDoList;
