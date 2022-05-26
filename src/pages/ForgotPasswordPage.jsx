import React, { useRef, useState } from "react";
import {Link} from 'react-router-dom'
import { makeStyles } from "@material-ui/styles";
import { useAuth } from "../contexts/AuthContext";
import { SetMeal } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";




export default function ForgotPasswordPage(){


    const emailRef = useRef()
    const {resetPassword} = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState('')
    const navigate = useNavigate()
   

  

  
    async function handleSubmit(e){
      e.preventDefault()
      try {
        setMessage('')
        setError('')
        setLoading(true)
       await resetPassword(emailRef.current.value)
       setMessage('Check your inbox for further instructions')
       navigate('/ForgotPassword')
      } catch {
        setError('Falied to reset password')
      }
      setLoading(false)
    }

    return (
        <div style={{
            width: '100%', 
            height: '100vh', 
            display: 'flex', 
            justifyContent: 'center', 
            marginTop: '200px'
            }}
            >
            <div>
                <h1 style={{textAlign: 'center'}}>Reset Password</h1>
                {message ? message : error}
                <input
                ref={emailRef}
                 type='email' 
                 placeholder="Email"
                 style={{
                     width: '100%'
                 }}
                 />
                <button onClick={handleSubmit}>Reset Password</button>
                 <div>     
                <Link to='/Signin'>
                    Sign In
                </Link>
                </div>
                <div>Need an account? <span><Link to='/Signup'>Sign Up</Link></span></div>
            </div>
        </div>
    )
}