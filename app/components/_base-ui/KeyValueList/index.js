/**
 * KeyValueList
 * @description ...
 */

import React from 'react';
import T from 'prop-types';

import { Key, ListHeading, Row, Value } from './styledComponents';

const KeyValueList = ({ className, data: { listData, title } }) => (
  <div className={className}>
    {title && <ListHeading>{title}</ListHeading>}
    {listData.map(({ key, value }) => (
      <Row key={`${key}-${value}`} $reduceMargin={!key}>
        <Key>{key}</Key>
        <Value>{value}</Value>
      </Row>
    ))}
  </div>
);

KeyValueList.propTypes = {
  className: T.string,
  data: T.shape({
    listData: T.arrayOf(T.shape({ key: T.string, value: T.string })),
    title: T.string,
  }).isRequired,
};

export default KeyValueList;
