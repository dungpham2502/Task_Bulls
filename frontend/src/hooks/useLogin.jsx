import { useState } from "react";
import { useUserContext } from "./useUserContext";

export const useLogin = () => {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(null);
    const { dispatch } = useUserContext();

    const login = async (email, password) => {
        setIsLoading(true);

        const response = await fetch("https://task-bulls-backend.vercel.app/api/user/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        });
        const json = await response.json();
        if (!response.ok) {
            setIsLoading(false);
            setError(json.error);
        } else {
            //save user to localstorage
            localStorage.setItem('user', JSON.stringify(json));
            //update global userContext
            dispatch({ type: 'SIGNIN', payload: json });
            //set error and loading state
            setIsLoading(false);
            setError(null);
        }
    }
    return (
        {
            login,
            isLoading,
            error
        }
    )
}

