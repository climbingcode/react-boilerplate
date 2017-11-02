import React from 'react';
import PropTypes from 'prop-types';

const AddToDo = ({
  addToDo
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

AddToDo.propTypes = {
  addToDo: PropTypes.func.isRequired
}

export default AddToDo;
