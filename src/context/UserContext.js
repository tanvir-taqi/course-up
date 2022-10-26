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

    const signInSocial =(provider)=>{
        setIsLoading(true)
        return signInWithPopup(auth,provider)

    }

    const createUser = (email, password)=>{
        setIsLoading(true)
            return createUserWithEmailAndPassword(auth, email, password)
    }
    const signInUser = (email,password)=>{
        setIsLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const profileUpdate = (profile)=>{
        setIsLoading(true)
            return updateProfile(auth.currentUser, profile)
    }

    const logOut =()=>{
        setIsLoading(true)
        return signOut(auth)
    }

   useEffect(()=>{
    const unSubscribe = onAuthStateChanged(auth,(currentUser)=>{
        setUser(currentUser)
        setIsLoading(false)
    })

    return ()=> unSubscribe()
   },[])

    const authInfo = {user,signInSocial,logOut,createUser,signInUser,setIsLoading,isLoading,profileUpdate}


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;