import makeSelectPayments, {
  makeSelectPaymentsData,
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
  const paymentsData = [];
  const paymentsSelector = makeSelectPayments('paymentsData');
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
