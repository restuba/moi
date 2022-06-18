import React, { lazy } from 'react';
import { Helmet } from 'react-helmet-async';

const ImportPage = lazy(() => {
  return import('../../containers/about');
});

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Me - About</title>
      </Helmet>
      <ImportPage />
    </>
  );
};

export default Index;
