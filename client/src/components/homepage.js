import React from "react";
import "../styles.css"
import { Link } from 'react-router-dom';

export default function homepage() {
return(
    <div className="HomePageTotal">
        <h2 className="cardsTitle">Stored In Your Area</h2>
        <div className="cards">
            <div className="card">
                <h2 className="restoLogo">
                    L
                </h2>
                <h2 className="restoName">Yummy In My Tummy</h2>
            </div>
            <div className="card">
                <h2 className="restoLogo">
                    L
                </h2>
                <h2 className="restoName">Yummy In My Tummy</h2>
            </div>
            <div className="card">
                <h2 className="restoLogo">
                    L
                </h2>
                <h2 className="restoName">Yummy In My Tummy</h2>
            </div>
            <div className="card">
                <h2 className="restoLogo">
                    L
                </h2>
                <h2 className="restoName">Yummy In My Tummy</h2>
            </div>
            <div className="card">
                <h2 className="restoLogo">
                    L
                </h2>
                <h2 className="restoName">Yummy In My Tummy</h2>
            </div>
            <div className="card">
                <h2 className="restoLogo">
                    L
                </h2>
                <h2 className="restoName">Yummy In My Tummy</h2>
            </div>
        </div>
        <div className="ShoppingBtnContainer">
            <Link className ="ShoppingBtn" to={`/shop`}>
                <button className ="ShoppingBtn">
                    Start shopping
                </button>
            </Link>
        </div>

    </div>
)};
