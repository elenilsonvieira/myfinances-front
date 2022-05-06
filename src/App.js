import React from 'react';
import 'bootswatch/dist/flatly/bootstrap.css';
import './App.css';

import Login from './screens/login/Login';

export default class App extends React.Component {

  render(){
    return(
      <div>
        <Login />
      </div>
    )
  }

}


