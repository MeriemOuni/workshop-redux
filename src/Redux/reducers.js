import { DECREMENT, INCREMENT } from "./actionsTypes";


const initState = {
    counter: 0
}


const counterReducer = (state= initState, action) => {
    switch (action.type) {
        case INCREMENT: return {...state, counter: state.counter + 1}
        case DECREMENT: return {...state, counter: state.counter > 0 ? state.counter - 1 : state.counter}
        default:
            return state;
    }
}

export default counterReducer