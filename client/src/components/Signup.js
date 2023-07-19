import React from "react";
import Navigation from "./navbar";

export default function login(){
    return(
        <div>
            <Navigation/>
            <div className='WholeLogin'>
                <div className="Inputs">
                    <input className="loginInput" type="input" placeholder="First Name"/>
                    <input className="loginInput" type="input" placeholder="Last Name"/>
                    <input className="loginInput" type="email" placeholder="Email"/>
                    <input className="loginInput" type="input" placeholder="Password"/>
                    <input className="SubmitBtn" type="submit" value="Submit"/>
                </div>
            </div>
        </div>
    )
}