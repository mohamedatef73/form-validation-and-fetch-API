import React from 'react'
import LoginForm from '../components/loginForm'
 
function LoginPage(){
    function submit(data){
        console.log(data)
    }
    return(
        <div className='container'>
            <LoginForm handleSubmit={submit}/>
        </div>
    )
}
export default LoginPage