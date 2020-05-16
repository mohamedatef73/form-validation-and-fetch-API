import React from 'react'
import FormInputs from './form'
import { Link } from 'react-router-dom'



function LoginForm(){
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
                   
                        <FormInputs type='email' placeholder='email'/>
                        <FormInputs type='password' placeholder='password'/>

                        <div className=' row justify-content-center mt-3'>
                            <div className='col-12 col-md-6'>
                            <button className='btn btn-link w-100 '>
                                <Link to='/Bugs'> i'm ready</Link>
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