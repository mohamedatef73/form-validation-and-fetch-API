import React, { useState } from 'react'
import FormInputs from './form'
import { Link } from 'react-router-dom'



function LoginForm(props){

const [email,setEmail] = useState('')
const [emailErr,setEmailErr] = useState('')
const [password,setPassword] = useState('')
const [passwordErr,setPasswordErr] = useState('')

function validationData(){
    const emailValid = isEmailValid()
    const passwordValid = isPasswordValid()

    if(emailValid & passwordValid){
        let data = {
            email,
            password
        }
        props.handleSubmit(data)
    }


}

function isEmailValid(){
    if(email.length === 0){
        setEmailErr ('u have to write ur')
        return false
    }else{
        setEmailErr('')
        return true
    }
}

function isPasswordValid(){
    if(password.length < 8 || password.length > 15){
        setPasswordErr('ur password must be password between 6 to 15 charachter')
        return false
    }else{
        return true
    }
}
    
    return(
        <div className='row justify-content-center align-items-center'>
            <div className ='col-12 col-md-6'>
              <div className='p-3'>
                <div className='card-body'>
                   <span className='row justify-content-center'>
                   <Link to='/Home'>
                     <i className="fa fa-bug"  style={{fontSize:75,color: '#20B2AA'}}></i> 
                     </Link>           
                    </span>    
              
                  <div className=' row justify-content-center mt-3'>
                      <div className='col-12 col-md-8 text-center'>
                           <h4>lets kill the bugs</h4>
                      </div>
                  </div>
                   
                        <FormInputs type='email' placeholder='email' value={email}
                         error={emailErr} handleChange={setEmail}
                        resetError={setEmailErr}/>

                        <FormInputs type='password' placeholder='password' value={email}
                         error={passwordErr} handleChange={setPassword}
                        resetError={setPasswordErr}/>

                        <div className=' row justify-content-center mt-3'>
                            <div className='col-12 col-md-6'>
                            <button className='btn btn-link w-100' onClick={validationData}>
                                 i'm ready
                            </button>
                            <button className='btn btn-link w-100'>
                                <Link to='/SignUp'>don't have an account! lets create one</Link>
                            </button>
                            </div>
                        </div>
                    

                </div>
              </div>
            </div>
        </div>
    )
}
export default LoginForm