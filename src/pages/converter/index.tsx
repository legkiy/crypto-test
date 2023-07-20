import Button from '@/components/Button';
import Dropdaow from '@/components/Dropdawn';
import { ICoin } from '@/interfaces/coin';
import { IRootState } from '@/store';
import React, { ChangeEventHandler, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const ConvertertWraper = styled.div`
  width: fit-content;
  margin: 20px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledInput = styled.input<{ width?: string }>`
  color: black;
  margin: 10px 0;
  /* min-width: 40px; */
  width: ${({ width }) => width || 'auto'};
  max-width: 100px;
  font-size: large;
  margin: 5px;
`;

const StyledDiv = styled.div`
  display: flex;
  align-items: center;
`;

interface IProps {}

const Converter = ({}: IProps) => {
  const { allCoins } = useSelector((state: IRootState) => state.coinList);
  const [fromCoin, setFromCoin] = useState<ICoin>();
  const [toCoin, setToCoin] = useState<ICoin>();
  const [afterDot, setAfterDot] = useState(5);

  const [value, setValue] = useState('1.0');
  const handleInputChange = (eventValue: string) => {
    if (eventValue.match(/^([0-9]{1,})?(\.)?([0-9]{1,})?$/))
      setValue(eventValue);
  };

  const getConvertValue = () => {
    if (allCoins?.length > 0) {
      const USDAmount = +value / (fromCoin?.values?.USD?.price || 1);
      const convertValue = USDAmount * (toCoin?.values?.USD?.price || 1);
      return convertValue;
    }
    return 0;
  };

  return (
    <ConvertertWraper>
      <h1>Converter</h1>
      <StyledDiv>
        <StyledInput
          type="text"
          value={value}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            handleInputChange(event.target.value)
          }
        />
        {'=>'}
        <StyledInput value={getConvertValue().toFixed(afterDot)} />
        <div style={{ display: 'block' }}>
          <p>Знаков после запятой</p>
          <StyledInput
            width="42px"
            type="number"
            onChange={(el: React.FormEvent<HTMLInputElement>) => {
              if (el.currentTarget.value.length > 2) return;
              if (+el.currentTarget.value < 1) return;
              setAfterDot(+el.currentTarget.value);
            }}
            value={afterDot}
          />
        </div>
      </StyledDiv>
      {allCoins?.length > 0 && (
        <StyledDiv>
          <Dropdaow
            listData={allCoins}
            selectedCoin={fromCoin || allCoins[0]}
            setSelectedCoin={setFromCoin}
          />
          {'=>'}
          <Dropdaow
            listData={allCoins}
            selectedCoin={toCoin || allCoins[0]}
            setSelectedCoin={setToCoin}
          />
        </StyledDiv>
      )}
    </ConvertertWraper>
  );
};

export default Converter;
