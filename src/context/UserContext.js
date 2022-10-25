import React from 'react';
import { createContext } from 'react';
import { getAuth, onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth'
import { app } from '../firebase/firebase.config';
import { useState } from 'react';
import { useEffect } from 'react';


export const AuthContext = createContext()

const auth = getAuth(app)


const UserContext = ({ children }) => {

    const [user, setUser] = useState(null)

    const signInSocial =(provider)=>{
        return signInWithPopup(auth,provider)

    }

    const logOut =()=>{
        return signOut(auth)
    }

   useEffect(()=>{
    const unSubscribe = onAuthStateChanged(auth,(currentUser)=>{
        setUser(currentUser)
    })

    return ()=> unSubscribe()
   },[])

    const authInfo = {user,signInSocial,logOut}


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;