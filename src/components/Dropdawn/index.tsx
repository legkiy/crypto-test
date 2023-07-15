import { ICoin } from '@/interfaces/coin';
import React, { useState } from 'react';
import Button from '../Button';
import styled from 'styled-components';

const StyledDropDown = styled.div`
  position: absolute;
  left: 0;
  height: 300px;
  overflow: scroll;
  box-shadow: 0 0 4px black;
  border-radius: 4px;
  p {
    padding: 5px;
    cursor: pointer;
    &:hover {
      background-color: #32353f85;
    }
  }
`;

interface IProps {
  listData: ICoin[];
}

const Dropdaow = ({ listData }: IProps) => {
  const [fromCoin, setFromCoin] = useState(listData[0]);
  const [showDropdawn, setShowDropdawn] = useState(false);
  const handleOnClikCoin = (el: ICoin) => {
    setFromCoin(el);
    setShowDropdawn(false);
  };
  return (
    <div style={{ position: 'relative' }}>
      <Button onClick={() => setShowDropdawn((prev) => !prev)}>
        <>{fromCoin.name}</>
      </Button>
      {showDropdawn && (
        <StyledDropDown>
          {listData.map((el) => (
            <p onClick={() => handleOnClikCoin(el)}>{el.name}</p>
          ))}
        </StyledDropDown>
      )}
    </div>
  );
};

export default Dropdaow;
