import { createContext, useReducer } from "react";

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
    
    const initialState = {
        user: JSON.parse(localStorage.getItem('user'))
    }

    const userReducer = (state, action) => {
        switch (action.type) {
            case 'SIGNIN':
                return {
                    user: action.payload
                }
            case 'SIGNOUT':
                return {
                    user: null
                }
            default:
                return state
        }
    }

    const [state, dispatch] = useReducer(userReducer, initialState);

    console.log('UserContext:', state)

    return (
        <UserContext.Provider value={{...state, dispatch}}>
            {children}
        </UserContext.Provider>
    )
}