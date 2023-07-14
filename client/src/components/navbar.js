import React from "react";
import '../styles.css';
import { Link } from 'react-router-dom';


export default function navbar() {
    return (
        <div className='navbar'>
            <h1 className='title'>GoGoGrocery</h1>
            <input className="navbarSearch" name="SearchInput" placeholder="Search"/>
            <div className='navbarBtn'>
                {/* <a href="/login" className='login'>
                    Login
                </a> */}
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