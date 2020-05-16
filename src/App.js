import React from 'react'
import {Switch, Route} from 'react-router-dom'
import HomePage from './pages/Home'
import LoginPage from './pages/Login'
import SignUpPage from './pages/SignUp'
import ToBug from './pages/Bugs'

function App(){
    return(
    <div>
        <Switch>
            <Route path='/' component={HomePage} exact />
            <Route path='/SignUp' component={SignUpPage}/>
            <Route path='/login' component={LoginPage}/>
            <Route path='/Home' component={HomePage}/>
            <Route path='/Bugs' component={ToBug}/>
        </Switch>   
    </div>


    )

}
export default App