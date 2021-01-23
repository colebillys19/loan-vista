import makeSelectCalls, {
  makeSelectCallsData,
  makeSelectSortValues,
  selectCallsDomain,
} from '../selectors';
import { MOCK_DATA, MOCK_RAW_DATA } from './mockData';

describe('selectCallsDomain', () => {
  const callsDomainState = {};
  const mockedState = { calls: callsDomainState };

  it('should select the calls state', () => {
    expect(selectCallsDomain(mockedState)).toEqual(callsDomainState);
  });
});

describe('makeSelectCalls', () => {
  const prop = 'callsData';
  const callsData = [];
  const callsSelector = makeSelectCalls(prop);
  const mockedState = { calls: { callsData } };

  it('should use the prop passed to select the proper substate', () => {
    expect(callsSelector(mockedState)).toEqual(callsData);
  });
});

describe('makeSelectCallsData', () => {
  const callsDataSelector = makeSelectCallsData();
  const callsData = MOCK_DATA;
  const callsRawData = MOCK_RAW_DATA;
  const mockedState = { calls: { callsData: callsRawData } };

  it('selects and formats the calls data', () => {
    expect(callsDataSelector(mockedState)).toEqual(callsData);
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
  const mockedState = { calls: { fetchParams } };
  const expected = { sortCol: 'date', sortOrder: 'desc' };

  it('selects the sort values', () => {
    expect(sortValuesSelector(mockedState)).toEqual(expected);
  });
});