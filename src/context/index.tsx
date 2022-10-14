import React, { createContext, useContext, useEffect, useState } from 'react';
import { IAuthContext, IUserInfo } from './types';
import auth from '@react-native-firebase/auth';

const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export function AuthProvider ({ children }) {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState<IUserInfo | null>(null);

  useEffect(() => {
    setLoading(true)
    auth().onAuthStateChanged((user) => {
      if (user) {
        setUser({
          email: user.email,
          name: user.displayName
        })
      } else {
        setUser(null)
      }
      console.log(user)
    });
    setLoading(false)
  }, []);

  return (
    <AuthContext.Provider
      value={{
        signed: !!user,
        user,
        loading
      }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  return context;
};
