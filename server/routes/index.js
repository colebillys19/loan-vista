const express = require('express');
const router = express.Router();

const getCalls = require('./calls');
const getEmails = require('./emails');
// const escrowRouter = require('./escrow');
const getLoanData = require('./loan');
const getPayments = require('./payments');

router.use('/calls', getCalls);
router.use('/emails', getEmails);
// router.use('/escrow', escrowRouter);
router.use('/loan', getLoanData);
router.use('/payments', getPayments);

module.exports = router;
