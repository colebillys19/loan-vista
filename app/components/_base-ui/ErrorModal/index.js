import React, { useEffect, useState } from 'react';
import T from 'prop-types';
import Modal from '@material-ui/core/Modal';

import { CloseIcon, WarningIcon } from 'images/icons';
import { textColorB } from 'styleConstants';

import {
  ContentContainer,
  FlexContainer,
  Message,
  StyledIconButton,
} from './styledComponents';

const ErrorModal = ({ error }) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (error && error.length) {
      setOpen(true);
    }
  }, [error]);

  const closeModal = () => setOpen(false);

  return (
    <Modal
      onBackdropClick={closeModal}
      onEscapeKeyDown={closeModal}
      open={open}
    >
      <FlexContainer>
        <ContentContainer>
          <StyledIconButton
            aria-label="delete"
            disableRipple
            onClick={closeModal}
          >
            <CloseIcon color={textColorB} size="2.5rem" />
          </StyledIconButton>
          <WarningIcon size="10rem" />
          <Message>{error}</Message>
        </ContentContainer>
      </FlexContainer>
    </Modal>
  );
};

ErrorModal.propTypes = { error: T.oneOfType([T.bool, T.string]).isRequired };

export default ErrorModal;
