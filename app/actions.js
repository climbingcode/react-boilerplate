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
// addToDo(toDo) {
//
//   const { toDos } = this.state;
//
//   axios.post('/api/to-dos', {
//     title: toDo
//   })
//   .then(({ data }) => {
//     toDos.push(data);
//     this.setState({
//       toDos: toDos
//     });
//   })
//
// }
//
// deleteToDo(id) {
//
//   axios.get(`/api/to-dos/${ id}/delete`)
//   .then(({ data }) => {
//     this.setState({
//       toDos: data
//     });
//   })
//
// }
