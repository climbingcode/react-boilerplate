import React from 'react';

export class AddToDo extends React.Component {

  addToDo(e) {
    e.preventDefault();
    const value = this.refs['newToDoInput'].value;
    this.props.addToDo(value);
  }

  render() {

    return (
      <form onSubmit={ this.addToDo.bind(this) }>
        <input type="text" ref="newToDoInput"/>
        <input type="submit" value="Add to do"/>
      </form>
    )

  }

}
