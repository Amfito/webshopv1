import React from "react";
import useGlobalState from "./UseGlobalState";
import context from './context'

const GlobalStateProvider = ({children}) =>{

    return(
        <context.Provider value={useGlobalState()}>{children}</context.Provider>
    )
    }
    export default GlobalStateProvider;