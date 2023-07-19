// require("dotenv").config();
// const express = require("express");
// const morgan = require("morgan");
// const bodyParser = require("body-parser");
// const mongoose = require("mongoose");
// const jwt = require("jsonwebtoken");
// const path = require("path");

// const productRoutes = require("./routes/product"); // Corrected the import statement
// // const orderRoutes = require("./routes/order");
// // const userRoutes = require("./routes/user");

// dotenv.config();
// const mongoURI = process.env.MONGO_URI;
// mongoose.connect(mongoURI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });
// const db = mongoose.connection;
// db.on("error", (error) => console.error(error));
// db.once("open", () => console.log("Connected to MongoDB"));

// const app = express();
// app.use("/uploads", express.static("uploads"));
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

// const authenticateToken = (req, res, next) => {
//   const token = req.header("Authorization");
//   if (!token) return res.status(401).json({ message: "Access denied" });

//   jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
//     if (err) return res.status(403).json({ message: "Invalid token" });
//     req.user = user;
//     next();
//   });
// };

// // Routes which should handle requests
// app.use("/products", productRoutes);
// app.use("/orders", orderRoutes);
// app.use("/user", authenticateToken, userRoutes);

// app.use(morgan("dev"));

// app.use(express.static(path.join(__dirname, "../client/build")));

// // Serve the index.html file for all other routes to let React handle routing
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "../client/build/index.html"));
// });

// const port = process.env.PORT || 3001;

// app.listen(port, console.log(`Server is listening on port ${port}...`));

require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const path = require("path");

const productRoutes = require("./routes/product");
const orderRoutes = require("./routes/order"); // Add this line
const userRoutes = require("./routes/user"); // Add this line

const mongoURI = process.env.MONGO_URI;
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to MongoDB"));

const app = express();
app.use("/uploads", express.static("uploads"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const authenticateToken = (req, res, next) => {
  const token = req.header("Authorization");
  if (!token) return res.status(401).json({ message: "Access denied" });

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.status(403).json({ message: "Invalid token" });
    req.user = user;
    next();
  });
};

// Routes which should handle requests
app.use("/products", productRoutes);
app.use("/orders", orderRoutes); // Add this line
app.use("/user", authenticateToken, userRoutes); // Add this line

app.use(morgan("dev"));

app.use(express.static(path.join(__dirname, "../client/build")));

// Serve the index.html file for all other routes to let React handle routing
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

const port = process.env.PORT || 3001;

app.listen(port, console.log(`Server is listening on port ${port}...`));
