module.exports = {
    database: {
      uri: process.env.MONGO_URI || "mongodb://localhost:27017/gogocart",
    },
    secretKey: process.env.JWT_SECRET || "mysecretkey",
    port: process.env.PORT || 3001,
  };
  