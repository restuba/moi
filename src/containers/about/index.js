import React, { useEffect } from 'react';
import { useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Wrapper from './style';
import { Typography } from '../../components';

const Index = () => {
  const animation = useAnimation();
  const [aboutRef, inView] = useInView({
    triggerOnce: true,
    rootMargin: '-100px',
  });

  useEffect(() => {
    if (inView) animation.start('visible');
  }, [animation, inView]);

  return (
    <Wrapper
      ref={aboutRef}
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
      <main className="component_about_main">
        <div className="component_header">
          <Typography
            tag="h1"
            size={{ sm: 2.5, md: 4 }}
            unit="rem"
            weight={700}
            block
          >
            HELLO, I&apos;M RESTU.
          </Typography>
        </div>
        <div className="component_body">
          <Typography tag="h4" size={{ sm: 1.15, md: 3 }} unit="rem" block>
            Nice to meet you. I&apos;ve always been someone who has both a
            creative and a logical side. prefer to keep learning, continue
            challenging myself, and do interesting things that matter.
          </Typography>
          <Typography tag="h4" size={{ sm: 1.15, md: 3 }} unit="rem" block>
            with passionate creative enthusiastic and always try to learn,
            i&apos;ve expertise in develop website and app so really quality and
            unique.
          </Typography>
          <Typography tag="h4" size={{ sm: 1.15, md: 3 }} unit="rem" block>
            Delivering highly executed front-end user experiences by paying
            close attention to the nuances of design, optimization, and
            performance.
          </Typography>
        </div>
      </main>
    </Wrapper>
  );
};

export default Index;
