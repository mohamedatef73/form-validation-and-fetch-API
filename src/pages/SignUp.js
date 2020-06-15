import React,{useState} from 'react'
import SignUpForm from '../components/signUpForm'


const SignUpPage =(() =>{
    const [error,setError] = useState('')

    function submit(data){
        let users = localStorage.getItem('accounts')

        if(!users){
            localStorage.setItem('accounts', JSON.stringify([]))
        }

        let usersData = users ? JSON.parse(users) : []


        let emailTaken = usersData.find(user => user.email === data.email)
        if(emailTaken !== undefined){
            setError('this email is already taken')
        }else{
            usersData = [...usersData,data]
            setError('')

            localStorage.setItem('accounts', JSON.stringify(usersData))
        }    
    }
    return(
        <div className='container'>
            <SignUpForm authentication={submit} backendError={error} />
        </div>
    )
})
export default SignUpPage