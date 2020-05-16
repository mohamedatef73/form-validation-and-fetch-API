import React from 'react'
import {Link} from 'react-router-dom'

function HomePage(){
    return(
      <div className='container'>
        <div className='row justify-content-center align-items-center '>
            <div className='col-auto'>
              <Link to='/SignUp'>Sign Up</Link>
              </div>
            <div className='col-auto'>
              <Link to='/Login'>Login</Link>
              </div>  
        </div>
      </div>
    )
}

export default HomePage
