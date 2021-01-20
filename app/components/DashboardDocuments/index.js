/**
 * DashboardDocuments
 * @description ...
 */

import React from 'react';
import T from 'prop-types';

import { appColorAOpaque, textColorA } from 'styleConstants';
import { MailIcon } from 'images/icons';
import { StyledTable, StyledTableBody } from 'components/_base-ui/ListTable';
import GradientCard from 'components/_base-ui/GradientCard';
import ViewMoreBlock from 'components/_base-ui/ViewMoreBlock';

import { MOCK_DATA } from './tests/mockData';
import TableRow from './TableRow';

const Icon = (
  <MailIcon colorA={textColorA} colorB={appColorAOpaque} size="4rem" />
);

const DashboardDocuments = ({ data, headers }) => (
  <GradientCard heading="Documents" Icon={Icon} reduceBottomPadding>
    <StyledTable>
      <StyledTableBody>
        {data.map(({ id, ...restData }) => (
          <TableRow key={id} data={restData} headers={headers} />
        ))}
      </StyledTableBody>
    </StyledTable>
    <ViewMoreBlock route="/documents" />
  </GradientCard>
);

DashboardDocuments.propTypes = { data: T.array, headers: T.array };

DashboardDocuments.defaultProps = {
  data: MOCK_DATA,
  headers: ['date sent', 'time sent', 'type', 'from', 'desc', 'pdf'],
};

export default DashboardDocuments;
