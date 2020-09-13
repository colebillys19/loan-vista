import React from 'react';

import Spinner from 'components/_base-ui/Spinner';

import { ListSpinnerWrapper } from './styledComponents';

const ListBodySpinner = () => (
  <tbody>
    <tr>
      <td>
        <ListSpinnerWrapper>
          <Spinner />
        </ListSpinnerWrapper>
      </td>
    </tr>
  </tbody>
);

export default ListBodySpinner;
