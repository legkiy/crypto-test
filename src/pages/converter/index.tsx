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

const StyledInput = styled.input<{ width?: number }>`
  color: black;
  border-radius: 4px;
  border: none;
  padding: 4px;
  width: 90%; // ${({ width }) => width + 'em' || '100%'};
  border: 3px solid #3380b4;
  font-size: 18px;
  margin: 5px;
`;

const StyledDiv = styled.div`
  display: flex;
  align-items: center;
`;

const StyledExchangeValue = styled.div`
  padding: 5px;
  background-color: #ffffff;
  margin: 5px;
  margin-right: 0;
  font-size: 18px;
  border-radius: 4px;
  color: black;
`;

interface IProps {}

const Converter = ({}: IProps) => {
  const { allCoins } = useSelector((state: IRootState) => state.coinList);
  const [fromCoin, setFromCoin] = useState<ICoin>();
  const [toCoin, setToCoin] = useState<ICoin>();
  const [value, setValue] = useState('1.0');

  const exchangeValue = useMemo(() => {
    if (!allCoins) {
      return 0;
    }
    const exValue =
      ((fromCoin?.values?.USD?.price || allCoins[0]?.values?.USD?.price) /
        (toCoin?.values?.USD?.price || allCoins[1]?.values?.USD?.price)) *
      +value;

    const stringValue = String(exValue);
    const startIndex = stringValue.indexOf('.');

    for (let i = startIndex + 1; i < stringValue.length; i++) {
      if (stringValue[i] !== '0') {
        return stringValue.slice(0, i + 4);
      }
    }
  }, [allCoins, fromCoin, toCoin, value]);

  // const afterDotValue = () => {
  //   const stringValue = String(exchangeValue);
  //   const startIndex = stringValue.indexOf('.');

  //   for (let i = startIndex; i < stringValue.length; i++) {
  //     if (stringValue[i] !== '0') {
  //       setAfterDot(stringValue.split(0, i + 3));

  //       // setAfterDot(stringValue.indexOf(stringValue[i] + 3));
  //     }
  //   }
  // };

  const handleInputChange = (eventValue: string) => {
    if (eventValue.match(/^([0-9]{1,})?(\.)?([0-9]{1,})?$/))
      setValue(eventValue);
  };

  // const getConvertValue = () => {
  //   let exchangeValue: number = 0;
  //   if (allCoins?.length > 0) {
  //     const diffProce =
  //       (fromCoin?.values?.USD?.price || 1) / (toCoin?.values?.USD?.price || 1);
  //     // exchangeValue = diffProce;
  //   }
  //   if (exchangeValue > 0) {
  //     setAfterDot(2);
  //     return exchangeValue;
  //   }
  //   if (exchangeValue < 0) {
  //     setAfterDot(4);
  //     return exchangeValue;
  //   }
  //   return exchangeValue;
  // };

  return (
    <ConvertertWraper>
      <h1>Converter</h1>
      <StyledInput
        type="text"
        value={value}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          handleInputChange(event.target.value)
        }
      />
      {/* <StyledInput value={getConvertValue().toFixed(afterDot)} /> */}
      {/* <div style={{ display: 'block' }}>
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
        </div> */}
      <StyledDiv>
        {allCoins?.length > 0 && (
          <StyledDiv>
            <Dropdaow
              listData={allCoins}
              selectedCoin={fromCoin || allCoins[0]}
              setSelectedCoin={setFromCoin}
            />
            {'=>'}
            <StyledExchangeValue>{exchangeValue}</StyledExchangeValue>
            <Dropdaow
              listData={allCoins}
              selectedCoin={toCoin || allCoins[1]}
              setSelectedCoin={setToCoin}
            />
          </StyledDiv>
        )}
        {/* <StyledDiv>
          <StyledExchangeValue>
            {value} {fromCoin?.symbol || allCoins[0]?.symbol}
          </StyledExchangeValue>
          {'=>'}
          <StyledExchangeValue>
            {exchangeValue} {toCoin?.symbol || allCoins[1]?.symbol}
          </StyledExchangeValue>
        </StyledDiv> */}
      </StyledDiv>
    </ConvertertWraper>
  );
};

export default Converter;
