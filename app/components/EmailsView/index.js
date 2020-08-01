/**
 * EmailsView
 * @description ...
 */

import React from 'react';
import T from 'prop-types';

import EmailsList from 'components/EmailsList';
import TabWrapper from 'components/TabWrapper';
import ConditionalRender from 'components/_baseUI/ConditionalRender';
import Spinner from 'components/_baseUI/Spinner';
import NoListDataFallback from 'components/_baseUI/NoListDataFallback';

import { EmailsViewWrapper } from './styledComponents';

const EmailsView = ({ emailsData, loading }) => {
  const noListData = !loading && emailsData.length === 0;

  return (
    <TabWrapper
      aria-labelledby="emails-and-letters-tab"
      id="emails-and-letters-view"
    >
      <EmailsViewWrapper>
        <ConditionalRender
          Component={
            <ConditionalRender
              Component={
                <EmailsList emailsData={emailsData} loading={loading} />
              }
              FallbackComponent={<Spinner />}
              shouldRender={!loading}
            />
          }
          FallbackComponent={<NoListDataFallback />}
          shouldRender={!noListData}
        />
      </EmailsViewWrapper>
    </TabWrapper>
  );
};

EmailsView.propTypes = {
  emailsData: T.array.isRequired,
  loading: T.bool.isRequired,
};

export default EmailsView;
