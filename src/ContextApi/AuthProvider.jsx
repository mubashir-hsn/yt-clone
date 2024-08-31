import React, { createContext, useContext, useEffect, useState } from 'react';
import { fetchData } from '../utills/rapidApi';

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [value, setValue] = useState('New');

  useEffect(() => {
    fetchAllData(value);
  }, [value]);

  const fetchAllData = async (query) => {
      setLoading(true); // Set loading state before API call
    fetchData(`search/?q=${query}`).then(({contents})=>{
        setData(contents)
        setLoading(false); // Always stop loading after the request completes
    })
   
  };

  return (
    <AuthContext.Provider value={{ value, setValue, loading, data }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
