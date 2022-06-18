import React, { lazy } from 'react';
import { Helmet } from 'react-helmet-async';

const ImportPage = lazy(() => {
  return import('../../containers/capability');
});

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Me - Capability</title>
      </Helmet>
      <ImportPage />
    </>
  );
};

export default Index;
