import styled from 'styled-components';
import { motion } from 'framer-motion';

const Wrapper = styled(motion.div)`
  display: grid;
  align-items: center;
  margin-bottom: 20rem;
  /* min-height: 100vh; */
  .component_contact_main {
    display: flex;
    flex-direction: column;
    row-gap: 2rem;
    .component_contact_item {
      display: flex;
      flex-direction: column;
      margin-bottom: 4rem;
      .component_contact_item_link {
        display: flex;
        align-items: center;
        gap: 8px;
        color: ${({ theme }) => {
          return theme.text;
        }};
        svg {
          fill: ${({ theme }) => {
            return theme.text;
          }};
        }
      }
    }
  }
`;

export default Wrapper;
