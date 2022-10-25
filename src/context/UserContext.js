import React from 'react';
import { createContext } from 'react';


export const AuthContext = createContext()
const UserContext = ({ children }) => {


    const authInfo = {name:"tanvir"}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;