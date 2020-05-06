import React from 'react';
// import './App.css';
import {Switch, Route} from 'react-router-dom';
import SignPage from './pages/SignUpPage'
import Login from './pages/LoginPage'
import HomePage from './pages/HomePage';



function App (){
  return(
    <div>
      <Switch>
        {/* <Route path='/' exact  component={HomePage}  /> */}
        <Route path='/SignUpPage'  component={SignPage}  />
        {/* <Route path='/LoginPage'  component={Login}/> */}
      </Switch>
    </div>
  )
}


export default App;
