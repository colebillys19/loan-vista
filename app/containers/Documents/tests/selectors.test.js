import makeSelectDocuments, {
  makeSelectDocumentsData,
  makeSelectSortValues,
  selectDocumentsDomain,
} from '../selectors';
import { MOCK_DATA, MOCK_RAW_DATA } from './mockData';

describe('selectDocumentsDomain', () => {
  const documentsDomainState = {};
  const mockedState = { documents: documentsDomainState };

  it('should select the documents state', () => {
    expect(selectDocumentsDomain(mockedState)).toEqual(documentsDomainState);
  });
});

describe('makeSelectDocuments', () => {
  const prop = 'documentsData';
  const documentsData = [];
  const documentsSelector = makeSelectDocuments(prop);
  const mockedState = { documents: { documentsData } };

  it('should use the prop passed to select the proper substate', () => {
    expect(documentsSelector(mockedState)).toEqual(documentsData);
  });
});

describe('makeSelectDocumentsData', () => {
  const documentsDataSelector = makeSelectDocumentsData();
  const documentsData = MOCK_DATA;
  const documentsRawData = MOCK_RAW_DATA;
  const mockedState = { documents: { documentsData: documentsRawData } };

  it('selects and formats the documents data', () => {
    expect(documentsDataSelector(mockedState)).toEqual(documentsData);
  });
});

describe('makeSelectSortValues', () => {
  const sortValuesSelector = makeSelectSortValues();
  const fetchParams = {
    currentTotal: '80',
    dateFrom: '',
    dateTo: '',
    keyword: '',
    sortCol: 'date',
    sortOrder: 'desc',
  };
  const mockedState = { documents: { fetchParams } };
  const expected = { sortCol: 'date', sortOrder: 'desc' };

  it('selects the sort values', () => {
    expect(sortValuesSelector(mockedState)).toEqual(expected);
  });
});
