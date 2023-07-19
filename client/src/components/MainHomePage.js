// import React from "react";
// import "../styles.css"
// import background from "../images/supermarket-banner-concept-with-ingredients.jpg"
// import Trucking from "../fonts/KeeponTruckin.ttf"
// import { Link } from 'react-router-dom';

// export default function MainHomePage(){
//     return(
//         <>
//             <div className="container">
//             <div className='HomePageBtn'>
//                 <Link className="HomePageLogin" to={`/login`}>
//                     login
//                 </Link>
//                 <Link className="HomePageSignup" to={`/signup`}>
//                     Signup
//                 </Link>
//             </div>
//                 <div className="MainTitle">
//                     GoGoGrocery
//                 </div>
//                 <input placeholder="Search" style={{
//                     position: "absolute",
//                     fontFamily: Trucking,
//                     fontWeight: '700',
//                     fontSize: '50px',
//                     height: "50px",
//                     width: "40%",
//                     right: "29.25%",
//                     top: "350px",
//                     textAlign: "center",
//                     borderRadius: "50px",
//                     border: "0",
//                     color:"purple",
//                 }}/>
//                 <img className="MainHomeBackground" src={background} alt="Main Home BackGround"/>
//             </div>
//         </>
//     )
// };

import React from "react";
import "../styles.css";
import background from "../images/supermarket-banner-concept-with-ingredients.jpg";
import Trucking from "../fonts/KeeponTruckin.ttf";
import { Link } from 'react-router-dom';

export default function MainHomePage() {
  return (
    <>
      <div className="container">
        <div className='HomePageBtn'>
          <Link className="HomePageLogin" to={`/login`}>
            Login
          </Link>
          <Link className="HomePageSignup" to={`/signup`}>
            Signup
          </Link>
          <Link className="HomePageAbout" to={`/about`}>
            About
          </Link>
          <Link className="HomePageShop" to={`/shop`}>
            Shop
          </Link>
        </div>
        <div className="MainTitle">
          GoGoGrocery
        </div>
        <input placeholder="Search" style={{
          position: "absolute",
          fontFamily: Trucking,
          fontWeight: '700',
          fontSize: '50px',
          height: "50px",
          width: "40%",
          right: "29.25%",
          top: "350px",
          textAlign: "center",
          borderRadius: "50px",
          border: "0",
          color: "purple",
        }} />
        <img className="MainHomeBackground" src={background} alt="Main Home BackGround" />
      </div>
    </>
  );
}
