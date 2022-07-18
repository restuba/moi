import gsap from 'gsap';

const tl = gsap.timeline();

// eslint-disable-next-line import/prefer-default-export
export const animation = (onComplete) => {
  tl.to('.line span', 1.8, {
    ease: 'power4.inOut',
    stagger: {
      amount: 0.3,
    },
    css: { skewY: -7, translateY: 0 },
  })
    .to('.overlay-top', 1.6, {
      height: 0,
      ease: 'expo.inOut',
      stagger: 0.4,
    })
    .to('.intro-overlay', {
      css: { display: 'none' },
      onComplete,
    });
};
