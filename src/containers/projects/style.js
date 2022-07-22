import { motion } from 'framer-motion';
import styled from 'styled-components';
import breakpoints from '../../configs/breakpoints';

const Wrapper = styled(motion.div)`
  display: grid;
  align-items: center;
  margin-bottom: 20rem;
  .component_project_main {
    display: flex;
    flex-direction: column;
    row-gap: 2rem;
    .component_project_list {
      display: flex;
      flex-direction: column;
      gap: 4rem;
    }
  }
`;

export default Wrapper;

export const ItemWrapper = styled(motion.div)`
  overflow: hidden;
  position: relative;
  .component_project_list_item_image {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    overflow: hidden;
    background-position: top;
    filter: gray;
    -webkit-filter: grayscale(100%);
    transition: all 0.6s ease;
    opacity: 0.4;
    img {
      object-fit: cover;
      width: 100%;
    }
  }
  .component_project_list_item_body {
    color: ${({ theme }) => {
      return theme.text;
    }};
    max-width: 720px;
    width: 100%;
    height: 100%;
    .arrow {
      width: 120px;
      height: 80px;
      display: block;
      position: relative;
      transform: scale(0.5);
      svg {
        position: absolute;
        top: 16px;
        left: -48px;
        width: 108px;
        transition: all 0.6s ease;
        path {
          fill: ${(props) => {
            return props.theme.text;
          }};
        }
      }
    }
  }
  :hover {
    .component_project_list_item_image {
      -webkit-filter: grayscale(0%);
      opacity: 0.8;
      left: 0;
    }
    .component_project_list_item_body {
      .arrow svg {
        left: 0;
      }
    }
  }

  @media screen and (min-width: ${breakpoints.md}) {
    .component_project_list_item_image {
      left: 100px;
    }
    .component_project_list_item_body {
      padding: 0;
      .arrow {
        transform: scale(1);
      }
    }
    :hover {
      .component_project_list_item_image {
        left: 200px;
      }
    }
  }
`;

export const ProjectModal = styled(motion.div)`
  .component_project_modal {
    display: flex;
    flex-direction: column;
    row-gap: 4rem;
    .component_image {
      width: 100%;
      display: grid;
      overflow-y: auto;
      img {
        width: 100%;
        object-fit: contain;
        height: 100%;
      }
    }

    .component_body {
      .component_title {
        display: flex;
        justify-content: space-between;
        align-items: center;
        > {
          flex: 1;
        }
      }
      .component_item {
        display: flex;
        flex-direction: column;
        row-gap: 2rem;
      }
    }
    .component_item_link {
      display: flex;
      align-items: center;
      gap: 4px;
      color: ${({ theme }) => {
        return theme.text;
      }};
    }
  }
`;
