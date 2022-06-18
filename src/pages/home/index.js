import React, { lazy } from 'react';
import { Helmet } from 'react-helmet-async';

const ImportPage = lazy(() => {
  return import('../../containers/home');
});

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Me - Home</title>
      </Helmet>
      <ImportPage />
    </>
  );
};

export default Index;
