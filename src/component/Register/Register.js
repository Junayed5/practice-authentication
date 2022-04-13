import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const Register = () => {

    const [email, setEmail] =useState('')
    const [password, setPassword] =useState('')

    const [createUserWithEmailAndPassword] = useCreateUserWithEmailAndPassword(auth)

    const handleEmailBlur = event => {
        setEmail(event.target.value)
    }
    const handlePasswordBlur = event => {
        setPassword(event.target.value)
    }

    const handleSubmit = event => {
        event.preventDefault();
        createUserWithEmailAndPassword(email,password)
        .then(() => {
            console.log('added done');
        })
        .catch(error =>{
            console.error(error);
        })
    }
    return (
        <div>
            <h2>Please Register</h2>
            <form onSubmit={handleSubmit}>
                <input onBlur={handleEmailBlur} type="email" name="" id="" placeholder='Enter your email'/><br />
                <input onBlur={handlePasswordBlur} type="password" name="" id="" placeholder='Password'/> <br />
                <p>Have account <Link to='/login'>Please login</Link></p>
                <input type="submit" value="Register" />
            </form>
        </div>
    );
};

export default Register;