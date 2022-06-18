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
    path: URL_GENERAL.ABOUT,
    component: RouteComponent(import('./about')),
  },
  {
    path: URL_GENERAL.CAPABILITY,
    component: RouteComponent(import('./capability')),
  },
  {
    path: URL_GENERAL.PROJECTS,
    component: RouteComponent(import('./projects')),
  },
  {
    path: URL_GENERAL.CONTACT,
    component: RouteComponent(import('./contact')),
  },
  {
    path: URL_GENERAL.HOME,
    component: RouteComponent(import('./home')),
  },
];

export default routes;
