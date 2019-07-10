import {ADD_ENTRY, RECEIVE_ENTRIES } from '../actions' 

function entries (state = {}, actions){
    switch (actions.type){
        case RECEIVE_ENTRIES:
            return {
                ...state, 
                ...actions.entries
            }
        case ADD_ENTRY:
            return {
                ...state,
                ...actions.entry,
            }
        default: 
            return state
    }
}

export default entries