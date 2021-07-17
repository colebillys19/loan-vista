/**
 * DashboardDocuments
 * @description ...
 */

import React, { useContext } from 'react';
import T from 'prop-types';

import Context from 'Context';
import { appColorB, iconColorB, textColorA } from 'styleConstants';
import { MailIcon } from 'images/iconComponents';
import ConditionalRender from 'components/_shared/ConditionalRender';
import GradientCard from 'components/_shared/GradientCard';
import NoDataBlock from 'components/_shared/NoDataBlock';
import ViewMoreBlock from 'components/_shared/ViewMoreBlock';

import Table from './Table';

const Icon = <MailIcon colorA={iconColorB} colorB={textColorA} size="4rem" />;

const DashboardDocuments = ({
  data: { data, formattedHeaders, listHeaders },
  dispatchNavigation,
  dispatchSetDownloadModalData,
}) => {
  const [{ mainError, mainLoading }] = useContext(Context);
  const useFallback = mainLoading || mainError;
  const isNoData = !useFallback && !data.length;

  return (
    <GradientCard
      color={appColorB}
      heading="Documents"
      Icon={Icon}
      reduceBottomPadding
    >
      <ConditionalRender
        Component={Table}
        FallbackComponent={NoDataBlock}
        propsToPassDown={{
          data,
          dispatchSetDownloadModalData,
          formattedHeaders,
          listHeaders,
          mainError,
          useFallback,
        }}
        shouldRender={!isNoData}
      />
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
  dispatchSetDownloadModalData: T.func.isRequired,
};

export default DashboardDocuments;
