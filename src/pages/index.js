import React, { Suspense, useEffect } from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { PageWrapper, Spinner } from '../components';
import routes from './routes';

const Index = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <Suspense fallback={<Spinner />}>
      <BrowserRouter>
        <PageWrapper>
          <Routes>
            {routes.map((route) => {
              return (
                <Route
                  path={route.path}
                  element={route.component}
                  key={route.path}
                />
              );
            })}
          </Routes>
        </PageWrapper>
      </BrowserRouter>
    </Suspense>
  );
};

export default Index;
