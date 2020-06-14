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

        if(usersData.length){

            usersData.forEach(user => {
                if(user.email === data.email){
                    setError('this email already taken')
                }else{
                    usersData = [...usersData, data]
                }
            })
        }else{
            usersData = [...usersData, data]
        }

        localStorage.setItem('accounts', JSON.stringify(usersData))
        console.log(data)
    }
    
    return(
        <div className='container'>
            <SignUpForm authentication={submit} backendError={error} />
        </div>
    )
})
export default SignUpPage