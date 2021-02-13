import { PIE_COLORS } from './constants';

export const getColorScale = (dataLength, startingIndex) => {
  let loopingIndex = startingIndex;
  const colorScale = [];

  for (let i = 0; i < dataLength; i += 1) {
    if (loopingIndex > PIE_COLORS.length - 1) {
      loopingIndex = 0;
    }
    colorScale.push(PIE_COLORS[loopingIndex]);
    loopingIndex += 1;
  }

  return colorScale;
};

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
