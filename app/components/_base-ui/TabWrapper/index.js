/**
 * TabWrapper
 * @description ...
 */

import React from 'react';
import T from 'prop-types';

import { StyledSection } from './styledComponents';

const TabWrapper = ({ children }) => <StyledSection>{children}</StyledSection>;

TabWrapper.propTypes = { children: T.node.isRequired };

export default TabWrapper;
