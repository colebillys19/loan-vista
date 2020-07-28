const express = require('express');
const router = express.Router();

const getCalls = require('./calls');
const getCorrespondence = require('./corr');
// const escrowRouter = require('./escrow');
const getLoanData = require('./loan');
const getPayments = require('./payments');

router.use('/calls', getCalls);
router.use('/correspondence', getCorrespondence);
// router.use('/escrow', escrowRouter);
router.use('/loan', getLoanData);
router.use('/payments', getPayments);

module.exports = router;
