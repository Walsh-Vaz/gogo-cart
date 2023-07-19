import React from "react";
import '../styles.css';
// import { Link } from 'react-router-dom';

export default function footer(){
    return (
    <div className="footer">
        <div className="MainFooterGrid">
                <div className="FooterGrid">
                    <a href="http://localhost:3000/" className="FooterTitle">
                    GoGoGrocery
                    </a>
                    <div className="FooterList">
                        <div className="list">
                            Terms Of Service
                        </div>
                        <div className="list">
                            Careers
                        </div>
                        <div className="list">
                            COVID-19
                        </div>
                        <div className="list">
                            <a href="http://localhost:3000/about">About</a>
                        </div>
                        <div className="list">
                            FAQ
                        </div>
                    </div>
                    <div className='FooterBtn'>
                        <a href="http://localhost:3000/login" className="FooterLogin">
                            login
                        </a>
                        <a href="http://localhost:3000/signup" className="FooterSignup">
                            Signup
                        </a>
                    </div>
                </div>
            <div className="copyright">© Copyright By Carleton BootCamp Students</div>
        </div>
    </div>
    );
}
