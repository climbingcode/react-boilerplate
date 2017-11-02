export function toDos(state = false, action) {
    switch (action.type) {
        case 'SET_TO_DOS':
            return action.payload;
        default:
            return [];
    }
}
