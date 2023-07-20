import { ICoin, ICoinsATH } from '@/interfaces/coin';
import { Column } from 'react-table';
import { StyledTable, StyledTableBody, StyledTableHead } from './StyledTable';
import { styled } from 'styled-components';
import useSWR, { useSWRConfig } from 'swr';
import { fetcher } from '@/utils/fetcher';
import { useState } from 'react';
import ATHTooltip from '../ATHTooltip';

interface IStyledTR {
  select: boolean;
}
const StyledTR = styled.tr<IStyledTR>`
  position: relative;
  background-color: ${({ select }) => (select ? '#1a1a1a78' : '')};
  &:hover {
    box-shadow: inset 0 0 500px #20202035;
    cursor: pointer;
  }
`;

interface IProps {
  data: ICoin[];
  columns: readonly Column<ICoin>[];
}

const Table = ({ data, columns }: IProps) => {
  const oneCoinAPI = (coinKey: string): string =>
    `https://tstapi.cryptorank.io/v0/coins/${coinKey}`;

  const [coinATH, setCoinATH] = useState<ICoinsATH>();

  const getCoin = useSWR(
    'https://tstapi.cryptorank.io/v0/coins/bitcoin',
    fetcher
  );

  const onClickCoin = async (el: ICoin) => {
    const dataRes = await fetch(oneCoinAPI(el.slug));
    const data = await dataRes.json();
    setCoinATH(data.data);
  };

  return (
    <StyledTable>
      <StyledTableHead>
        <tr>
          {columns.map((cell, index) => (
            <th key={index}>{cell.Header!.toString()}</th>
          ))}
        </tr>
      </StyledTableHead>
      <StyledTableBody>
        {data.map((el, index) => (
          <StyledTR
            key={index}
            onClick={() => {
              onClickCoin(el);
            }}
            select={el?.name === coinATH?.name}
          >
            <td>{el.name}</td>
            <td>{el.values.USD.price}</td>
            <td>{el.circulatingSupply}</td>
            <td>{el.values.USD.marketCap.toFixed(2)}</td>
            <td>{el.category}</td>
            {coinATH && el.name === coinATH.name && (
              <ATHTooltip coin={coinATH!} />
            )}
          </StyledTR>
        ))}
      </StyledTableBody>
    </StyledTable>
  );
};

export default Table;
