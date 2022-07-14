import React from "react";
import { Route, BrowserRouter, Switch, Redirect } from "react-router-dom";

import Home from "../screens/home/Home";
import Login from '../screens/login/Login';
import CreateUser from '../screens/createUser/CreateUser';
import UpdateUser from "../screens/updateUser/UpdateUser";
import DeleteUser from "../screens/deleteUser/DeleteUser";
import ViewUsers from "../screens/viewUsers/ViewUsers";

import { AuthConsumer } from '../main/SessionProvider';

function RestrictedRoute( { component: Component, show, ...props } ){
   return (
       <Route exact {...props} render={ (componentProps) => {
           if(show){
               return (
                   <Component {...componentProps} />
               )
           }else{
               return(
                   <Redirect to={ {pathname : '/login', state : { from: componentProps.location } } } />
               )
           }
       }}  />
   )
}

function AppRoutes(props) {
   return(
      <BrowserRouter>
         <Switch>
            <Route component = { Home }  path="/" exact />
            <Route component = { Login }  path="/login" />
            <Route component = { CreateUser }  path="/createUser" />

            <RestrictedRoute show={props.isAuthenticated} component = { UpdateUser }  path="/updateUser/:id" />
            <RestrictedRoute show={props.isAuthenticated} component = { DeleteUser }  path="/deleteUser" />
            <RestrictedRoute show={props.isAuthenticated} component = { ViewUsers }  path="/viewUsers" />
         </Switch>
      </BrowserRouter>
   );
}

export default () => (
   <AuthConsumer>
       { (context) => (<AppRoutes isAuthenticated={context.isAuthenticated} />) }
   </AuthConsumer>
)