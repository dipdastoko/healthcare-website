import React, { createContext } from 'react';
import useDoctors from '../Hooks/useDoctors';
import useServices from '../Hooks/useServices';


export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
    const services = useServices();
    const doctors = useDoctors();
    return (
        <AuthContext.Provider value={{ services, doctors }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;