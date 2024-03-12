import React, { useEffect, useState } from "react";
import { HashRouter as Router, Route, Routes, Navigate, useLocation, useNavigate } from "react-router-dom";
import "./App.css";
import Login from "./pages/users/Login";
import Users from "./pages/users/Users";
import UserForm from "./pages/users/UserForm";
import Update from "./pages/users/Update";

const App = () => {
  const location = useLocation();
  const navigate = useNavigate()
  const [isAuth, setIsAuth] = useState(false);
  const Logout = () => {
    localStorage.removeItem("username");
    navigate("/login")
  }
  useEffect(() => {
    let username = localStorage.getItem('username')
    if (username) {
      setIsAuth(true)
    }
  }, [location.pathname])
  return (
    <div className="App">
      {isAuth && <span onClick={Logout}>logout</span>}

      <Routes>

        {!isAuth ? <Route path="/login" element={<Login />} />: null}
        {/*  */}
        {
          isAuth ? <>
            <Route path="/users/:id" element={<Update />} />
            <Route path="/users" element={<Users />} />
          </> : null
        }
        {/*  */}

        {/* redirection path */}
        <Route path="*" element={<Navigate to={isAuth ? "/users" : "/login"} />} />
      </Routes>
    </div>
  );
};

export default App;
