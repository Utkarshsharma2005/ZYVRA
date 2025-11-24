import React, { createContext, useContext, useEffect, useState } from "react";
import { auth, db } from "../firebase";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

const AuthContext = createContext();

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(true);

    function signup(email, password, name) {
        console.log("Signup called with:", email, name);
        return createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
            console.log("User created in Auth:", userCredential.user.uid);
            const user = userCredential.user;
            return setDoc(doc(db, "users", user.uid), {
                name: name || "",
                email: user.email,
                createdAt: new Date(),
            })
                .then(() => console.log("Firestore document written successfully"))
                .catch((error) => {
                    console.error("Error writing to Firestore:", error);
                    if (error.code === "permission-denied") {
                        throw new Error("Firestore Permission Denied. Please check your Firebase Console -> Firestore Database -> Rules and ensure they are set to 'allow read, write: if true;' for development.");
                    }
                    throw error;
                });
        });
    }

    function login(email, password) {
        return signInWithEmailAndPassword(auth, email, password);
    }

    function logout() {
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user);
            setLoading(false);
        });

        return unsubscribe;
    }, []);

    const value = {
        currentUser,
        signup,
        login,
        logout,
    };

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
}
