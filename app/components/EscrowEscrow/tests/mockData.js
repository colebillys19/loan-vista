import { appColorA, appColorB, appColorC } from 'styleConstants';

export const CURRENT_PIE_MOCK_DATA = [
  { color: appColorA, name: 'County/City Tax', value: 1211.31 },
  { color: appColorB, name: 'Other Tax', value: 60 },
  { color: appColorC, name: 'County Tax', value: 150.45 },
  { color: appColorA, name: 'County Tax', value: 85.12 },
  { color: appColorB, name: 'City Tax', value: 795.5 },
  { color: appColorC, name: 'Hazard Insurance', value: 67.55 },
  { color: appColorA, name: 'Contents/NACCA Loans', value: 49.5 },
  { color: appColorB, name: 'Earthquake Insurance', value: 0 },
  {
    color: appColorC,
    name: 'Liability/Windstorm/Hurricane Insurance',
    value: 0,
  },
  { color: appColorA, name: 'Flood Insurance', value: 85 },
  { color: appColorB, name: 'Mortgage Insurance (Geico)', value: 690 },
  { color: appColorC, name: 'Mortgage Insurance', value: 825.5 },
  { color: appColorA, name: 'Mortgage Insurance (Allstate)', value: 1150 },
];

export const EFFECTIVE_PIE_MOCK_DATA = [
  { color: appColorA, name: 'County/City Tax', value: 997.23 },
  { color: appColorB, name: 'Other Tax', value: 45.3 },
  { color: appColorC, name: 'County Tax', value: 179.56 },
  { color: appColorA, name: 'County Tax', value: 79.2 },
  { color: appColorB, name: 'City Tax', value: 821.44 },
  { color: appColorC, name: 'Hazard Insurance', value: 61.55 },
  { color: appColorA, name: 'Contents/NACCA Loans', value: 62.81 },
  { color: appColorB, name: 'Earthquake Insurance', value: 0 },
  {
    color: appColorC,
    name: 'Liability/Windstorm/Hurricane Insurance',
    value: 0,
  },
  { color: appColorA, name: 'Flood Insurance', value: 82.82 },
  { color: appColorB, name: 'Mortgage Insurance (Geico)', value: 717.77 },
  { color: appColorC, name: 'Mortgage Insurance', value: 808.33 },
  { color: appColorA, name: 'Mortgage Insurance (Allstate)', value: 1192 },
];

export const MOCK_DATA = {
  currentData: {
    listData: [
      { label: 'Current Due Date', value: '05/06/2021' },
      { label: 'Current Escrow Payment', value: '$123.45' },
      { label: 'Current Escrow Balance', value: '$876.54' },
    ],
  },
  effectiveData: {
    listData: [
      { label: 'Last/Next Escrow Analysis Date', value: 'May 2022' },
      { label: 'Effective Due Date', value: '02/20' },
      { label: 'Effective Escrow Payment', value: '$654.32' },
    ],
  },
};
