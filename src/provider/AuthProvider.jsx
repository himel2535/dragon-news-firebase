import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import app from "../firebase/firebase.config";
export const AuthContext = createContext();

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  //   -----create user---
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // -----Log in----
  const login=(email,password)=>{
    return signInWithEmailAndPassword(auth,email,password)
  }

  // ----Log Out----
  const logout = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  console.log(user);

  const authData = { user, setUser, createUser, logout,login };

  return <AuthContext value={authData}>{children}</AuthContext>;
};

export default AuthProvider;
