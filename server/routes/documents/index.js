const fs = require('fs');

const { getPageData } = require('../helpers');
const { getTargetDocumentsData } = require('./helpers');

const getDocuments = (req, res, next) => {
  try {
    const {
      query: { itemsPerPage, loanNumber, pageToFetch, ...fetchParams },
    } = req;

    const documentsDataJson = fs.readFileSync(
      `server/mockData/LOAN_${loanNumber}/DOCUMENTS_DATA.json`,
    );
    const documentsData = JSON.parse(documentsDataJson);

    const targetDocumentsData = getTargetDocumentsData(
      documentsData,
      fetchParams,
    );

    const { pageData, totalPages } = getPageData({
      data: targetDocumentsData,
      itemsPerPage: Number(itemsPerPage),
      pageToFetch: Number(pageToFetch),
    });

    setTimeout(() => {
      res.send({ pageData, params: fetchParams, totalPages });
    }, 1000);
  } catch (error) {
    next(error);
  }
};

module.exports = getDocuments;
