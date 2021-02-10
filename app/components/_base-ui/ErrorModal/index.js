import React, { useEffect, useState } from 'react';
import T from 'prop-types';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';

import { CloseIcon } from 'images/icons';
import ErrorBlock from 'components/_base-ui/ErrorBlock';

import {
  ContentContainer,
  FlexContainer,
  StyledIconButton,
} from './styledComponents';

const ErrorModal = ({ error }) => {
  const [open, setOpen] = useState(false);
  const [opacity, setOpacity] = useState('0');

  useEffect(() => {
    if (error && error.length) {
      setOpen(true);
    }
  }, [error]);

  const closeModal = () => setOpen(false);

  const removeOpacity = () => setOpacity('1');

  return (
    <Modal
      BackdropComponent={Backdrop}
      BackdropProps={{ transitionDuration: 200 }}
      onBackdropClick={closeModal}
      onEscapeKeyDown={closeModal}
      onRendered={removeOpacity}
      open={open}
    >
      <FlexContainer>
        <ContentContainer opacity={opacity}>
          <StyledIconButton
            aria-label="delete"
            disableRipple
            onClick={closeModal}
          >
            <CloseIcon size="2.5rem" />
          </StyledIconButton>
          <ErrorBlock error={error} />
        </ContentContainer>
      </FlexContainer>
    </Modal>
  );
};

ErrorModal.propTypes = { error: T.oneOfType([T.bool, T.string]).isRequired };

export default ErrorModal;
