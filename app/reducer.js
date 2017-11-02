export function toDos(state = false, action) {
    switch (action.type) {
        case 'SET_TO_DOS':
            return action.payload;
        case 'ADD_TO_DO':
            return [...state, action.payload];
        case 'REMOVE_TO_DO':
          const toDos = state.filter(toDo => toDo.id !== action.payload);
          return toDos;
        default:
            return [];
    }
}
