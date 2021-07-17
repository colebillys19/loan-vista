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

const ListModal = ({ audioData, dispatchClearListModalData, downloadData }) => (
  <Modal
    BackdropComponent={Backdrop}
    BackdropProps={{ transitionDuration: 200 }}
    onBackdropClick={() => dispatchClearListModalData()}
    onEscapeKeyDown={() => dispatchClearListModalData()}
    open={!!audioData || !!downloadData}
  >
    <FlexContainer>
      <ContentContainer>
        <StyledIconButton
          aria-label="delete"
          disableRipple
          onClick={() => dispatchClearListModalData()}
        >
          <CloseIcon size="2.5rem" />
        </StyledIconButton>
        <ConditionalRender
          Component={CallAudioContent}
          FallbackComponent={DocumentDownloadContent}
          propsToPassDown={{ audioData, downloadData }}
          shouldRender={!!audioData}
        />
      </ContentContainer>
    </FlexContainer>
  </Modal>
);

ListModal.propTypes = {
  audioData: T.oneOfType([T.bool, T.object]).isRequired,
  dispatchClearListModalData: T.func.isRequired,
  downloadData: T.oneOfType([T.bool, T.object]).isRequired,
};

export default ListModal;
