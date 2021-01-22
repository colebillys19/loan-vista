import React, { Fragment } from 'react';
import T from 'prop-types';

import ConditionalRender from 'components/_base-ui/ConditionalRender';

import Skeleton from './Skeleton';
import { Key, ListHeading, Row, Value } from './styledComponents';

const KeyValueList = ({
  className,
  data: { listData, title },
  numRows,
  renderLoading,
  smallRows,
}) => (
  <div className={className}>
    {title && <ListHeading>{title}</ListHeading>}
    <ConditionalRender
      Component={
        <Fragment>
          {listData.map(({ key, value }, i) => (
            <Row key={`${key}-${value}`} reduceHeight={smallRows.includes(i)}>
              <Key>{key}</Key>
              <Value>{value}</Value>
            </Row>
          ))}
        </Fragment>
      }
      FallbackComponent={<Skeleton numRows={numRows} smallRows={smallRows} />}
      shouldRender={!renderLoading}
    />
  </div>
);

KeyValueList.propTypes = {
  className: T.string,
  data: T.shape({
    listData: T.arrayOf(T.shape({ key: T.string, value: T.string })),
    title: T.string,
  }).isRequired,
  numRows: T.number.isRequired,
  renderLoading: T.bool.isRequired,
  smallRows: T.array,
};

KeyValueList.defaultProps = { smallRows: [] };

export default KeyValueList;
