import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import './Header.css';

const Header = () => {
    const [user] = useAuthState(auth);
    const handleSignOut = () =>{
        signOut(auth)
    }
    return (
        <nav>
            <Link to='/'>Home</Link>
            <Link to='/service'>Service</Link>
            {user ? <button onClick={handleSignOut}>Sign out</button>:<Link to='login'>Login</Link>}
        </nav>
    );
};

export default Header;