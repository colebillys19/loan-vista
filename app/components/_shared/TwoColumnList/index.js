import React, { Fragment } from 'react';
import T from 'prop-types';

import ConditionalRender from 'components/_shared/ConditionalRender';
import ListSkeleton from 'components/_shared/ListSkeleton';

import { Label, ListHeading, Row, Value } from './styledComponents';

const TwoColumnList = ({
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
          {listData.map(({ label, value }, i) => (
            <Row key={`${label}-${value}`} reduceHeight={smallRows.includes(i)}>
              <Label>{label}</Label>
              <Value>{value}</Value>
            </Row>
          ))}
        </Fragment>
      }
      FallbackComponent={
        <ListSkeleton numRows={numRows} smallRows={smallRows} />
      }
      shouldRender={!renderLoading}
    />
  </div>
);

TwoColumnList.propTypes = {
  className: T.string,
  data: T.shape({
    listData: T.arrayOf(T.shape({ label: T.string, value: T.string })),
    title: T.string,
  }).isRequired,
  numRows: T.number.isRequired,
  renderLoading: T.bool.isRequired,
  smallRows: T.array,
};

TwoColumnList.defaultProps = { smallRows: [] };

export default TwoColumnList;
