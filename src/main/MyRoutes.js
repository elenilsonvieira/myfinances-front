import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";

import Home from "../screens/home/Home";
import Login from '../screens/login/Login';
import CreateUser from '../screens/createUser/CreateUser';

function MyRoutes() {
   return(
       <BrowserRouter>
        <Routes>
           <Route element = { <Home /> }  path="/" exact />
           <Route element = { <Login /> }  path="/login" />
           <Route element = { <CreateUser /> }  path="/createUser" />
        </Routes>
       </BrowserRouter>
   );
}

export default MyRoutes;