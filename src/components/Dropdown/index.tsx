import { ICoin } from '@/interfaces/coin';
import React, { Dispatch, SetStateAction, useState } from 'react';
import Button from '../Button';
import styled from 'styled-components';

const StyledDropDown = styled.div`
  position: absolute;
  left: 0;
  height: 300px;
  overflow: scroll;
  box-shadow: 0 0 4px black;
  border-radius: 4px;
  background-color: #454956;
  p {
    font-size: large;
    padding: 5px;
    cursor: pointer;
    &:hover {
      background-color: #32353f85;
    }
  }
`;

interface IProps {
  listData: ICoin[];
  selectedCoin: ICoin;
  setSelectedCoin: Dispatch<SetStateAction<ICoin | undefined>>;
}

const Dropdown = ({ listData, selectedCoin, setSelectedCoin }: IProps) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const handleOnClikCoin = (el: ICoin) => {
    setSelectedCoin(el);
    setShowDropdown(false);
    console.log(el);
  };
  return (
    <div style={{ position: 'relative' }}>
      <Button onClick={() => setShowDropdown((prev) => !prev)}>
        <>{selectedCoin?.name}</>
      </Button>
      {showDropdown && (
        <StyledDropDown>
          {listData.map((el, index) => (
            <p key={index} onClick={() => handleOnClikCoin(el)}>
              {el.name}
            </p>
          ))}
        </StyledDropDown>
      )}
    </div>
  );
};

export default Dropdown;
