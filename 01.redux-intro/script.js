// let state = {
//     count:0,
// }

// let prevState = state

// function increment() {
//     // *** Muatating State ***//
//     //state.count = state.count + 1;


//     // *** Not Mutating State ***//
//     state = {count: state.count + 1}
// }

// increment();
// console.log(state);
// increment();
// console.log(state)
// increment();
// console.log(state)

import {createStore} from 'redux'




let initialState = {
    post: 0,
    name: 'Anurag singh',
    age: 26,
}

const INCREMENT = 'post/increment'
const DECREMENT = 'post/decrement'
const INCREASE_BY = 'post/increaseBy'
const DECREASE_BY = 'post/decreaseBy'

function reducer(state = initialState, action) {
    switch(action.type) {
        case INCREMENT:
            return {...state, post: state.post + 1}
        case DECREMENT:
            return {...state, post: state.post - 1};
        case INCREASE_BY:
            return {...state, post: state.post + action.payload}
        case DECREASE_BY:
            return {...state, post: state.post - action.payload}
        default:
            return state;
    }
}

const store = createStore(reducer,__REDUX_DEVTOOLS_EXTENSION__?.())

console.log(store)

store.subscribe(()=> {
    console.log(store.getState())
})

store.dispatch({type: INCREMENT})
store.dispatch({type: DECREMENT})
store.dispatch({type: INCREMENT})
store.dispatch({type: INCREASE_BY , payload: 15})