import { signupReducer } from "@/reducers/SignupReducer";
import { INITIAL } from "@/reducers/SignupReducer";
import { createContext, useContext, useReducer } from 'react';

// const { createContext, useContext } = require("react");


const SignupContext = createContext();

export const SignupProvider = ({ children }) => {
    const [state, dispatch] = useReducer(signupReducer, INITIAL);

    return(
        <SignupContext.Provider value={{ state, dispatch }}>
            {children}
        </SignupContext.Provider>
    );
};

export const useSignup = () => useContext(SignupContext);