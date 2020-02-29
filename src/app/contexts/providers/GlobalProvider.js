import React, {createContext, useReducer} from 'react';

import {GlobalReducer} from "../reducers/globalReducer";

export const GlobalContext = createContext();

const GlobalProvider = ({children}) => {

    const [state, dispatch] = useReducer(GlobalReducer, {
        value: 3
    });

    return (
        <GlobalContext.Provider value={{state, dispatch}}>
            {children}
        </GlobalContext.Provider>
    )

};

export default GlobalProvider;