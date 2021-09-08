import React, {useState} from 'react'
import {Redirect} from 'react-router-dom';

function Login(){
    const [mail, setMail] = useState("")
    const [password, setPassword] = useState("")

    const handleMail = (e) => {
        setMail(e.currentTarget.value)
    }

    const handlePassword = (e) => {
        setPassword(e.currentTarget.value)
    }

    const validateId = (e) => {
        e.preventDefault()
        // console.log("Hey")
        if(mail == localStorage.getItem('mail') && password == localStorage.getItem('password')){
            alert("Correct")
            return  <Redirect  to="/game" />
        }
    }

    
    return (
        <>
            <form onSubmit={validateId}>
                <input type="email" onChange={handleMail} value={mail} placeholder="Enter mail"/>
                <input type="password" onChange={handlePassword} value={password} placeholder="Enter password"/>
                <button>Submit</button>
            </form>
        </>
    )
}

export default Login