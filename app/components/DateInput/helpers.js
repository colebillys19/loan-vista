import { appTextColorB } from 'styleConstants';

export const getColor = (isError, value) => {
  if (value === null) {
    return 'inherit';
  }

  if (isError) {
    return 'red';
  }

  return appTextColorB;
};
