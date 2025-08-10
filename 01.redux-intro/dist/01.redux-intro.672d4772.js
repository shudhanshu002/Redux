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
let reduxState = {
    post: 0,
    name: 'Anurag singh',
    age: 26
};
function reducer(state, action) {
    if (action.type === 'post/increment') return {
        ...state,
        post: state.post + 1
    };
    else if (action.type === 'post/decrement') return {
        ...state,
        post: state.post - 1
    };
    return state;
}
reduxState = reducer(reduxState, {
    type: 'post/increment'
});
console.log(reduxState);
reduxState = reducer(reduxState, {
    type: 'post/decrement'
});
console.log(reduxState);
reduxState = reducer(reduxState, {
    type: 'post/mul'
});
console.log(reduxState);

//# sourceMappingURL=01.redux-intro.672d4772.js.map
