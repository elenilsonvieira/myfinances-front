import React from 'react';

import NavbarItem from './NavbarItem';
import { AuthConsumer } from '../main/SessionProvider';

function Navbar(props){
    return (
        <div className="navbar navbar-expand-lg fixed-top navbar-dark bg-primary">
        <div className="container">
          <a href="/" className="navbar-brand">Minhas Finanças</a>
          <button className="navbar-toggler" type="button" 
                  data-toggle="collapse" data-target="#navbarResponsive" 
                  aria-controls="navbarResponsive" aria-expanded="false" 
                  aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav">
                <NavbarItem render={props.isAuthenticated} href="/viewUsers" label="Usuários" />
                <NavbarItem render={!props.isAuthenticated} href="/login" label="Login" />
                <NavbarItem render={props.isAuthenticated} onClick={props.logout} href="/login" label="Sair" />
            </ul>
            </div>
        </div>
      </div>
    )
}

export default () => (
  <AuthConsumer>
    {(context) => (
        <Navbar isAuthenticated={context.isAuthenticated} logout={context.end} />
    )}
  </AuthConsumer>
)