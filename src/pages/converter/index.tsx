import { ICoin } from '@/interfaces/coin';
import { IRootState } from '@/store';
import { useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import Dropdown from '@/components/Dropdown';
import Head from 'next/head';
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
  border-radius: 6px;
  border: none;
  padding: 4px;
  width: 200px;
  border: 2px solid #959b9e;
  font-size: 18px;
  margin: 5px;
  outline: none;
  &:focus {
    border: 2px solid #3380b4;
  }
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

  const handleInputChange = (eventValue: string) => {
    if (eventValue.length < 1) return setValue('1.0');
    if (eventValue.match(/^([0-9]{1,})?(\.)?([0-9]{1,})?$/)) {
      return setValue(eventValue);
    }
  };

  return (
    <>
      <Head>
        <title>Converter</title>
      </Head>
      <ConvertertWraper>
        <h1>Converter</h1>
        <StyledInput
          autoFocus
          type="text"
          value={value}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            handleInputChange(event.target.value)
          }
        />
        <StyledDiv>
          {allCoins?.length > 0 && (
            <StyledDiv>
              <Dropdown
                listData={allCoins}
                selectedCoin={fromCoin || allCoins[0]}
                setSelectedCoin={setFromCoin}
              />
              {'=>'}
              <StyledExchangeValue>{exchangeValue}</StyledExchangeValue>
              <Dropdown
                listData={allCoins}
                selectedCoin={toCoin || allCoins[1]}
                setSelectedCoin={setToCoin}
              />
            </StyledDiv>
          )}
        </StyledDiv>
      </ConvertertWraper>
    </>
  );
};

export default Converter;
