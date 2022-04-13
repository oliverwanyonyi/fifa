import React, { useContext, createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [users, setUsers] = useState([]);
  const [editId, setEditId] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    const userLogin = localStorage.getItem("userLogin")
      ? JSON.parse(localStorage.getItem("userLogin"))
      : null;
    if (userLogin) {
      setUser(userLogin);
    }
  }, [navigate]);

  return (
    <AppContext.Provider value={{ user, users, setUsers, editId, setEditId }}>
      {children}
    </AppContext.Provider>
  );
};

export const AppState = () => useContext(AppContext);

export default AppProvider;
