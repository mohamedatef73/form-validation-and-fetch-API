import React from 'react'
import { Link } from 'react-router-dom'
import Forms from './forms'

function LoginForm(){
    return(
        <div className='row d-flex justify-contnet-center align-items-center'>
            <div className='col-12 col-md-6'>
                <div className='card'>
                    <div className='card-body'>
                        <div className='row justify-content-center mt-2'>
                            <div>
                                <p>welcome back!</p>
                            </div>
                        </div>

                        <Forms placeholder='email' type='email'/>
                        <Forms placeholder='password' type='password'/>

                        <div className='row justfiy-conetnt-center'>
                            <button className='btn btn-success '>Log in</button>
                            <button className='btn btn-link'>
                                <Link to='/SignUp'>Sign Up</Link>
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
export default LoginForm