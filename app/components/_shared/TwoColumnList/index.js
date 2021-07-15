import React, { Fragment, useContext } from 'react';
import T from 'prop-types';

import Context from 'Context';
import ConditionalRender from 'components/_shared/ConditionalRender';
import ListSkeleton from 'components/_shared/ListSkeleton';

import { Label, ListHeading, Row, Value } from './styledComponents';

const TwoColumnList = ({
  className,
  data: { listData, title },
  numRows,
  smallRows,
}) => {
  const [{ mainError, mainLoading }] = useContext(Context);

  return (
    <div className={className}>
      {title && <ListHeading>{title}</ListHeading>}
      <ConditionalRender
        Component={
          <Fragment>
            {listData.map(({ label, value }, i) => (
              <Row
                key={`${label}-${value}`}
                reduceHeight={smallRows.includes(i)}
              >
                <Label>{label}</Label>
                <Value>{value}</Value>
              </Row>
            ))}
          </Fragment>
        }
        FallbackComponent={
          <ListSkeleton
            isError={mainError}
            numRows={numRows}
            smallRows={smallRows}
          />
        }
        shouldRender={!mainLoading && !mainError}
      />
    </div>
  );
};

TwoColumnList.propTypes = {
  className: T.string,
  data: T.shape({
    listData: T.arrayOf(T.shape({ label: T.string, value: T.string })),
    title: T.string,
  }).isRequired,
  numRows: T.number.isRequired,
  smallRows: T.array,
};

TwoColumnList.defaultProps = { smallRows: [] };

export default TwoColumnList;
