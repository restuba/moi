import React from 'react';
import Wrapper from './style';
import { tags, initialValues } from '../../configs/fonts';

const Index = (props) => {
  const {
    tag, // type: string
    size, // type: number
    weight, // type: number
    unit, // type: string
    block, // type: boolean
    variant, // type: string
    color, // type: string
    children, // type: node
    fit, // type: boolean
    ...otherProps
  } = props;

  const Component = tags[tag] || 'div';
  const sizeProps = { ...initialValues.size, ...size };
  const weightProps = weight || initialValues.weight;
  const unitProps = unit || initialValues.unit;
  const blockProps = block || initialValues.block;

  return (
    <Wrapper
      className="component_font_wrapper"
      size={sizeProps}
      weight={weightProps}
      unit={unitProps}
      block={blockProps}
      color={color}
      fit={fit}
      variant={variant}
      style={{ ...otherProps }}
    >
      <Component className="component_font">{children}</Component>
    </Wrapper>
  );
};

export default Index;
