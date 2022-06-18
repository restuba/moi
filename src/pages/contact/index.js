import React, { lazy } from 'react';
import { Helmet } from 'react-helmet-async';

const ImportPage = lazy(() => {
  return import('../../containers/contact');
});

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Me - Contact</title>
      </Helmet>
      <ImportPage />
    </>
  );
};

export default Index;
