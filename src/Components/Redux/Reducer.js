import { Update } from "./Action";

const initialState={
    counter:0
}
function reducer(state=initialState,action){
    switch(action.type){
        case Update:
            return{
                ...state,
                counter:state.counter+1
            }

        default: 
         return state
    }
}

export default reducer