import { useEffect, useState } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateProfile, onAuthStateChanged } from "firebase/auth";
import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});

    const auth = getAuth();

    const updateUserName = (name) => {
        updateProfile(auth.currentUser, {
            displayName: `${name}`
        })
    }

    const logInUsingGoogle = () => {
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const user = result.user;
                setUser(user);
            })
    }
    const signUpWithEmailPass = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const logInWithEmailPass = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }
    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser({})
            })
    }
    useEffect(() => {
        onAuthStateChanged(auth, user => {
            setUser(user);
            console.log(user);
        })
    }, [])
    return {
        user,
        setUser,
        auth,
        updateUserName,
        logInUsingGoogle,
        signUpWithEmailPass,
        logInWithEmailPass,
        logOut
    }
}
export default useFirebase;