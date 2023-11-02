import { createContext, useReducer } from "react";

export const JobContext = createContext();

export const JobContextProvider = ({ children }) => {

    const initialState = {
        jobs: null
    }

    const jobReducer = (state, action) => {
        switch (action.type) {
            case 'SET_JOBS':
                return {
                    jobs: action.payload
                }
            case 'CREAT_JOB':
                return {
                    jobs: [action.payload, ...state.jobs]
                }
            default:
                return state
        }
        
    }
    
    const [state, dispatch] = useReducer(jobReducer, initialState);

    return (
        <JobContext.Provider value={{...state, dispatch}}>
            {children}
        </JobContext.Provider>
    )
}