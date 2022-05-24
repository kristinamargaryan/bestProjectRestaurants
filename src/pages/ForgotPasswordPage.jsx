import React from "react";
import {Link} from 'react-router-dom'
import { makeStyles } from "@material-ui/styles";




export default function ForgotPasswordPage(){
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
                <input
                 type='email' 
                 placeholder="Email"
                 style={{
                     width: '100%'
                 }}
                 />
                <button>Reset Password</button>
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