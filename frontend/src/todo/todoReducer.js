const initialState = { description: '', list: [] }

const todoReducer = (state = initialState, action) => {
    switch(action.type){
        case 'descriptionChanged':
            //retornando o estado atual da description
            return{...state, description: action.payload}
        case 'TODO_SEARCHED':
            return {...state, list:action.payload}
        case 'TODO_ADDED':
        case 'TODO_CLEAR':
            return {...state, description: ''}
        default:
            return state
    }
}

export default todoReducer