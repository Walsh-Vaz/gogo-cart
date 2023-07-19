import React from "react";
import '../styles.css';
// import NavigationBar from '../components/navbar'
import Homepage from '../components/homepage'
import MainHomePage from '../components/MainHomePage'


export default function home() {
    // All functional components must have a return method that contains JSX.
    // We return all the JSX inside a parent element with a className of "container".
    // const Title = "GoGoGrocery";
    return (
        <div className='main'>
            <div>
                <MainHomePage/>
            </div>
            <div>
                <Homepage/>
            </div>
        </div>
    );
}
