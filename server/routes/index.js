const express = require('express');
const router = express.Router();

const callsRouter = require('./calls');
const corrRouter = require('./corr');
// const escrowRouter = require('./escrow');
const loanInfoRouter = require('./loanInfo');
const paymentsRouter = require('./payments');

router.use('/calls', callsRouter);
router.use('/correspondence', corrRouter);
// router.use('/escrow', escrowRouter);
router.use('/', loanInfoRouter);
router.use('/payments', paymentsRouter);

module.exports = router;
