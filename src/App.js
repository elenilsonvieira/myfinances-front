import React from 'react';
import 'bootswatch/dist/flatly/bootstrap.css';
import './App.css';

import Login from './screens/login/Login';
import CreateUser from './screens/createUser/CreateUser';
import Navbar from './components/NavBar';

export default class App extends React.Component {

  render(){
    return(
      <div>
        <Navbar />
        <CreateUser />
      </div>
    )
  }

}


