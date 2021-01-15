import makeSelectPayments, {
  makeSelectPaymentsData,
  makeSelectSortValues,
  selectPaymentsDomain,
} from '../selectors';
import { MOCK_DATA, MOCK_RAW_DATA } from './mockData';

describe('selectPaymentsDomain', () => {
  const paymentsDomainState = {};
  const mockedState = { payments: paymentsDomainState };

  it('should select the payments state', () => {
    expect(selectPaymentsDomain(mockedState)).toEqual(paymentsDomainState);
  });
});

describe('makeSelectPayments', () => {
  const prop = 'paymentsData';
  const paymentsData = [];
  const paymentsSelector = makeSelectPayments(prop);
  const mockedState = { payments: { paymentsData } };

  it('should use the prop passed to select the proper substate', () => {
    expect(paymentsSelector(mockedState)).toEqual(paymentsData);
  });
});

describe('makeSelectPaymentsData', () => {
  const paymentsDataSelector = makeSelectPaymentsData();
  const paymentsData = MOCK_DATA;
  const paymentsRawData = MOCK_RAW_DATA;
  const mockedState = { payments: { paymentsData: paymentsRawData } };

  it('selects and formats the payments data', () => {
    expect(paymentsDataSelector(mockedState)).toEqual(paymentsData);
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
  const mockedState = { payments: { fetchParams } };
  const expected = { sortCol: 'date', sortOrder: 'desc' };

  it('selects the sort values', () => {
    expect(sortValuesSelector(mockedState)).toEqual(expected);
  });
});
