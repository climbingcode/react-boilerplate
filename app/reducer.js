// A reducer formats data before it gets pushed into the store, will use the type to decide which action happened
// Redux does not allow data to be mutiable, therefore we have to create new objects/arrays and feed them into the store

// example - Object.assign({}, oldState, newItem) - state.map - state.filter - [...state, action.payload]

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
