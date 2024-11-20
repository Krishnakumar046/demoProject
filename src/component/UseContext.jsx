import React, { createContext, useReducer } from 'react'
import { Reducerfun } from "../component/UseReducer"

export const cartContext = createContext();

function UseContext({ children }) {

    const initialState = {
        cart: []
    }
    const [state, dispatch] = useReducer(Reducerfun, initialState);
    const { cart } = state;

    return (
        <cartContext.Provider value={{ cart, dispatch }}>
            {children}
        </cartContext.Provider>
    )
}

export default UseContext