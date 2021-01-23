const express = require('express');

const router = express.Router();

const getCalls = require('./calls');
const getDocuments = require('./documents');
const getLoanData = require('./loan');
const getPayments = require('./payments');

router.use('/calls', getCalls);
router.use('/documents', getDocuments);
router.use('/loan', getLoanData);
router.use('/payments', getPayments);

module.exports = router;
