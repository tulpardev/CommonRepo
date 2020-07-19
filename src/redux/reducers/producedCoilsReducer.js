import * as actionTypes from "../actions/actionTypes"
import initialState from "./initialState";

export default function productListReducer(state=initialState.producedCoils,action){
    switch (action.type) {
        case actionTypes.PRODUCED_COIL_LIST:
            initialState.loadingProd=false   
            return action.payload 
            
        default:
            return state;
    }
}