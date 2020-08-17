import { createMuiTheme } from '@material-ui/core/styles';

import { appColorA, appColorC, appErrorColor } from './styleConstants';

const muiTheme = createMuiTheme({
  palette: {
    error: {
      main: appErrorColor,
    },
    primary: {
      main: appColorA,
    },
    secondary: {
      main: appColorC,
    },
  },
});

export default muiTheme;
