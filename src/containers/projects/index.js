/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { projectList } from '../../configs/projects';
import { Typography } from '../../components';
import Wrapper from './style';
import Item from './item';
import {
  useGlobalDispatchContext,
  useGlobalStateContext,
} from '../../context/globalContext';
import section from '../../configs/section';

const Index = () => {
  const animation = useAnimation();
  const dispatch = useGlobalDispatchContext();
  const { cursorStyles } = useGlobalStateContext();
  const [container, inView] = useInView({
    triggerOnce: true,
    rootMargin: '-100px',
  });

  useEffect(() => {
    if (inView) animation.start('visible');
  }, [animation, inView]);

  const onCursor = (cursorType) => {
    const cursor = (cursorStyles.includes(cursorType) && cursorType) || false;
    dispatch({ type: 'CURSOR_TYPE', cursorType: cursor });
  };

  return (
    <Wrapper
      ref={container}
      id={section.project}
      animate={animation}
      initial="hidden"
      variants={{
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.8, ease: [0.6, 0.05, -0.01, 0.9] },
          skewY: 0,
        },
        hidden: { opacity: 0, y: 120, skewY: 7 },
      }}
    >
      <div className="component_project_main">
        <div className="component_header">
          <Typography
            tag="h1"
            size={{ sm: 2.4, md: 4 }}
            unit="rem"
            weight={700}
            block
          >
            FEATURED PROJECT
          </Typography>
        </div>
        <div className="component_body">
          <motion.div layout className="component_project_list">
            {projectList.map((item) => {
              return <Item key={item.title} data={item} onCursor={onCursor} />;
            })}
          </motion.div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Index;
