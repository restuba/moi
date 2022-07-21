import React, { useEffect } from 'react';
import { useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Typography } from '../../components';
import Wrapper from './style';
import { listOfCapability } from './capability.config';

const Index = () => {
  const animation = useAnimation();
  const [container, inView] = useInView({
    triggerOnce: true,
    rootMargin: '-100px',
  });

  useEffect(() => {
    if (inView) animation.start('visible');
  }, [animation, inView]);

  return (
    <Wrapper
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
      <div className="component_capability_main">
        <div className="component_header">
          <Typography
            tag="h1"
            size={{ sm: 2.4, md: 4 }}
            unit="rem"
            weight={700}
            block
          >
            CAPABILITY
          </Typography>
        </div>
        <div className="component_body">
          <Typography tag="h4" size={{ sm: 2, md: 3 }} unit="rem" block>
            I am well-versed in HTML, CSS and JS. I primarily build small to
            medium web apps with React or Native, designing interactive layouts
            and working with different API&apos;s.
          </Typography>
          <Typography tag="h4" size={{ sm: 2, md: 3 }} unit="rem" block>
            Here is a selection of relevant technologies that I am experienced
            in using:
          </Typography>
          <Typography tag="h4" size={{ sm: 2, md: 3 }} unit="rem">
            <div className="component_list_of_capability">
              {listOfCapability.map((item) => {
                return (
                  <span
                    key={item}
                    tag="h4"
                    size={{ sm: 1.15, md: 3 }}
                    unit="rem"
                  >
                    {item}
                  </span>
                );
              })}
            </div>
          </Typography>
        </div>
      </div>
    </Wrapper>
  );
};

export default Index;
