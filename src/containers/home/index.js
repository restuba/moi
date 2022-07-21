import React, { useLayoutEffect } from 'react';
import Wrapper from './style';
import { animation } from './home.config';
import section from '../../configs/section';

const Index = () => {
  useLayoutEffect(() => {
    animation();
  }, []);

  return (
    <Wrapper id={section.home}>
      <div className="component_banner_main">
        <h1>
          <div className="line">
            <span>Hello.</span>
          </div>
        </h1>
      </div>
    </Wrapper>
  );
};

export default Index;
