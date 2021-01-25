/**
 * DocumentsView
 * @description ...
 */

import React from 'react';
import T from 'prop-types';

import DocumentsList from 'components/DocumentsList';
import ListFilter from 'components/ListFilter';
import ConditionalRender from 'components/_base-ui/ConditionalRender';
import ListFallback from 'components/_base-ui/ListFallback';
import TabContainer from 'components/_base-ui/TabContainer';

const DocumentsView = ({
  dispatchFetchDocumentsData,
  documentsData,
  error,
  fetchParams,
  loading,
  noDataFetched,
  sortLoading,
  sortValues,
}) => (
  <TabContainer aria-labelledby="documents-tab" id="documents-view">
    <ListFilter
      dispatchFetchData={dispatchFetchDocumentsData}
      fetchParams={fetchParams}
    />
    <ConditionalRender
      Component={
        <DocumentsList
          dispatchFetchDocumentsData={dispatchFetchDocumentsData}
          documentsData={documentsData}
          sortLoading={sortLoading}
          sortValues={sortValues}
        />
      }
      FallbackComponent={<ListFallback error={error} loading={loading} />}
      shouldRender={!error && !loading && !noDataFetched}
    />
  </TabContainer>
);

DocumentsView.propTypes = {
  dispatchFetchDocumentsData: T.func.isRequired,
  documentsData: T.array.isRequired,
  error: T.oneOfType([T.bool, T.string]).isRequired,
  fetchParams: T.object.isRequired,
  loading: T.bool.isRequired,
  noDataFetched: T.bool.isRequired,
  sortLoading: T.bool.isRequired,
  sortValues: T.object.isRequired,
};

export default DocumentsView;
