import Button from '@/components/Button';
import Dropdaow from '@/components/Dropdawn';
import { IRootState } from '@/store';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const ConvertertWraper = styled.div`
  width: fit-content;
  margin: 20px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledInput = styled.input`
  color: black;
  margin: 10px 0;
  min-width: 50px;
  max-width: 100px;
`;

const StyledDiv = styled.div`
  display: flex;
  align-items: center;
`;

interface IProps {}

const Converter = ({}: IProps) => {
  const { allCoins } = useSelector((state: IRootState) => state.coinList);

  return (
    <ConvertertWraper>
      <h1>Converter</h1>
      <StyledInput></StyledInput>
      <StyledDiv>
        <Dropdaow listData={allCoins} />
        {'=>'}
        <Dropdaow listData={allCoins} />
      </StyledDiv>
    </ConvertertWraper>
  );
};

export default Converter;
