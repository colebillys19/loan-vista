import { createMuiTheme } from '@material-ui/core/styles';

import { appColorA, appColorB, errorColor } from './styleConstants';

const muiTheme = createMuiTheme({
  palette: {
    error: {
      main: errorColor,
    },
    primary: {
      main: appColorA,
    },
    secondary: {
      main: appColorB,
    },
  },
});

export default muiTheme;
