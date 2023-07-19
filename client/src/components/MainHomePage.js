import React from "react";
import "../styles.css"
import background from "../images/supermarket-banner-concept-with-ingredients.jpg"
import Trucking from "../fonts/KeeponTruckin.ttf"
import { Link } from 'react-router-dom';

export default function MainHomePage(){
    return(
        <>
            <div className="container">
            <div className='HomePageBtn'>
                <Link className="HomePageLogin" to={`/login`}>
                    login
                </Link>
                <Link className="HomePageSignup" to={`/signup`}>
                    Signup
                </Link>
            </div>
                <div className="MainTitle">
                    GoGoGrocery
                </div>
                <input placeholder="Search" style={{
                    position: "absolute",
                    fontFamily: Trucking,
                    fontWeight: '700',
                    fontSize: '20px',
                    height: "30px",
                    width: "36.5%",
                    right: "31.25%",
                    top: "350px",
                    textAlign: "center",
                    borderRadius: "20px",
                    border: "0",
                }}/>
                <img className="MainHomeBackground" src={background} alt="Main Home BackGround"/>
            </div>
        </>
    )
};