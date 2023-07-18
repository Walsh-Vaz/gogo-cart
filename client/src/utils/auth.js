// you have a class
// and it has functions
// and it can check if logged in [Auth.loggedIn()] which checks localStorage for "token" key
// and it can have a function to log out which clears localStorage "token" key
// and it has log in which saves localStorage "token" key

// jwt is what appears like a random series of letters and numbers
// that can be saved at localstorage
// but when decoded it becomes an object of your user id and other information
// if it CANNOT be decoded, then it's an invalid token

// elsewhere in the frontend / React, you will check if token exists using useEffect
// const token = Auth.loggedIn() to get if user is logged in
// when sending graphQL requests, it also sends token



class Auth {
    static loggedIn() {
      // Check if the user is logged in by looking for the "token" key in localStorage
      const token = localStorage.getItem('token');
      return !!token; // Convert token to boolean (true if token exists, false if null or undefined)
    }
  
    static login(token) {
      // Log in the user by saving the JWT token to localStorage
      localStorage.setItem('token', token);
    }
  
    static logout() {
      // Log out the user by removing the "token" key from localStorage
      localStorage.removeItem('token');
    }
  }
  
  export default Auth;
  