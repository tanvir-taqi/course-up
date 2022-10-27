import React from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import { app } from '../firebase/firebase.config';
import { useState } from 'react';
import { useEffect } from 'react';


export const AuthContext = createContext()

const auth = getAuth(app)


const UserContext = ({ children }) => {

    const [user, setUser] = useState(null)
    const [isLoading , setIsLoading] = useState(true)
    const [dark,setDark] = useState(false)


    // sign in with google and github function

    const signInSocial =(provider)=>{
        setIsLoading(true)
        return signInWithPopup(auth,provider)

    }

    // register user 

    const createUser = (email, password)=>{
        setIsLoading(true)
            return createUserWithEmailAndPassword(auth, email, password)
    }
    // user login function
    const signInUser = (email,password)=>{
        setIsLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
//user profile update
    const profileUpdate = (profile)=>{
        setIsLoading(true)
            return updateProfile(auth.currentUser, profile)
    }
//user log out function
    const logOut =()=>{
        setIsLoading(true)
        return signOut(auth)
    }

    // user observer

   useEffect(()=>{
    const unSubscribe = onAuthStateChanged(auth,(currentUser)=>{
        setUser(currentUser)
        setIsLoading(false)
    })

    return ()=> unSubscribe()
   },[])

    const authInfo = {user,
        signInSocial,
        logOut,
        createUser,
        signInUser,
        setIsLoading,
        isLoading,
        profileUpdate,
        dark,
        setDark}


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;