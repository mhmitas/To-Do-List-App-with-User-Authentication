import React, { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { auth } from '../../firebase/firebase.config';

const googleProvider = new GoogleAuthProvider()
const githubProvider = new GithubAuthProvider()

export const UserContext = createContext('null')

// UserProvider: user lagle call korba
const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    function createUser(email, password) {
        setIsLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    function signInUser(email, password) {
        setIsLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    function googleSignIn() {
        setIsLoading(true)
        return signInWithPopup(auth, googleProvider)
    }
    function githubSignIn() {
        setIsLoading(true)
        return signInWithPopup(auth, githubProvider)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setIsLoading(false)
            setUser(currentUser);
            console.log(currentUser);
        })
        return () => {
            unSubscribe()
        }
    }, [])

    const authInfo = {
        user,
        isLoading,
        createUser,
        signInUser,
        googleSignIn,
        githubSignIn,
    }
    return (
        <UserContext.Provider value={authInfo}>
            {children}
        </UserContext.Provider>
    );
};

export default UserProvider;