require('dotenv').config()
const http = require('http'); 
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser'); 
const connectDB = require('./db/connect')

const productRoutes = require('./routes/products');
const orderRoutes = require('./routes/orders');
const userRoutes = require('./routes/user');

const app = express();

// Routes which should handle requests
app.use('/products', productRoutes);
app.use('/orders', orderRoutes);
app.use('/user', userRoutes);

// Log request data
app.use(morgan('dev'));

// Setup static files path
app.use('/uploads', express.static('uploads'));

// Use body parser middleware to parse body of incoming requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Setup CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
    }
    next();
});

// Handle Error Requests
app.use((req, res, next) => {
    const error = new Error();
    error.message = 'Not Found';
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500).json({
        error: error
    });
});

const port = process.env.PORT || 3000;
 
const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`Server is listening on port ${port}...`))
    } catch (err) {
        console.log(err);
    }
};

start()