import React, { useEffect, useState } from 'react';
import T from 'prop-types';
import Modal from '@material-ui/core/Modal';

import { CloseIcon } from 'images/icons';
import { textColorB } from 'styleConstants';
import ErrorBlock from 'components/_base-ui/ErrorBlock';

import {
  ContentContainer,
  FlexContainer,
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
          <ErrorBlock error={error} />
        </ContentContainer>
      </FlexContainer>
    </Modal>
  );
};

ErrorModal.propTypes = { error: T.oneOfType([T.bool, T.string]).isRequired };

export default ErrorModal;
