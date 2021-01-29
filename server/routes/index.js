const express = require('express');

const router = express.Router();

const getCalls = require('./calls');
const getDocuments = require('./documents');
const getLoanData = require('./loan');
const getPayments = require('./payments');

router.get('/calls', getCalls);
router.get('/documents', getDocuments);
router.get('/loan', getLoanData);
router.get('/payments', getPayments);

module.exports = router;
