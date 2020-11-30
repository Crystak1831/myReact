import * as actionTypes from './actions'

const initialState = {
    counter:0,
    results: []
}

const reducer = (state = initialState, action) =>{

    switch(action.type){
        case actionTypes.INCREMENT:
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
        case actionTypes.DECREMENT:
            return{
                ...state,
                counter: state.counter - 1
            }
        case actionTypes.ADD:
            return {
                ...state,
                counter: state.counter + action.value
            }
        case actionTypes.SUB:
            return {
                ...state,
                counter: state.counter - action.value
            }
        case actionTypes.STORE_RESULT:
            return{
                ...state,
                //use concat() instead of push(), 应为concat返回一个新的array，不会改变原数组，而push会改变原数组
                //即使有'...state'
                results: state.results.concat({id: new Date(), value: state.counter})
            }
        case actionTypes.DELETE_RESULT:
            /* method1:splice, if we use splice, we need to copy the array first, splice() mutate the old array
            const id = 2;
            const newArray = [...state.results]
            newArray.splice(id,1)*/

            //method2 : filter, filter doesn't touch the old one return new array
            const updatedArray = state.results.filter(result =>result.id !== action.resultElId )
            return{
                ...state,
                results: updatedArray
            }
    }

    return state
}

export default reducer
