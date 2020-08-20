/**
 * DocumentsView
 * @description ...
 */

import React from 'react';
import T from 'prop-types';

import DocumentsList from 'components/DocumentsList';
import ListFilter from 'components/ListFilter';
import TabWrapper from 'components/_base-ui/TabWrapper';
import ConditionalRender from 'components/_base-ui/ConditionalRender';
import Spinner from 'components/_base-ui/Spinner';
import NoListDataFallback from 'components/_base-ui/NoListDataFallback';

const DocumentsView = ({ documentsData, loading }) => {
  const noListData = !loading && documentsData.length === 0;

  return (
    <TabWrapper aria-labelledby="documents-tab" id="documents-view">
      <ListFilter />
      <ConditionalRender
        Component={
          <ConditionalRender
            Component={
              <DocumentsList documentsData={documentsData} loading={loading} />
            }
            FallbackComponent={<Spinner />}
            shouldRender={!loading}
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
