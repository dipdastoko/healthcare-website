import { useState } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState();

    const auth = getAuth();

    const logInUsingGoogle = () => {
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const user = result.user;
                setUser(user);
            })
    }
    const signUpWithEmailPass = (auth, email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const logInWithEmailPass = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }
    return {
        user,
        setUser,
        auth,
        logInUsingGoogle,
        signUpWithEmailPass,
        logInWithEmailPass
    }
}
export default useFirebase;