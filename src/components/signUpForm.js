import React,{useState,useEffect} from 'react'
import FormInputs from './form'
import { Link } from 'react-router-dom'


const SignUpForm = ((props) =>{
  
  const [name,setName] = useState('')
  const [nameErr,setNameErr] = useState('')
  const [email,setEmail] = useState('')
  const [emailErr,setEmailErr] = useState('') 
  const [password,setPassword] = useState('')
  const [passwordErr,setPasswordErr] = useState('')
  const [passwordConfirmation,setPasswordConfirmation] = useState('')
  const [passwordConfirmationErr,setPasswordConfirmationErr] = useState('')

  useEffect(()=>{
    setEmailErr(props.backendError)

  },[props.backendError,emailErr])


 function validation(){ 
  const nameValid = isName()
    const emailValid = isEmail()
    const passwordValid = isPassword()
    const passwordConfirmationValid = isPasswordConfirmation()

    if(nameValid & emailValid & passwordValid & passwordConfirmationValid){
      let data = {
        name,
        email,
        password,
        passwordConfirmation
      }
      props.authentication(data)
    }
  }


  function isName(){
    if(name.length < 6 ){
      setNameErr('plz write ur name')
      return false
    }else{
      setNameErr('')
      return true
    }
  }

  function isEmail(){
    if(email.length === 0){
      setEmailErr('plz write ur email')
      return false
    }else{
      setEmailErr('')
      return true
    }
  }

  function isPassword(){
    if(password.length < 8 || password.length > 15){
      setPasswordErr('the password must be between 8 to 15 charachters')
      return false
    }else{
      setPasswordErr('')
      return true
    }
  }

  function isPasswordConfirmation() {
    if (passwordConfirmation !== password) {
        setPasswordConfirmationErr('this is not the same!!')
        return false
    } else {
        setPasswordConfirmationErr("")
        return true
    }
}

    return(
        <div className='row d-flex justify-content-center align-items-center'>
            <div className='col-12 col-md-6'>
              <div className='p-3'>
                <div className='card-body'>
                  <span className='row justify-content-center'>
                     <Link to='/Home'>
                      <i className="fa fa-bug"style={{fontSize:75,color:'#20B2AA'}}></i> 
                     </Link>           
                  </span>    

                   <div className='row justify-content-center mt-2'>
                       <div className='col-12 col-md-8 text-center'>
                    <strong><p>go away and be ready to kill the bugs</p></strong> 
                       </div>
                   </div>
                        <FormInputs type='text' placeholder='full name' value={name} handleChange={setName}
                         error={nameErr} resetError={setNameErr} />

                        <FormInputs type='email' placeholder='email' value={email} handleChange={setEmail}
                         error={emailErr} resetError={setEmailErr}/>

                        <FormInputs type='password' placeholder='password' value ={password} handleChange={setPassword}
                         error={passwordErr} resetError={setPasswordErr}/>

                        <FormInputs type='password' placeholder='confirm password' value={passwordConfirmation}
                        handleChange={setPasswordConfirmation}
                         error={passwordConfirmationErr} resetError={setPasswordConfirmationErr}/>

                        <div className='row justify-content-center mt-3'>
                            <div className='col-6 '>
                               <button className='btn btn-success w-100 d-block' onClick={validation}>ready</button>
                                 <button className='btn btn-link w-100'>
                                  <Link to='/login'>i already have one</Link>
                                </button>
                            </div>
                        </div>


                </div> 
              </div>
            </div>
        </div>
    )
})
export default SignUpForm