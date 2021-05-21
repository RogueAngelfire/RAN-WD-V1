import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { programmerListReducers, programmerDetailsReducer } from './reducers/programmerReducers'
import { pricePlanListReducers } from './reducers/pricePlanReducers'



const reducer = combineReducers({
    programmerList: programmerListReducers,
    programmerDetails: programmerDetailsReducer,
    pricePlanList: pricePlanListReducers,
})

const initialState = {}

const middleware = [thunk]

const store = createStore(reducer, initialState,
    composeWithDevTools(applyMiddleware(...middleware)))

export default store