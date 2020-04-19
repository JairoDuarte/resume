import React from 'react';
import { Helmet } from 'react-helmet';
import get from 'lodash/get';
import './styles.css';
import { useHomeData } from '../queries';

export default () => {
  const data = useHomeData();

  const siteTitle = get(data, 'site.siteMetadata.title');

  return (
    <div>
      <Helmet>
        <title>{siteTitle}</title>
      </Helmet>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};
