/**
 * DocumentsView
 * @description ...
 */

import React from 'react';
import T from 'prop-types';

import DocumentsList from 'components/DocumentsList';
import ListFilter from 'components/ListFilter';
import TabWrapper from 'components/TabWrapper';
import ConditionalRender from 'components/_baseUI/ConditionalRender';
import Spinner from 'components/_baseUI/Spinner';
import NoListDataFallback from 'components/_baseUI/NoListDataFallback';

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
