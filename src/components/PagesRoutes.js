import React from "react";
import { Routes, Route } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import Exercises from "../pages/Exercises";
import Home from "../pages/Home";
import Nutrition from "../pages/Nutrition";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Profile from "../pages/Profile";

function PagesRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/exercises" element={<Exercises />} />
      <Route path="/nutrition" element={<Nutrition />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/profile/:username" element={<Profile />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

export default PagesRoutes;
