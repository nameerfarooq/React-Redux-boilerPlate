import { ReactReduxContext } from "react-redux"

const INITIAL_STATE = {
    user : [{ 
    name : "muhammad nameer",
    email : "nameerfarooq18@gmail.com"
    }]
   
}

export default (state = INITIAL_STATE,action)=>{
    console.log("yeh action hai ",action)
    switch(action.type){
        case "setdata":{
            return({
                ...state,
                user : [...state.user,action.payload]
            })
        }
        default:
            return state

    }
}