/**
 *
 * DatePickerTooltip
 *
 */

import Tooltip from '@material-ui/core/Tooltip';
import { withStyles } from '@material-ui/core/styles';

const DatePickerTooltip = withStyles(() => ({
  tooltip: { fontSize: '1rem' },
}))(Tooltip);

export default DatePickerTooltip;
