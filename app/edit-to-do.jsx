import React from 'react';

const EditToDo = ({
  id,
  title,
  createAt,
  editToDo,
  updateToDo
}) => {

  let titleInput;

  const submitToDo = e => {
    e.preventDefault();
    const title = titleInput.value;
    updateToDo({
      id: id,
      title: title
    });
  }

  return (
      <div>

        <form onSubmit={ submitToDo }>
          <input ref={ el => titleInput = el } defaultValue={ title }></input>
          <input type="submit" href="#" className="btn btn-success pull-right" value="Update" onClick={ () => editToDo() }/>
          <a href="#" className="btn btn-danger pull-right" onClick={ () => editToDo() } >Cancel</a>
        </form>


      </div>
  )

}

export default EditToDo;
