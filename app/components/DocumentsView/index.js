/**
 * DocumentsView
 * @description ...
 */

import React from 'react';
import T from 'prop-types';

import DocumentsList from 'components/DocumentsList';
import ListFilter from 'components/ListFilter';
import ConditionalRender from 'components/_base-ui/ConditionalRender';
import ListRenderFallback from 'components/_base-ui/ListRenderFallback';
import TableHeadBorder from 'components/_base-ui/TableHeadBorder';
import TabWrapper from 'components/_base-ui/TabWrapper';

const DocumentsView = ({
  dispatchFetchDocumentsData,
  documentsData,
  error,
  fetchParams,
  loading,
  sortValues,
}) => {
  const noListData = !loading && documentsData.length === 0;

  return (
    <TabWrapper aria-labelledby="documents-tab" id="documents-view">
      <ListFilter
        fetchParams={fetchParams}
        dispatchFetchData={dispatchFetchDocumentsData}
      />
      <TableHeadBorder hideBottom={loading || noListData} />
      <ConditionalRender
        Component={
          <DocumentsList
            documentsData={documentsData}
            dispatchFetchDocumentsData={dispatchFetchDocumentsData}
            loading={loading}
            sortValues={sortValues}
          />
        }
        FallbackComponent={<ListRenderFallback error={error} />}
        shouldRender={!error && !noListData}
      />
    </TabWrapper>
  );
};

DocumentsView.propTypes = {
  documentsData: T.array.isRequired,
  error: T.oneOfType([T.bool, T.string]).isRequired,
  fetchParams: T.object.isRequired,
  loading: T.bool.isRequired,
  dispatchFetchDocumentsData: T.func.isRequired,
  sortValues: T.object.isRequired,
};

export default DocumentsView;
