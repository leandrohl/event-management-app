import React, { createContext, useContext, useEffect, useState } from 'react';
import auth from '@react-native-firebase/auth';

import { IAuthContext, IUserInfo } from './types';
import Snackbar from 'react-native-snackbar';

const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export function AuthProvider({ children }) {
  const [user, setUser] = useState<IUserInfo | null>(null);
  const [loadingScreen, setLoadingScreen] = useState(true)

  useEffect(() => {
    auth().onAuthStateChanged((user) => {
      if (user) {
        setUser({
          userId: user.uid,
          email: user.email,
          name: user.displayName
        })
      } else {
        setUser(null)
      }
    })
    setLoadingScreen(false)
  }, []);

  const signIn = async (email: string, password: string) => {
    try {
      const { user } = await auth().signInWithEmailAndPassword(email, password)
      if (user) {
        setUser({
          email: user.email,
          name: user.displayName,
          userId: user.uid
        })
      }
      return true
    } catch (error) {
      Snackbar.show({
        text: 'Houve um erro ao realizar o login, tente novamente!',
        duration: Snackbar.LENGTH_SHORT
      })
    }
    return false
  };

  const updateUserName = (name: string) => {
    setUser({ ...user, name })
  }

  const signOut = async () => {
    try {
      await auth().signOut()
      setUser(null)
    } catch (error) {
      Snackbar.show({
        text: 'Houve um erro ao finalizar sessão, tente novamente!',
        duration: Snackbar.LENGTH_SHORT
      })
    }
  };

  return (
    <AuthContext.Provider
      value={{
        signIn,
        signOut,
        signed: !!user,
        user,
        loadingScreen,
        updateUserName
      }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  return context;
};
