import React, { lazy } from 'react';
import { Helmet } from 'react-helmet-async';

const ImportPage = lazy(() => {
  return import('../../containers/projects');
});

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Me - Project List</title>
      </Helmet>
      <ImportPage />
    </>
  );
};

export default Index;
