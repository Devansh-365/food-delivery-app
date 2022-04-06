import React, {createContext, useContext, useReducer} from 'react'

export const StateContext = createContext()

export const StateProvider = ({reducer, initialStage, children}) => (
    <StateContext.Provider value={useReducer(reducer,initialStage)} >
        {children}
    </StateContext.Provider>
)

export const useStateValue = () => useContext(StateContext);