// once your database OK's your login information
// then signToken would return a new hashed jwt (At frontend, you save it to localstorage using frontend auth.js)

// authMiddleware is what you check for every request to the backend that's supposed to be authhoritized to the user
// and it works by checking the token that is sent from localStorage with every request.