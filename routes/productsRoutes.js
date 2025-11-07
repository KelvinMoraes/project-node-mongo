const express = require('express');

const router = express.Router();

const ProductController = require('../controllers/ProductController');

router.get('/', ProductController.getProducts);
router.get('/createView', ProductController.createProductsView);
router.post('/createData', ProductController.createProductsData);

module.exports = router;
