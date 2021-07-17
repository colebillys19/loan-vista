import React from 'react';
import T from 'prop-types';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';

import { CloseIcon } from 'images/iconComponents';
import ConditionalRender from 'components/_shared/ConditionalRender';

import CallAudioContent from './CallAudioContent';
import DocumentDownloadContent from './DocumentDownloadContent';
import {
  ContentContainer,
  FlexContainer,
  StyledIconButton,
} from './styledComponents';

const ListModal = ({
  callAudioProps,
  dispatchResetModalState,
  documentDownloadProps,
  open,
}) => (
  <Modal
    BackdropComponent={Backdrop}
    BackdropProps={{ transitionDuration: 200 }}
    onBackdropClick={() => dispatchResetModalState()}
    onEscapeKeyDown={() => dispatchResetModalState()}
    open={open}
  >
    <FlexContainer>
      <ContentContainer>
        <StyledIconButton
          aria-label="delete"
          disableRipple
          onClick={() => dispatchResetModalState()}
        >
          <CloseIcon size="2.5rem" />
        </StyledIconButton>
        <ConditionalRender
          Component={CallAudioContent}
          FallbackComponent={DocumentDownloadContent}
          propsToPassDown={{ callAudioProps, documentDownloadProps }}
          shouldRender={!!callAudioProps}
        />
      </ContentContainer>
    </FlexContainer>
  </Modal>
);

ListModal.propTypes = {
  callAudioProps: T.oneOfType([T.bool, T.object]).isRequired,
  dispatchResetModalState: T.func.isRequired,
  documentDownloadProps: T.oneOfType([T.bool, T.object]).isRequired,
  open: T.bool.isRequired,
};

export default ListModal;
