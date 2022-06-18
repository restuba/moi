import { urlBuilder } from '../../utils/route';

const projects = {
  MAIN: '/projects/',
  DETAIL: '/:id',
};

export default projects;

export const projectsURL = () => {
  return new Proxy(projects, urlBuilder('/projects'));
};
