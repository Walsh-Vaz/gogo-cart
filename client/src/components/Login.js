// import React from "react";

// export default function login(){
//     return(
//     <div className='card'>
//         Login Page
//     </div>
//     )
// }

import React, { useState } from "react";

export default function Login() {
  // State to hold the login credentials
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle the login logic, like sending the credentials to the server
    // For now, we'll just log the credentials
    console.log("Username:", username);
    console.log("Password:", password);
  };

  return (
    <div className="card">
      <h2>Login Page</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
