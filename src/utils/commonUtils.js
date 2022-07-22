/* eslint-disable no-param-reassign */
export const setTransform = (el = {}, transform) => {
  el.style.transform = transform;
  el.style.WebkitTransform = transform;
};

export const setStyles = (container = {}) => {
  container.style.position = 'absolute';
  // container.style.zIndex = 2;
  container.style.width = '100%';
  container.setAttribute('id', 'container_scroll');
};
