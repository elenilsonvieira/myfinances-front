import React from 'react'

import AuthenticationApiService from '../services/AuthenticationApiService';

export const AuthContext = React.createContext()
export const AuthConsumer = AuthContext.Consumer;
const AuthProvider = AuthContext.Provider;

export default class AuthenticationProvider extends React.Component{

    state = {
        loggedUser: null
    }

    constructor(){
        super();
        this.service = new AuthenticationApiService();
      }

    async componentDidMount(){
        const isLogged = this.service.isLogged();
        if(isLogged){
            this.refresh(this.service.getLoggedUser());
        }
    }

    refresh = (loggedUser) => {
        this.setState({loggedUser})
    }

    render(){
        const context = {
            loggedUser: this.state.loggedUser,
            refresh: this.refresh
        }

        return(
            <AuthProvider value={context} >
                {this.props.children}
            </AuthProvider>
        )
    }
}