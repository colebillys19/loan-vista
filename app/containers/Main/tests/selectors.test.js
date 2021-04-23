import makeSelectMain, {
  makeSelectDashboardBorrowerData,
  makeSelectDashboardListsData,
  makeSelectDashboardLoanData,
  makeSelectEscrowEscrow,
  makeSelectEscrowHomeowners,
  makeSelectEscrowMortgage,
  makeSelectEscrowTaxes,
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

describe('makeSelectDashboardBorrowerData', () => {
  const dashboardBorrowerDataSelector = makeSelectDashboardBorrowerData();
  const mockedState = { main: MOCK_DATA };
  const expected = [
    {
      listData: [
        { label: 'Name', value: 'Alexa Dailor' },
        { label: 'Address', value: '22 Lyon Cir' },
        { label: '', value: 'Sparks, NV 89431' },
        { label: 'Phone', value: '(775) 322-4192' },
        { label: 'Email', value: 'a.dailor@mail.com' },
        { label: 'SSN', value: '*****2891' },
      ],
      title: 'Borrower 1',
    },
    {
      listData: [
        { label: 'Name', value: 'Jim Simms' },
        { label: 'Address', value: '6 Canyon Way, Bldg 2, Unit 4' },
        { label: '', value: 'Reno, NV 89521' },
        { label: 'Phone', value: '(775) 851-1113' },
        { label: 'Email', value: 'j.simms@mail.com' },
        { label: 'SSN', value: '*****3511' },
      ],
      title: 'Borrower 2',
    },
  ];

  it('selects the dashboard borrower data', () => {
    expect(dashboardBorrowerDataSelector(mockedState)).toEqual(expected);
  });
});

describe('makeSelectDashboardListsData', () => {
  const dashboardListsDataSelector = makeSelectDashboardListsData();
  const mockedState = { main: MOCK_DATA };
  const expected = {
    callsData: [
      {
        audio: 'iaculis_diam.mp3...',
        date: '12/29/2020',
        dept: 'BSDV',
        desc: 'magna bibendum imper...',
        id: 'cb50e5c5-fed2-43da-8a47-fc8f7df96222',
        rep: 'MNL',
        time: '08:13 AM',
      },
    ],
    documentsData: [
      {
        'date sent': '12/29/2020',
        desc: '-',
        from: 'JPP...',
        id: '1311f935-a8f4-4c63-b339-a3b4cd93c287',
        pdf: 'integer_aliquet...',
        'time sent': '08:59 PM',
        type: 'Email',
      },
    ],
    paymentsData: [
      {
        accidentHealthInsurance: '$66.86',
        accruedLateCharge: '$70.42',
        date: '12/30/2020',
        desc: 'Principal Curtailment',
        effectiveDate: '01/02/2020',
        escrow: '$41.02',
        escrowBalance: '$38.82',
        fees: '$74.24',
        id: '29ba8a70-19d3-4ddf-b4ff-879b4f8c8fe6',
        interest: '$25.00',
        lifeInsurance: '$55.66',
        misc: '$45.28',
        otherTotal: '$11.32',
        principal: '$36.02',
        principalBalance: '$8.68',
        replacementReserve: '$97.76',
        restrictedReserve: '$15.48',
        suspense: '$83.46',
        time: '04:12 AM',
        total: '$14.93',
      },
    ],
  };

  it('selects the dashboard lists data', () => {
    expect(dashboardListsDataSelector(mockedState)).toEqual(expected);
  });
});

describe('makeSelectDashboardLoanData', () => {
  const dashboardLoanDataSelector = makeSelectDashboardLoanData();
  const mockedState = { main: MOCK_DATA };
  const expected = {
    balancesData: {
      listData: [
        { label: 'Escrow', value: '1,090.33' },
        { label: 'Advance', value: '0.11' },
        { label: 'Suspense', value: '33.84' },
        { label: 'Late Charge Due', value: '4.00' },
        { label: 'Replacement Reserve', value: '11.00' },
        { label: 'Res Esc', value: '20.60' },
        { label: 'Interest Due', value: '5.02' },
        { label: 'HUD', value: '2.22' },
        { label: 'Deficit', value: '891.20' },
        { label: 'Disc Bal', value: '3.90' },
        { label: 'Original Disbursement', value: '2.00' },
        { label: 'Original Loan', value: '95,000.00' },
      ],
      title: 'Balances',
    },
    paymentData: {
      listData: [
        { label: 'Principal & Interest', value: '823.30' },
        { label: '2nd Principal & Interest', value: '98.00' },
        { label: 'Escrow', value: '3,121.10' },
        { label: 'Replacement Reserve', value: '22.99' },
        { label: 'Miscellaneous', value: '5.50' },
        { label: 'Life Insurance', value: '11.00' },
        { label: 'Accident & Health', value: '3.10' },
        { label: 'BSC', value: '2.00' },
        { label: 'Total', value: '11,301.91' },
        { label: 'HUD-P', value: '2.00' },
        { label: 'Net Payment', value: '11,301.91' },
        { label: 'Payment Frequency', value: '17' },
      ],
      title: 'Payment',
    },
    stopsData: [
      {
        date: '2/3/2019',
        desc: 'User Defined - 1',
        name: 'PROCESS',
      },
    ],
  };

  it('selects the dashboard loan data', () => {
    expect(dashboardLoanDataSelector(mockedState)).toEqual(expected);
  });
});

describe('makeSelectEscrowEscrow', () => {
  const escrowEscrowDataSelector = makeSelectEscrowEscrow();
  const mockedState = { main: MOCK_DATA };
  const expected = {
    currentListData: {
      listData: [
        { label: 'Current Due Date', value: '5/6/2021' },
        { label: 'Current Escrow Payment', value: '$122.49' },
        { label: 'Current Escrow Balance', value: '$816.24' },
      ],
    },
    currentPieData: [
      {
        color: 'rgb(246, 153, 96)',
        tooltipValue: 12.34,
        x: 'Flood Insurance (F, 10101)',
        y: 47.866499999999995,
      },
      {
        color: 'rgb(85, 159, 250)',
        tooltipValue: 691,
        x: 'Mortgage Insurance (YEET, Y12345)',
        y: 691,
      },
      {
        color: 'rgb(239, 106, 105)',
        tooltipValue: 1211.32,
        x: 'County/City Tax (497382112)',
        y: 1211.32,
      },
    ],
    effectiveListData: {
      listData: [
        { label: 'Last/Next Escrow Analysis Date', value: 'May 2022' },
        { label: 'Effective Due Date', value: 'Feb 2020' },
        { label: 'Effective Escrow Payment', value: '$599.32' },
      ],
    },
    effectivePieData: [
      {
        color: 'rgb(80, 103, 55)',
        tooltipValue: 67.55,
        x: 'Hazard Insurance (H, 90105)',
        y: 67.55,
      },
      {
        color: 'rgb(255, 191, 0)',
        tooltipValue: 690,
        x: 'Mortgage Insurance (MGIC, GE57A)',
        y: 690,
      },
      {
        color: 'rgb(140, 142, 209)',
        tooltipValue: 1211.31,
        x: 'County/City Tax (497382197)',
        y: 1211.31,
      },
    ],
  };

  it('selects the escrow escrow data', () => {
    expect(escrowEscrowDataSelector(mockedState)).toEqual(expected);
  });
});

describe('makeSelectEscrowHomeowners', () => {
  const escrowHomeownersDataSelector = makeSelectEscrowHomeowners();
  const mockedState = { main: MOCK_DATA };
  const expected = [
    {
      'Annual Premium': '$67.55',
      Company: '90105',
      id: '78f016c8-3903-474d-92b0-d12151a6b258',
      'Insurance Type': 'Hazard',
      'Policy Expiration': '9/20/2022',
      'Policy Type': 'H',
    },
  ];

  it('selects the escrow homeowners data', () => {
    expect(escrowHomeownersDataSelector(mockedState)).toEqual(expected);
  });
});

describe('makeSelectEscrowMortgage', () => {
  const escrowMortgageDataSelector = makeSelectEscrowMortgage();
  const mockedState = { main: MOCK_DATA };
  const expected = [
    {
      Company: 'MGIC',
      id: '2cb873c2-9800-450a-aacd-dafde84b1e8e',
      'Insurance ID': 'GE57A',
      'Premium Amount': '$690.00',
      'Premium Due': '5/1/2021',
    },
  ];

  it('selects the escrow mortgage data', () => {
    expect(escrowMortgageDataSelector(mockedState)).toEqual(expected);
  });
});

describe('makeSelectEscrowTaxes', () => {
  const escrowTaxesDataSelector = makeSelectEscrowTaxes();
  const mockedState = { main: MOCK_DATA };
  const expected = [
    {
      'Expected Amount': '$1,211.31',
      id: '123c3ac3-dbf4-459d-b7bb-ecfbeef593ff',
      'Next Due': '7/1/2021',
      'Paid To': '*****1313',
      'Tax ID': '497382197',
      'Tax Type': 'County/City',
    },
  ];

  it('selects the escrow taxes data', () => {
    expect(escrowTaxesDataSelector(mockedState)).toEqual(expected);
  });
});

describe('makeSelectSidebarHeaderData', () => {
  const sidebarHeaderDataSelector = makeSelectSidebarHeaderData();
  const mockedState = { main: MOCK_DATA };
  const expected = {
    addressA: '43 Heritage Knoll Ct',
    addressB: 'Carson City, NV 89701',
    loanNumber: '1234567890',
    name: 'Peter Knowles',
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
      { label: 'Loan Type', value: 'FHA RESIDENTIAL' },
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
