import React from "react";
import "../styles.css"

function shopping(){
    alert("Oww!!! You Clicked Me");
}

export default function homepage() {
return(
    <>
    <div className="HomePageImage">
        <h1>Image</h1>
    </div>
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
    <div>
        <button className ="ShoppingBtn" onClick={shopping}>
            Start shopping
        </button>
    </div>
    </>
)};
