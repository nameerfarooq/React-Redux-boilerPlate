const set_data=(data)=>{
    return (dispatch)=>{
        dispatch({ type : "setdata" , payload : data})
    }
}

export {
    set_data
}