// once your database OK's your login information
// then signToken would return a new hashed jwt (At frontend, you save it to localstorage using frontend auth.js)

// authMiddleware is what you check for every request to the backend that's supposed to be authhoritized to the user
// and it works by checking the token that is sent from localStorage with every request.

// Elsewhere in your routes, you might pass in authMiddleware to a route if it is authorized only
// router.route("/users/profile").get(authMiddleware, getMyProfile)



const jwt = require('jsonwebtoken');

const secret = 'mysecretssshhhhhhh';
const expiration = '2h';

module.exports = {
  signToken: function ({ email, username, _id }) {
    const payload = { email, username, _id };
    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};
