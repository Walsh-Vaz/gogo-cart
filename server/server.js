// require("dotenv").config();
// const http = require("http");
// const express = require("express");
// const morgan = require("morgan");
// const bodyParser = require("body-parser");
// const connectDB = require("./db/connect");
// const path  = require ("path")

// const productRoutes = require("./routes/products");
// const orderRoutes = require("./routes/orders");
// const userRoutes = require("./routes/user");

// const app = express();

// // Routes which should handle requests
// app.use("/products", productRoutes);
// app.use("/orders", orderRoutes);
// app.use("/user", userRoutes);

// // Log request data
// app.use(morgan("dev"));

// // Setup static files path
// app.use("/uploads", express.static("uploads"));

// // Use body parser middleware to parse body of incoming requests
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

// // Setup CORS
// app.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept, Authorization"
//   );
//   if (req.method === "OPTIONS") {
//     res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
//     return res.status(200).json({});
//   }
//   next();
// });

// // // Handle Error Requests
// // app.use((req, res, next) => {
// //   const error = new Error();
// //   error.message = "Not Found";
// //   error.status = 404;
// //   next(error);
// // });

// // app.use((error, req, res, next) => {
// //   res.status(error.status || 500).json({
// //     error: error,
// //   });
// // });

// const port = process.env.PORT || 3001;

// // if we're in production, serve client/build as static assets
// //if (process.env.NODE_ENV === 'production') {
//   app.use(express.static(path.join(__dirname, '../client/build')));
// //}
// app.get("/", (req, res)=>{
//   res.sendFile(path.join(__dirname, '../client/build/index.html'))
// })


// const start = async () => {
//   try {
//     await connectDB(process.env.MONGO_URI);
//     app.listen(port, console.log(`Server is listening on port ${port}...`));
//   } catch (err) {
//     console.log(err);
//   }
// };

// start();



const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const path = require("path");

dotenv.config();
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
app.use("/orders", orderRoutes);
app.use("/user", authenticateToken, userRoutes);

app.use(morgan("dev"));

app.use(express.static(path.join(__dirname, "../client/build")));

// Serve the index.html file for all other routes to let React handle routing
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

const port = process.env.PORT || 3001;

app.listen(port, console.log(`Server is listening on port ${port}...`));
