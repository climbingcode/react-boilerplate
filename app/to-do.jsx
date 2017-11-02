import React from 'react';
import PropTypes from 'prop-types';

const ToDo = ({
  id,
  title,
  createAt,
  deleteToDo
}) => {

  return (<div className="to-do">
    <h3>{ title }</h3>
    <i>{ createAt }</i>
    <a onClick={ () => deleteToDo(id) } className="btn btn-danger pull-right">Remove</a>
  </div>);

}

ToDo.PropTypes = {
  title: PropTypes.string.isRequired,
  createAt: PropTypes.string.isRequired,
  deleteToDo: PropTypes.func.isRequired
}

export default ToDo;
