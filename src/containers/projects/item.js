import React, { useState } from 'react';
import { Typography } from '../../components';
import { ItemWrapper } from './style';

const Item = (props) => {
  const { data, onCursor } = props;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <ItemWrapper
      layout
      onClick={() => {
        setIsOpen(!isOpen);
      }}
      onMouseEnter={onCursor}
      image={data.image}
    >
      <div className="component_project_list_item_image">
        <img src={data.image} alt="" />
      </div>
      <div className="component_project_list_item_body">
        <Typography tag="h4" size={{ sm: 1.15, md: 3 }} unit="rem" block>
          {data.title}
        </Typography>
      </div>
    </ItemWrapper>
  );
};

export default Item;
