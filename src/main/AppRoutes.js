import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import Home from "../screens/home/Home";
import Login from '../screens/login/Login';
import CreateUser from '../screens/createUser/CreateUser';
import UpdateUser from "../screens/updateUser/UpdateUser";
import DeleteUser from "../screens/deleteUser/DeleteUser";
import ViewUsers from "../screens/viewUsers/ViewUsers";

function AppRoutes() {
   return(
      <BrowserRouter>
         <Route component = { Home }  path="/" exact />
         <Route component = { Login }  path="/login" />
         <Route component = { CreateUser }  path="/createUser" />
         <Route component = { UpdateUser }  path="/updateUser" />
         <Route component = { DeleteUser }  path="/deleteUser" />
         <Route component = { ViewUsers }  path="/viewUsers" />
      </BrowserRouter>
   );
}

export default AppRoutes;