import makeSelectMain, {
  makeSelectSidebarHeaderData,
  makeSelectSidebarSummariesData,
  selectMainDomain,
} from '../selectors';
import { MOCK_DATA } from './mockData';

describe('selectMainDomain', () => {
  const mainDomainState = {};
  const mockedState = { main: mainDomainState };

  it('should select the main state', () => {
    expect(selectMainDomain(mockedState)).toEqual(mainDomainState);
  });
});

describe('makeSelectMain', () => {
  const prop = 'loading';
  const loading = false;
  const mainSelector = makeSelectMain(prop);
  const mockedState = { main: { loading } };

  it('should use the prop passed to select the proper substate', () => {
    expect(mainSelector(mockedState)).toEqual(loading);
  });
});

describe('makeSelectSidebarHeaderData', () => {
  const sidebarHeaderDataSelector = makeSelectSidebarHeaderData();
  const mockedState = { main: MOCK_DATA };
  const expected = {
    address1: '43 Heritage Knoll Ct',
    address2: 'Carson City, NV 89701',
    loanNumber: '0123456789',
    name: 'John Doe',
  };

  it('selects the sidebar header data', () => {
    expect(sidebarHeaderDataSelector(mockedState)).toEqual(expected);
  });
});

describe('makeSelectSidebarSummariesData', () => {
  const sidebarSummariesDataSelector = makeSelectSidebarSummariesData();
  const mockedState = { main: MOCK_DATA };
  const expected = {
    callsSummaryData: [
      { label: 'Total Calls', value: 82 },
      { label: 'Total Notes', value: 27 },
      { label: 'Average Calls/Quarter', value: 4 },
      { label: 'Calls/Last 30 Days', value: 3 },
      { label: 'Average Time/Call', value: '3.61 minutes' },
      { label: 'Most Frequent Reason', value: 'A100' },
    ],
    health: -1,
    loanSummaryData: [
      { label: 'Loan Number', value: '0123456789' },
      { label: 'Status', value: '16-29 Days Delinquent' },
      { label: 'Loan Type', value: 'FHA Residential' },
      { label: 'Principal Balance', value: '$234,456.78' },
      { label: 'Original Loan Amount', value: '$345,678.90' },
      { label: 'Investor Name', value: 'Nevada Housing' },
      { label: 'Investor Code', value: 'N03' },
      { label: 'Assumption Code', value: 'A' },
      { label: 'Assumption Date', value: '6/21/2020' },
      { label: 'Interest Rate', value: '5%' },
      { label: 'Origination Date', value: '1/1/2016' },
      { label: 'Maturity Date', value: '1/1/2046' },
      { label: 'Grace Days', value: 15 },
      { label: 'Lien Position', value: '1st Mortgage' },
    ],
    paymentSummaryData: [
      { label: 'Payment Due', value: '$2,345.67' },
      { label: 'Late Charges Due', value: '$0.00' },
      { label: 'Bad Check Fees', value: '$0.00' },
      { label: 'Other Fees', value: '$123.45' },
      { label: 'Total Due', value: '$2,469.12' },
      { label: 'Due Date', value: '9/21/2020' },
    ],
    serviceSummaryData: [
      { label: 'E-Statements', value: 'Yes' },
      { label: 'Web Access', value: 'Registered' },
      { label: 'Welcome Call', value: 'Yes' },
    ],
  };

  it('selects the sidebar summaries data', () => {
    expect(sidebarSummariesDataSelector(mockedState)).toEqual(expected);
  });
});
