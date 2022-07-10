let initialState={
    count :0,
    id:"",
    pass:""
}

function reducer(state=initialState, action){

    //action : 매개변수로 던진 action받을 수 있음
    console.log(action);
    //if(action.type == "INCREMENT"){
        //return {...state,count:state.count+1};
    //}
    switch(action.type){
        case  "INCREMENT" :
           // return {...state,count:state.count+1};
            return {...state,count:state.count + action.paylode.num};
        case "LOGIN ":
            return {...state ,id: action.paylode.id,
                pass: action.paylode.pass};
        case "DECREMENT ":
            return {...state, count:state.count -1 };
        default :
         return {...state};
    }
    
    return {...state};
}

export default reducer;