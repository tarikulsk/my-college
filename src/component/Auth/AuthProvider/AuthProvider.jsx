
// eslint-disable-next-line no-unused-vars
import React, { createContext, useEffect, useState } from 'react';


export const AuthContext = createContext(null);
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, GoogleAuthProvider, getAuth } from "firebase/auth";
import app from '../firebase.config';




// const auth = getAuth(app)
const auth = getAuth(app)
// eslint-disable-next-line no-unused-vars, react/prop-types
const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const googleProvider = new (GoogleAuthProvider);


    const logIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)

    }

    const register = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        return signOut(auth);

    }

    const signInWithGoogle = () => {
        return signInWithPopup(auth, googleProvider)

    }



    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false)
        })
        return () => {
            unsubscribe();
        }

    }, [])


    const authInfo = {
        logIn,
        user,
        register,
        logOut,
        loading,
        signInWithGoogle,


    }


    return (
        <div>

            <AuthContext.Provider value={authInfo}>
                {children}

            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;
