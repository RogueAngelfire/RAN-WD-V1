import axios from 'axios'
import { 
    PRICEPLAN_LIST_REQUEST,
    PRICEPLAN_LIST_SUCCESS,
    PRICEPLAN_LIST_FAIL,

 } from '../constants/pricePlanConstants'


 export const listPricePlan = () => async (dispatch) => {
    try{
        dispatch({ type:PRICEPLAN_LIST_REQUEST })
        const {data} = await axios.get('/api/priceplans/')
        

        dispatch({
            type:PRICEPLAN_LIST_SUCCESS,
            payload:data
        })

    }catch(error){
        dispatch({
            type:PRICEPLAN_LIST_FAIL,
            payload:error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
        })
    }
 }
