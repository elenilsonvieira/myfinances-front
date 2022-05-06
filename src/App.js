import React from 'react';
import 'bootswatch/dist/flatly/bootstrap.css';
import './App.css';

import Navbar from './components/NavBar';
import MyRoutes from './main/MyRoutes';

export default class App extends React.Component {

  render(){
    return(
      <div>
        <Navbar />
        <MyRoutes />
      </div>
    )
  }

}


