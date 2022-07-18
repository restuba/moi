import styled from 'styled-components';
import { motion } from 'framer-motion';
import breakpoints from '../../configs/breakpoints';

const Wrapper = styled(motion.div)`
  display: grid;
  align-items: center;
  margin-bottom: 20rem;
  .component_capability_main {
    display: flex;
    flex-direction: column;
    row-gap: 2rem;
    .component_body {
      font-family: 'Arial', Arial, sans-serif;
      display: flex;
      flex-direction: column;
      row-gap: 1rem;
      .component_list_of_capability {
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        justify-content: flex-start;
        gap: 48px;
        flex-wrap: wrap;
        > *:not(:last-child) {
          position: relative;
          ::after {
            content: '';
            width: 4px;
            height: 4px;
            border-radius: 50%;
            background: ${({ theme }) => {
              return theme.text;
            }};
            position: absolute;
            top: 50%;
            transform: translate(24px, -50%);
          }
        }
      }
    }
  }

  @media screen and (min-width: ${breakpoints.md}) {
    .component_capability_main {
      .component_body {
        font-family: 'Domaine';
        .component_list_of_capability {
          > *:not(:last-child) {
            ::after {
              width: 10px;
              height: 10px;
            }
          }
        }
      }
    }
  }

  hr {
    width: 40px;
    background: #b88746;
  }
  table {
    width: 100%;
    border: none;
    color: ${({ theme }) => {
      return theme.text;
    }};
    th,
    td {
      text-align: left;
      padding: 8px;
    }
    @media (max-width: 375px) {
      th {
        display: none;
      }
    }
  }
`;

export default Wrapper;
