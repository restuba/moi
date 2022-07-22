/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { projectList } from '../../configs/projects';
import { Typography, Modal } from '../../components';
import Wrapper, { ProjectModal } from './style';
import Item from './item';
import {
  useGlobalDispatchContext,
  useGlobalStateContext,
} from '../../context/globalContext';
import section from '../../configs/section';
import { OpenLinkIcon } from '../../assets';

const Index = () => {
  const animation = useAnimation();
  const dispatch = useGlobalDispatchContext();
  const { cursorStyles } = useGlobalStateContext();
  const [container, inView] = useInView({
    triggerOnce: true,
    rootMargin: '-100px',
  });
  const [selectedProject, setSelectedProject] = useState(null);

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
      <Modal show={selectedProject} setShow={setSelectedProject}>
        <ProjectModal>
          <main className="component_project_modal">
            <div className="component_body">
              <div className="component_title">
                <Typography
                  tag="div"
                  size={{ sm: 2.4, md: 4 }}
                  unit="rem"
                  weight={700}
                  block
                >
                  {selectedProject?.title}
                </Typography>
                <Typography
                  tag="div"
                  size={{ sm: 1, md: 2.4 }}
                  weight={500}
                  unit="rem"
                  block
                >
                  {selectedProject?.type}
                </Typography>
              </div>
              <Typography tag="h4" size={{ sm: 2, md: 3 }} unit="rem" block>
                {selectedProject?.info}
              </Typography>
              <div className="component_item">
                <div>
                  <Typography
                    tag="div"
                    size={{ sm: 2, md: 2 }}
                    unit="rem"
                    block
                  >
                    Tools
                  </Typography>
                  <Typography
                    tag="div"
                    size={{ sm: 1, md: 3 }}
                    unit="rem"
                    block
                  >
                    {selectedProject?.tech}
                  </Typography>
                </div>
                <div>
                  <Typography
                    tag="div"
                    size={{ sm: 2, md: 2 }}
                    unit="rem"
                    block
                  >
                    Check out at
                  </Typography>
                  <Typography
                    tag="div"
                    size={{ sm: 1, md: 3 }}
                    unit="rem"
                    block
                  >
                    <a
                      href={selectedProject?.link}
                      className="component_item_link"
                      target="_blank"
                      rel="noreferrer"
                      onMouseEnter={() => {
                        onCursor('hovered');
                      }}
                      onMouseLeave={onCursor}
                    >
                      {selectedProject?.title}
                      <OpenLinkIcon />
                    </a>
                  </Typography>
                </div>
              </div>
            </div>
            <div
              className="component_image"
              onMouseEnter={() => {
                onCursor('hovered');
              }}
              onMouseLeave={onCursor}
            >
              <a
                href={selectedProject?.link}
                className="component_item_link"
                target="_blank"
                rel="noreferrer"
                onMouseEnter={() => {
                  onCursor('hovered');
                }}
                onMouseLeave={onCursor}
              >
                <img src={selectedProject?.image} alt="" />
              </a>
            </div>
          </main>
        </ProjectModal>
      </Modal>
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
              return (
                <Item
                  key={item.title}
                  data={item}
                  onCursor={onCursor}
                  setSelectedProject={setSelectedProject}
                />
              );
            })}
          </motion.div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Index;
