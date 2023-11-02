import { useUserContext } from "./useUserContext";

export const useLogout = () => {
    const { dispatch } = useUserContext();

    const logout = () => {
        //remove user form localStorage
        localStorage.removeItem('user');
        //change global userContext
        dispatch({ type: 'SIGNOUT' });
    }

    return {
        logout
    }
}