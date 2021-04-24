import makeSelectDocuments, {
  makeSelectDocumentsData,
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
  const documentsData = [];
  const documentsSelector = makeSelectDocuments('documentsData');
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
