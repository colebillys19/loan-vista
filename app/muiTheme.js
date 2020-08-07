import { createMuiTheme } from '@material-ui/core/styles';

import { appColorA, appColorC } from './styleConstants';

const muiTheme = createMuiTheme({
  palette: {
    primary: {
      main: appColorA,
    },
    secondary: {
      main: appColorC,
    },
  },
});

export default muiTheme;
