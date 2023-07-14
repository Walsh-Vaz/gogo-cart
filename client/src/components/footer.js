import React from "react";
import '../styles.css';
import { Link } from 'react-router-dom';

export default function footer(){
    return (
    <div className="footer">
        <div className="MainFooterGrid">
                <div className="FooterGrid">
                    <div className="FooterTitle">
                    GoGoGrocery
                    </div>
                    <ul className="footerList">
                        <li className="list">
                            Terms Of Service
                        </li>
                        <li>
                            Careers
                        </li>
                        <li>
                            COVID-19
                        </li>
                        <li>
                            About Us
                        </li>
                        <li>
                            FAQ
                        </li>
                    </ul>
                    <div className='FooterBtn'>
                        <Link className="FooterLogin" to={`/login`}>
                            login
                        </Link>
                        <Link className="FooterSignup" to={`/signup`}>
                            Signup
                        </Link>
                    </div>
                </div>
            <div className="copyright">© Copyright By Carleton BootCamp Students</div>
        </div>
    </div>
    );
}