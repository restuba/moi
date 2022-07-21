import styled from 'styled-components';
import { motion } from 'framer-motion';
import breakpoints from '../../configs/breakpoints';

const Wrapper = styled(motion.div)`
  display: grid;
  align-items: center;
  margin-bottom: 20rem;
  .component_about_main {
    display: flex;
    flex-direction: column;
    row-gap: 2rem;
    .component_body {
      /* font-family: 'Arial', Arial, sans-serif; */
      display: flex;
      flex-direction: column;
      row-gap: 1rem;
    }
  }

  @media screen and (min-width: ${breakpoints.md}) {
    .component_about_main {
      .component_body {
        /* font-family: 'Domaine'; */
      }
    }
  }
`;

export default Wrapper;
