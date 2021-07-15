import React from 'react';
import T from 'prop-types';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';

import ErrorBlock from 'components/_shared/ErrorBlock';

import { ContentContainer, FlexContainer } from './styledComponents';

const ErrorModal = ({ error }) => (
  <Modal
    BackdropComponent={Backdrop}
    BackdropProps={{ transitionDuration: 200 }}
    open
  >
    <FlexContainer>
      <ContentContainer>
        <ErrorBlock error={error} />
      </ContentContainer>
    </FlexContainer>
  </Modal>
);

ErrorModal.propTypes = { error: T.oneOfType([T.bool, T.string]).isRequired };

export default ErrorModal;
