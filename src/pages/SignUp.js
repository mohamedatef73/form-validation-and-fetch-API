import React from 'react'
import SignUpForm from '../components/signUpForm'


const SignUpPage =(props) =>{
    function data(tefa){
        console.log(tefa)

    }
    
    return(
        <div className='container'>
            <SignUpForm mohamed={data}/>
        </div>
    )
}
export default SignUpPage