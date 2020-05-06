import React from 'react'
import {Link} from 'react-router-dom'

function HomePage(){
    return(
           <div>
               <Link to = '/SignUpPage' > Sign Up</Link><br/>
               <Link to = '/LoginPage' > Login</Link>

           </div>
    )
}

export default HomePage