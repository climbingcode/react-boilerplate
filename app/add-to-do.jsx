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
        <input className="form-control" type="text" ref="newToDoInput"/>
        <br/>
        <input className="btn btn-success pull-right" type="submit" value="Add to do"/>
      </form>
    )

  }

}
