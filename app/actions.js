import axios from 'axios';

// NOTE: Actions are functions which normal return a object,
// We are using Thunk to allow you to return a function and dispatch in it
// If you return an object dispatch will get called for you, if you use a function you will have to call dispatch and return a function
// Dispatch calls the reducer and filters based on the type passed

// example
// export const doSomething = () => {
//   return {
//     type: 'WHAT_HAPPENED',
//     payload: 'this is cool data to provide to the app'
//   }
// }

export const fetchToDos = () => {

  return function(dispatch) {
    axios.get('api/to-dos')
    .then(({data}) => {
      dispatch({
        type: 'SET_TO_DOS',
        payload: data
      })
    });
  }

}

export const addToDo = (toDo) => {

  return function(dispatch) {

    axios.post('/api/to-dos', {
      title: toDo
    })
    .then(({ data }) => {
      dispatch({
        type: 'ADD_TO_DO',
        payload: data
      })
    })

  }


}

export const deleteToDo = (id) => {

  return function(dispatch) {

    axios.get(`/api/to-dos/${ id }/delete`)
    .then(({ data }) => {
      dispatch({
        type: 'REMOVE_TO_DO',
        payload: id
      })
    })
  }


}
