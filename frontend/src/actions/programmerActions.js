import axios from 'axios'
import { 
    PROGRAMMER_LIST_REQUEST,
    PROGRAMMER_LIST_SUCCESS,
    PROGRAMMER_LIST_FAIL,

    PROGRAMMER_DETAILS_REQUEST,
    PROGRAMMER_DETAILS_SUCCESS,
    PROGRAMMER_DETAILS_FAIL,

 } from '../constants/programmerConstants'


 export const listProgrammers = () => async (dispatch) => {
    try{
        dispatch({ type:PROGRAMMER_LIST_REQUEST })
        const {data} = await axios.get('/api/programmers/')
        

        dispatch({
            type:PROGRAMMER_LIST_SUCCESS,
            payload:data
        })

    }catch(error){
        dispatch({
            type:PROGRAMMER_LIST_FAIL,
            payload:error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
        })
    }
 }

 export const listProgrammerDetails = (id) => async (dispatch) => {
    try{
        dispatch({ type:PROGRAMMER_DETAILS_REQUEST })
        const {data} = await axios.get(`/api/programmers/${id}`)
        

        dispatch({
            type:PROGRAMMER_DETAILS_SUCCESS,
            payload:data
        })

    }catch(error){
        dispatch({
            type:PROGRAMMER_DETAILS_FAIL,
            payload:error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
        })
    }
 }