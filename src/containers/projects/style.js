import { motion } from 'framer-motion';
import styled from 'styled-components';

const Wrapper = styled(motion.div)`
  display: grid;
  align-items: center;
  margin-bottom: 20rem;
  min-height: 100vh;
  .component_project_main {
    display: flex;
    flex-direction: column;
    row-gap: 2rem;
    .component_project_list {
      display: flex;
      flex-direction: column;
      gap: 24px;
    }
  }
`;

export default Wrapper;

export const ItemWrapper = styled(motion.div)`
  overflow: hidden;
  position: relative;
  height: 200px;
  :hover {
    .component_project_list_item_image {
      filter: none;
      left: 200px;
    }
  }
  .component_project_list_item_image {
    img {
      filter: grayscale(1) brightness(40%);
      position: absolute;
      width: 100%;
      top: 0;
      mix-blend-mode: color;
      left: 100px;
    }
  }
  .component_project_list_item_body {
  }
`;
