import React from 'react';
import styled from 'styled-components';

const ConvertertWraper = styled.div`
  width: fit-content;
  margin: 20px auto;
`;

const StyledInput = styled.input`
  color: black;
  margin: 10px 0;
  min-width: 100px;
  max-width: 300px;
`;

interface IProps {}

const Converter = ({}: IProps) => {
  return (
    <ConvertertWraper>
      <h1>Converter</h1>
      <StyledInput></StyledInput>
    </ConvertertWraper>
  );
};

export default Converter;
