const fs = require('fs');

const { getTargetDocumentsData } = require('./helpers');

const getDocuments = (req, res, next) => {
  try {
    const {
      query: { loanNumber, ...fetchParams },
    } = req;

    const documentsDataJson = fs.readFileSync(
      `server/mockData/LOAN_${loanNumber}/DOCUMENTS_DATA.json`,
    );
    const documentsData = JSON.parse(documentsDataJson);

    const targetDocumentsData = getTargetDocumentsData(
      documentsData,
      fetchParams,
    );

    setTimeout(() => {
      res.send({
        documentsData: targetDocumentsData,
        newFetchParams: fetchParams,
      });
    }, 1000);
  } catch (error) {
    next(error);
  }
};

module.exports = getDocuments;
