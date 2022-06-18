import React, { Suspense } from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { Navbar, Spinner } from '../components';
import routes from './routes';

const Index = () => {
  return (
    <Suspense fallback={<Spinner />}>
      <BrowserRouter>
        <Navbar />
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
      </BrowserRouter>
    </Suspense>
  );
};

export default Index;
