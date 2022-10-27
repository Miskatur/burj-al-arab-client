import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth'
import app from "../firebase/firebase.config";


export const AuthContext = createContext()
const auth = getAuth(app)


const AuthProvider = ({ children }) => {
    const [loading, setloading] = useState(false)

    const [user, setUser] = useState({})


    const createUser = (email, password) => {
        setloading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInWithEmail = (email, password) => {
        setloading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const userData = (name) => {
        return updateProfile(auth.currentUser, {
            displayName: name
        })
    }

    const logOut = () => {
        return signOut(auth)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setloading(false)
        })
        return () => unSubscribe()
    }, [])


    const authInfo = {
        user,
        loading,
        createUser,
        signInWithEmail,
        userData,
        logOut
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;


