const express = require('express');
const { GetPaymentData, CreatePayment } = require('../controllers');

const router = express.Router();

router.post('/create-payment', CreatePayment);
router.get('/get-payments', GetPaymentData);


module.exports = router;