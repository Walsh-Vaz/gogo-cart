const User = require('./User'); // Import the User model
const Product = require('./Product'); // Import the Product model
const Order = require('./Order'); // Import the Order model

// Export all the models as an object for easy access
module.exports = {
  User,
  Product,
  Order,
};
