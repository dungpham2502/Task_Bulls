import { useState } from "react";
import { useUserContext } from "./useUserContext";

export const useSignup = () => {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(null);
    const { dispatch } = useUserContext();

    const signup = async (email, full_name, usf_id, phone_num, password) => {
        setIsLoading(true);

        const response = await fetch("http://localhost:3000/api/user/signup", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, full_name, usf_id, phone_num, password })
        });
        const json = await response.json();
        if (!response.ok) {
            setIsLoading(false);
            setError(json.error);
        } else {
            console.log(json);
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
            signup,
            isLoading,
            error
        }
    )
}

