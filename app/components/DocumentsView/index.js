/**
 * DocumentsView
 * @description ...
 */

import React from 'react';
import T from 'prop-types';

import DocumentsList from 'components/DocumentsList';
import ListFilter from 'components/ListFilter';
import ConditionalRender from 'components/_base-ui/ConditionalRender';
import NoListDataFallback from 'components/_base-ui/NoListDataFallback';
import TableHeadBorder from 'components/_base-ui/TableHeadBorder';
import TabWrapper from 'components/_base-ui/TabWrapper';

const DocumentsView = ({ documentsData, loading }) => {
  const noListData = !loading && documentsData.length === 0;

  return (
    <TabWrapper aria-labelledby="documents-tab" id="documents-view">
      <ListFilter />
      <TableHeadBorder hideBottom={loading || noListData} />
      <ConditionalRender
        Component={
          <DocumentsList
            documentsData={documentsData}
            loading={loading}
            sortColumn="date sent"
          />
        }
        FallbackComponent={<NoListDataFallback />}
        shouldRender={!noListData}
      />
    </TabWrapper>
  );
};

DocumentsView.propTypes = {
  documentsData: T.array.isRequired,
  loading: T.bool.isRequired,
};

export default DocumentsView;
