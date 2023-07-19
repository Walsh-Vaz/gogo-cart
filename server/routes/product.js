const express = require('express');
const router = express.Router();
const multer = require('multer');

const checkAuth = require('../middleware/check-auth');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});

 

const upload = multer({
    storage: storage,
    limits: {
        fileSize: 1024 * 1024 * 5
    } 
});

const ProductsController = require('../controllers/products');

router.get('/', checkAuth, ProductsController.getAllProducts);

router.post('/', checkAuth, upload.single('productImage'), ProductsController.createOneProduct);

router.get('/:productId', checkAuth, ProductsController.getOneProduct);

router.patch('/:productId', checkAuth,  ProductsController.updateOneProduct);

router.delete('/:productId', checkAuth, ProductsController.deleteOneProduct);

module.exports = router;