import { useReducer } from "react";

const reducer = (state,action) =>{
    switch (action.type){
        case "SELECT_ITEM":
            return{
                product:{
                    ...action.payload
                }
            }
        default:{
            return state;
        }
    }
}

const useGlobalState = ()=>{
    const [globalState,globalDispatch] = useReducer(reducer,{
        product:{}
    })

    return {globalState,globalDispatch};

}

export default useGlobalState;