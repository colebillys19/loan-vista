/**
 * CorrView
 * @description ...
 */

import React from 'react';
import T from 'prop-types';

import CorrList from 'components/CorrList';
import TabWrapper from 'components/TabWrapper';

import { CorrViewWrapper } from './styledComponents';

const CorrView = ({ corrData }) => (
  <TabWrapper aria-labelledby="emails-letters-tab" id="emails-letters-view">
    <CorrViewWrapper>
      <CorrList corrData={corrData} />
    </CorrViewWrapper>
  </TabWrapper>
);

CorrView.propTypes = { corrData: T.array.isRequired };

export default CorrView;
