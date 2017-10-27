import React from 'react';

const ToDo = ({
  title,
  createAt
}) => {

  return (<div className="to-do">
    <h3>{ title }</h3>
    <i>{ createAt }</i>
  </div>);

}

export default ToDo;
