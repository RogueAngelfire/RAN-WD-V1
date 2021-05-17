import { 
    PROGRAMMER_LIST_REQUEST,
    PROGRAMMER_LIST_SUCCESS,
    PROGRAMMER_LIST_FAIL,

    PROGRAMMER_DETAILS_REQUEST,
    PROGRAMMER_DETAILS_SUCCESS,
    PROGRAMMER_DETAILS_FAIL,

 } from '../constants/programmerConstants'


export const programmerListReducers = (state = {programmers:[]}, action) => {
    switch (action.type){
        case PROGRAMMER_LIST_REQUEST:
            return {loading:true, programmers:[]}
    
        case PROGRAMMER_LIST_SUCCESS:
            return {loading:false, programmers:action.payload }
    
        case PROGRAMMER_LIST_FAIL:
            return {loading:false, error:action.payload }
        
        default:
            return state

    }
}

export const programmerDetailsReducer = (state = {programmer:{projects:[], qualifications:[], expertise:[]}, }, action) => {
    switch (action.type){
        case PROGRAMMER_DETAILS_REQUEST:
            return {loading:true, ...state}
    
        case PROGRAMMER_DETAILS_SUCCESS:
            return {loading:false, programmer:action.payload }
    
        case PROGRAMMER_DETAILS_FAIL:
            return {loading:false, error:action.payload }
        
        default:
            return state

    }
}