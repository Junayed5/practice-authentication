import React, { useState } from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);
    const [signInWithGoogle] = useSignInWithGoogle(auth)

    const handleEmailBlur = event => {
        setEmail(event.target.value)
    }
    const handlePasswordBlur = event => {
        setPassword(event.target.value)
    }

    const submitLogIn = event => {
        event.preventDefault();
        signInWithEmailAndPassword(email,password)

        navigate('/')
    }

    const handleGoogleSignIn = () =>{
        signInWithGoogle()
    } 

    return (
        <div>
            <h2>Please Login!</h2>
            <form onSubmit={submitLogIn}>
                <input onBlur={handleEmailBlur} type="email" name="" id="" placeholder='Enter your email'/><br />
                <input onBlur={handlePasswordBlur} type="password" name="" id="" placeholder='Password'/> <br />
                <p>Create new <Link to='/register'>Register now</Link></p>
                <input type="submit" value="Login" />
            </form>
            <button onClick={handleGoogleSignIn}>Continue With Google</button>
        </div>
    );
};

export default Login;