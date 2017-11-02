import React from 'react';
import PropTypes from 'prop-types';

const AddToDo = ({
  actions
}) =>  {

    let newToDoInput;

    const onSubmit = e => {
      e.preventDefault();
      addToDo(newToDoInput.value);
      newToDoInput.value = "";
    }

    return (
      <form onSubmit={ onSubmit }>
        <input className="form-control" type="text" ref={ el => newToDoInput= el }/>
        <br/>
        <input className="btn btn-success pull-right" type="submit" value="Add to do"/>
      </form>
    )

}

export default AddToDo;
