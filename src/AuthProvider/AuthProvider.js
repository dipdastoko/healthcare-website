import React, { createContext } from 'react';
import useServices from '../Hooks/useServices';


export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
    const services = useServices();
    return (
        <AuthContext.Provider value={services}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;