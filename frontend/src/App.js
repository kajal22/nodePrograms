 import React, { Component } from 'react';
 import { BrowserRouter, Route, Switch } from "react-router-dom";

// import './App.css';
//  import Login from './components/login'
// import ForgetPassword from './components/forgetPassword'
import {Registration} from './components/regisration'
// import ResetPassword from './components/resetPassword'

 
// using CommonJS modules

export default class App extends Component {
  
  render(){
  return (   
    <div className="App">
<BrowserRouter>
  <Switch>
  <Route path ="/registration" exact component={Registration}></Route>
  </Switch>
</BrowserRouter>


      {/* <Login/> */}
      {/* <ForgetPassword/> */}
      {/* <Registration/> */}
      {/* <ResetPassword/> */}

    </div>
  );
}
}

