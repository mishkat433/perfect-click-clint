import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth"
import app from '../Firebase/Firebase.congig';

export const AuthContex = createContext();
const auth = getAuth(app)

const AuthProvider = ({ children }) => {
    const [loginUser, setLoginUser] = useState(null);
    const [loading, setLoading] = useState(true)

    const googleProvider = new GoogleAuthProvider();

    const googleSiginIn = () => {
        return signInWithPopup(auth, googleProvider)
    }


    const loginUserManualy = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const createUser = (email, password) => {
        console.log(email, password);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const profileUpdate = (name, photo) => {
        return updateProfile(auth.currentUser, { displayName: name, photoURL: photo })
    }


    const logout = () => {
        localStorage.removeItem('car-token');
        signOut(auth).then(result => { }).catch(err => console.log(err.message))
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setLoginUser(currentUser);
            setLoading(false);
        })
        return () => unsubscribe();
    }, [])


    const authInfo = {
        loginUser, setLoginUser, loading, setLoading,
        googleSiginIn,
        logout,
        loginUserManualy,
        createUser,
        profileUpdate,

    }

    return (
        <AuthContex.Provider value={authInfo}>
            {children}
        </AuthContex.Provider>
    );
};

export default AuthProvider;