const INITIAL_STATES = {list : []}

export default (state = INITIAL_STATES, action)=>{
    switch(action.type){
        case 'LISTED':
            return{...state, list: action.payload.data}
        default:
            return state
    }
} 