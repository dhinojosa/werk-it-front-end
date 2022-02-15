import React from "react";
import { Routes, Route } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import Register from "../pages/Register";
import Profile from "../pages/Profile";
import Exercises from "../pages/Exercises";
import Login from "../pages/Login";
import RecoverLogin from "../pages/RecoverLogin";

function PagesRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/recover-password" element={<RecoverLogin />} />
      <Route path="/exercises" element={<Exercises />} />
      <Route path="/profile/:username" element={<Profile />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

export default PagesRoutes;
