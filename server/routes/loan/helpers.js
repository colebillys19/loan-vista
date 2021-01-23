const fs = require('fs');

const getRecentListData = (loanNumber) => {
  const callsJson = fs.readFileSync(
    `server/mockData/LOAN_${loanNumber}/CALLS_DATA.json`,
  );
  const documentsJson = fs.readFileSync(
    `server/mockData/LOAN_${loanNumber}/DOCUMENTS_DATA.json`,
  );
  const paymentsJson = fs.readFileSync(
    `server/mockData/LOAN_${loanNumber}/PAYMENTS_DATA.json`,
  );

  const callsData = JSON.parse(callsJson);
  const documentsData = JSON.parse(documentsJson);
  const paymentsData = JSON.parse(paymentsJson);

  return {
    recentCalls: callsData.slice(0, 5),
    recentDocuments: documentsData.slice(0, 5),
    recentPayments: paymentsData.slice(0, 5),
  };
};

module.exports = { getRecentListData };
