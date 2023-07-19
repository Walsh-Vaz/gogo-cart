import React from "react";
import '../styles.css';
import { Link } from 'react-router-dom';

export default function footer(){
    return (
    <div className="footer">
        <div className="MainFooterGrid">
                <div className="FooterGrid">
                    <a href="http://localhost:3000/" className="FooterTitle">
                    GoGoGrocery
                    </a>
                    <ul className="footerList">
                        <li className="list">
                            Terms Of Service
                        </li>
                        <li className="list">
                            Careers
                        </li>
                        <li className="list">
                            COVID-19
                        </li>
                        <li className="list">
                            About Us
                        </li>
                        <li className="list">
                            FAQ
                        </li>
                    </ul>
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