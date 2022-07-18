import gsap from 'gsap';

const tl = gsap.timeline();
// eslint-disable-next-line import/prefer-default-export
export const animation = () => {
  tl.to('.line span', 1.8, {
    ease: 'power4.inOut',
    stagger: {
      amount: 0.3,
    },
    css: { skewY: -7, translateY: 0 },
  });
};
