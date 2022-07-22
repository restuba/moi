import React, { lazy } from 'react';

const Home = lazy(() => {
  return import('../../containers/home');
});
const About = lazy(() => {
  return import('../../containers/about');
});
const Capability = lazy(() => {
  return import('../../containers/capability');
});
const Projects = lazy(() => {
  return import('../../containers/projects');
});
const Contact = lazy(() => {
  return import('../../containers/contact');
});

const Index = () => {
  return (
    <>
      <Home />
      <About />
      <Capability />
      <Projects />
      <Contact />
    </>
  );
};

export default Index;
