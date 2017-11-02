import axios from 'axios';

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
//
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
