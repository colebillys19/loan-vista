export const MOCK_DATA = {
  currentListData: {
    listData: [
      { label: 'Current Due Date', value: '05/06/2021' },
      { label: 'Current Escrow Payment', value: '$123.45' },
      { label: 'Current Escrow Balance', value: '$876.54' },
    ],
  },
  currentPieData: [
    { color: 'red', tooltipValue: 1, x: 'County/City Tax', y: 123.4 },
    { color: 'green', tooltipValue: 1, x: 'Other Tax', y: 67.8 },
    { color: 'blue', tooltipValue: 1, x: 'County Tax', y: 90 },
  ],
  effectiveListData: {
    listData: [
      { label: 'Last/Next Escrow Analysis Date', value: 'May 2022' },
      { label: 'Effective Due Date', value: '02/20' },
      { label: 'Effective Escrow Payment', value: '$654.32' },
    ],
  },
  effectivePieData: [
    { color: 'red', tooltipValue: 1, x: 'County/City Tax', y: 123.4 },
    { color: 'green', tooltipValue: 1, x: 'Other Tax', y: 67.8 },
    { color: 'blue', tooltipValue: 1, x: 'County Tax', y: 90 },
  ],
};
