/**
 * DashboardDocuments
 * @description ...
 */

import React, { Fragment, useContext } from 'react';
import T from 'prop-types';

import Context from 'Context';
import { appColorB, iconColorB, textColorA } from 'styleConstants';
import { MailIcon } from 'images/iconComponents';
import {
  StyledTable,
  StyledTableBody,
  StyledTableHead,
  StyledTableHeader,
} from 'components/_shared/ListTable';
import ConditionalRender from 'components/_shared/ConditionalRender';
import GradientCard from 'components/_shared/GradientCard';
import ListSkeleton from 'components/_shared/ListSkeleton';
import NoDataBlock from 'components/_shared/NoDataBlock';
import ViewMoreBlock from 'components/_shared/ViewMoreBlock';

import CustomTableRow from './CustomTableRow';
import { TableHeadRow } from './styledComponents';

const Icon = <MailIcon colorA={iconColorB} colorB={textColorA} size="4rem" />;

const DashboardDocuments = ({
  data: { data, formattedHeaders, listHeaders },
  dispatchNavigation,
}) => {
  const [{ mainError, mainLoading }] = useContext(Context);
  const useFallback = mainLoading || mainError;

  return (
    <GradientCard
      color={appColorB}
      heading="Documents"
      Icon={Icon}
      reduceBottomPadding
    >
      <ConditionalRender
        Component={<NoDataBlock />}
        shouldRender={!useFallback && !data.length}
      />
      <StyledTable>
        <StyledTableHead>
          <TableHeadRow>
            {formattedHeaders.map((header) => (
              <StyledTableHeader key={header}>{header}</StyledTableHeader>
            ))}
          </TableHeadRow>
        </StyledTableHead>
        <StyledTableBody>
          <ConditionalRender
            Component={
              <Fragment>
                {data.map(({ id, ...restData }) => (
                  <CustomTableRow
                    key={id}
                    data={restData}
                    headers={listHeaders}
                  />
                ))}
              </Fragment>
            }
            FallbackComponent={
              <ListSkeleton isError={mainError} isTable numRows={5} />
            }
            shouldRender={!useFallback}
          />
        </StyledTableBody>
      </StyledTable>
      <ViewMoreBlock
        isActive={!useFallback && !!data.length}
        navigate={() => dispatchNavigation('/documents')}
      />
    </GradientCard>
  );
};

DashboardDocuments.propTypes = {
  data: T.shape({
    data: T.arrayOf(T.object),
    formattedHeaders: T.arrayOf(T.string),
    listHeaders: T.arrayOf(T.string),
  }).isRequired,
  dispatchNavigation: T.func.isRequired,
};

export default DashboardDocuments;
