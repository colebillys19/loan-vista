export const FETCH_PAYMENTS_DATA = 'app/Payments/FETCH_PAYMENTS_DATA';
export const FETCH_PAYMENTS_DATA_FAILURE =
  'app/Payments/FETCH_PAYMENTS_DATA_FAILURE';
export const FETCH_PAYMENTS_DATA_SUCCESS =
  'app/Payments/FETCH_PAYMENTS_DATA_SUCCESS';
export const SET_IS_FILTERED = 'app/Payments/SET_IS_FILTERED';

export const PAYMENTS_LIST_HEADERS = {
  formattedHeaders: [
    'Date',
    'Description',
    'Total',
    'Principal',
    'Interest',
    'Escrow',
  ],
  listHeaders: ['date', 'desc', 'total', 'principal', 'interest', 'escrow'],
};
