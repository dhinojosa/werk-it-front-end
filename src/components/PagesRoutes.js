import React from "react";
import {Routes, Route} from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import Register from "../pages/Register";
import Nutrition from "../pages/Nutrition";
import Profile from "../pages/Profile";
import Exercises from "../pages/Exercises";
import Login from "../pages/Login";
import RecoverLogin from "../pages/RecoverLogin";
import Weights from "../pages/Weights";
import Aerobics from "../pages/Aerobics";

function PagesRoutes() {
    return (
        <Routes>
            <Route path="/werk-it/" element={<Home/>}/>
            <Route path="/werk-it/register" element={<Register/>}/>
            <Route path="/werk-it/login" element={<Login/>}/>
            <Route path="/werk-it/recover-password" element={<RecoverLogin/>}/>
            <Route path="/werk-it/exercises" element={<Exercises/>}/>
            <Route path="/werk-it/weights" element={<Weights/>}/>
            <Route path="/werk-it/aerobics" element={<Aerobics/>}/>
            <Route path="/werk-it/nutrition" element={<Nutrition/>}/>
            <Route path="/werk-it/profile/:username" element={<Profile/>}/>
            <Route path="*" element={<ErrorPage/>}/>
        </Routes>
    );
}

export default PagesRoutes;
