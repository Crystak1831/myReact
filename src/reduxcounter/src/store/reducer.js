
const initialState = {
    counter:0,
    result: []
}

const reducer = (state = initialState, action) =>{

    switch(action.type){
        case 'INCREMENT':
            // return{
                //copy old state property
            const newState = Object.assign({},state)
            console.log(newState)
            newState.counter = state.counter + 1
            return newState
                // counter: state.counter + 1
            // }
        case 'DECREMENT':
            return{
                counter: state.counter - 1
            }
        case 'ADD':
            return {
                counter: state.counter + action.value
            }
        case 'SUB':
            return {
                counter: state.counter - action.value
            }
        case 'STORE_RESULT':
            return{

            }
    }

    return state
}

export default reducer
