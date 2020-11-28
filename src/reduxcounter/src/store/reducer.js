
const initialState = {
    counter:0,
    results: []
}

const reducer = (state = initialState, action) =>{

    switch(action.type){
        case 'INCREMENT':
            // return{
                //copy old state property
            const newState = {...state}
            /*也可以用object assign
             const newState = Object.assign({},state)*/
            // console.log(newState)
            newState.counter = state.counter + 1
            return newState
                // counter: state.counter + 1
            // }
        case 'DECREMENT':
            return{
                ...state,
                counter: state.counter - 1
            }
        case 'ADD':
            return {
                ...state,
                counter: state.counter + action.value
            }
        case 'SUB':
            return {
                ...state,
                counter: state.counter - action.value
            }
        case 'STORE_RESULT':
            return{
                ...state,
                //use concat() instead of push(), 应为concat返回一个新的array，不会改变原数组，而push会改变原数组
                //即使有'...state'
                results: state.results.concat({id: new Date(), value: state.counter})
            }
    }

    return state
}

export default reducer
