import React, { createContext } from 'react';
import useDoctors from '../Hooks/useDoctors';
import useFirebase from '../Hooks/useFirebae';
import useServices from '../Hooks/useServices';


export const AuthContext = createContext();
const AuthProvider = ({ children }) => {

    const services = useServices();
    const doctors = useDoctors();
    const firebaseAuths = useFirebase();

    return (
        <AuthContext.Provider value={{ services, doctors, firebaseAuths }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;