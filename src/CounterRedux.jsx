import React from "react";
import { INCREMENT,DECREMENT } from "./Action";

const initialState={count:0};

const CounterRedux=(state=initialState,action)=>{
    switch(action,type){
        case"Increment":
        return {...state,count:state.count+1};
        case"Decrement":
        return {...state,count:state.count+1};
        default:
            return state;
    }

};

export default CounterRedux;