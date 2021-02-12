export const handleMouseOut = (setFocusedSlice) => [
  { mutation: () => ({ active: undefined }), target: 'labels' },
  {
    mutation: () => {
      setFocusedSlice('');
    },
  },
];

export const handleMouseOver = (setFocusedSlice) => [
  { mutation: () => ({ active: true }), target: 'labels' },
  {
    mutation: ({ datum: { _x } }) => {
      setFocusedSlice(_x);
    },
  },
];
