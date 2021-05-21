import { 
    PRICEPLAN_LIST_REQUEST,
    PRICEPLAN_LIST_SUCCESS,
    PRICEPLAN_LIST_FAIL,

 } from '../constants/pricePlanConstants'


 export const pricePlanListReducers = (state = {PricePlan:[]}, action) => {
    switch (action.type){
        case PRICEPLAN_LIST_REQUEST:
            return {loading:true, PricePlan:[]}
    
        case PRICEPLAN_LIST_SUCCESS:
            return {loading:false, PricePlan:action.payload }
    
        case PRICEPLAN_LIST_FAIL:
            return {loading:false, error:action.payload }
        
        default:
            return state

    }
}