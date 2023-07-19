import React from "react";
import '../styles.css';
import { Link } from 'react-router-dom';


export default function navbar() {
    return (
        <div className='navbar'>
            <a href="http://localhost:3000/" className='title'>GoGoGrocery</a>
            <input className="navbarSearch" name="SearchInput" placeholder="Search"/>
            <div className='navbarBtn'>
                <Link className="login" to={`/login`}>
                    login
                </Link>
                <Link className="signup" to={`/signup`}>
                    Signup
                </Link>
            </div>
        </div>
    );
}
