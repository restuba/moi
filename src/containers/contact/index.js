/* eslint-disable max-len */
import { useAnimation } from 'framer-motion';
import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { Typography } from '../../components';
import { DownloadIcon, OpenLinkIcon } from '../../assets';
import Wrapper from './style';
import section from '../../configs/section';
import {
  useGlobalDispatchContext,
  useGlobalStateContext,
} from '../../context/globalContext';

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
      id={section.contact}
      ref={container}
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
      <div className="component_contact_main">
        <div className="component_header">
          <Typography
            tag="h1"
            size={{ sm: 2.4, md: 4 }}
            unit="rem"
            weight={700}
            block
          >
            CONTACT
          </Typography>
        </div>
        <div className="component_body">
          <Typography tag="h4" size={{ sm: 2, md: 3 }} unit="rem">
            Got a project in mind? Okay, lets get started!
          </Typography>
          <div className="component_contact_item">
            <Typography
              tag="div"
              size={{ sm: 2, md: 2 }}
              weight={500}
              unit="rem"
            >
              Email
            </Typography>
            <Typography tag="div" size={{ sm: 1, md: 3 }} unit="rem">
              <a
                href="mailto:resbayuaji@gmail.com"
                className="component_contact_item_link"
                target="_blank"
                rel="noreferrer"
                onMouseEnter={() => {
                  onCursor('hovered');
                }}
                onMouseLeave={onCursor}
              >
                resbayuaji.gmail.com
                <OpenLinkIcon className="component_contact_item_icon" />
              </a>
            </Typography>
          </div>
          <div className="component_contact_item">
            <Typography
              tag="div"
              size={{ sm: 2, md: 2 }}
              weight={500}
              unit="rem"
              block
            >
              Linkedin
            </Typography>
            <Typography tag="div" size={{ sm: 1, md: 3 }} unit="rem">
              <a
                href="https://www.linkedin.com/in/restuba/"
                className="component_contact_item_link"
                target="_blank"
                rel="noreferrer"
                onMouseEnter={() => {
                  onCursor('hovered');
                }}
                onMouseLeave={onCursor}
              >
                linkedin.com/in/restuba/
                <OpenLinkIcon />
              </a>
            </Typography>
          </div>
          <div className="component_contact_item">
            <Typography
              tag="div"
              size={{ sm: 2, md: 2 }}
              weight={500}
              unit="rem"
            >
              Github
            </Typography>
            <Typography tag="div" size={{ sm: 1, md: 3 }} unit="rem">
              <a
                href="https://github.com/restuba"
                className="component_contact_item_link"
                target="_blank"
                rel="noreferrer"
                onMouseEnter={() => {
                  onCursor('hovered');
                }}
                onMouseLeave={onCursor}
              >
                github.com/restuba
                <OpenLinkIcon />
              </a>
            </Typography>
          </div>
          <div className="component_contact_item">
            <Typography
              tag="div"
              size={{ sm: 2, md: 2 }}
              weight={500}
              unit="rem"
            >
              Behance
            </Typography>
            <Typography tag="div" size={{ sm: 1, md: 3 }} unit="rem">
              <a
                href="https://www.behance.net/rbayua"
                className="component_contact_item_link"
                target="_blank"
                rel="noreferrer"
                onMouseEnter={() => {
                  onCursor('hovered');
                }}
                onMouseLeave={onCursor}
              >
                behance.net/rbayua
                <OpenLinkIcon />
              </a>
            </Typography>
          </div>
          <div className="component_contact_item">
            <Typography tag="div" size={{ sm: 1, md: 3 }} unit="rem">
              <a
                href="https://github.com/restuba/me/raw/a082c8d9bb3e90de43e1fdd74455273469c42d77/src/assets/img/CV%20-%20Restu%20Bayu%20Aji.pdf"
                target="_blank"
                rel="noreferrer"
                download
                className="component_contact_item_link"
                onMouseEnter={() => {
                  onCursor('hovered');
                }}
                onMouseLeave={onCursor}
              >
                Curriculum Vitae
                <DownloadIcon />
              </a>
            </Typography>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Index;
