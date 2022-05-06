import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import Home from "../screens/home/Home";
import Login from '../screens/login/Login';
import CreateUser from '../screens/createUser/CreateUser';

function AppRoutes() {
   return(
      <BrowserRouter>
         <Route component = { Home }  path="/" exact />
         <Route component = { Login }  path="/login" />
         <Route component = { CreateUser }  path="/createUser" />
      </BrowserRouter>
   );
}

export default AppRoutes;