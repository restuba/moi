import React, { useState } from 'react';
import { Typography } from '../../components';
import { ItemWrapper } from './style';

const Item = (props) => {
  const { data, onCursor } = props;
  const [isOpen, setIsOpen] = useState(false);
  const [hovered, setHovered] = useState(false);

  return (
    <ItemWrapper
      layout
      onClick={() => {
        setIsOpen(!isOpen);
      }}
      onHoverStart={() => {
        return setHovered(!hovered);
      }}
      onHoverEnd={() => {
        return setHovered(!hovered);
      }}
      onMouseEnter={() => {
        return onCursor('hovered');
      }}
      onMouseLeave={onCursor}
    >
      <div className="component_project_list_item_image">
        <img src={data.image} alt="" />
      </div>
      <div className="component_project_list_item_body">
        <Typography tag="h4" size={{ sm: 2, md: 4 }} unit="rem" block>
          {data.title}
          <span className="arrow">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 101 57">
              <path
                // eslint-disable-next-line max-len
                d="M33 34H0V24h81.429L66 7.884 73.548 0l19.877 20.763.027-.029L101 28.618 73.829 57l-7.548-7.884L80.753 34H33z"
                fill="#FFF"
                fillRule="evenodd"
              />
            </svg>
          </span>
        </Typography>
      </div>
    </ItemWrapper>
  );
};

export default Item;
