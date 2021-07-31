import React, { useReducer, useContext, createContext } from 'react';
import { reducer, initialState } from './store';
export let ScreenContext = createContext({});
export const Provider = ({ children }) => {
    let store = useReducer(reducer, initialState);
    return (
        <ScreenContext.Provider value={store}>
            {children}
        </ScreenContext.Provider>
    )
};


export const useStore = () => {
    let store = useContext(ScreenContext);
    return store;
}