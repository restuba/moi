import { lazy } from 'react';
import URL_GENERAL from '../configs/url/general';

const RouteComponent = (lazyImport) => {
  const Component = lazy(() => {
    return lazyImport;
  });
  return <Component />;
};

const routes = [
  {
    path: URL_GENERAL.LANDING,
    component: RouteComponent(import('./landing')),
  },
];

export default routes;
