import React from 'react';
import { PuffLoader } from 'react-spinners';
import colors from '../../configs/colors';
import Wrapper from './style';

const Index = () => {
  return (
    <Wrapper>
      <PuffLoader size={60} color={colors.primary} />
    </Wrapper>
  );
};

export default Index;
