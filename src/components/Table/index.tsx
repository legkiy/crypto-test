import { ICoin, ICoinsATH } from '@/interfaces/coin';
import { Column } from 'react-table';
import { StyledTable, StyledTableBody, StyledTableHead } from './StyledTable';
import { styled } from 'styled-components';
import { fetcher } from '@/utils/fetcher';
import { useRef, useState } from 'react';
import { useOutsideClick } from '@/hooks/useOutsideClick';
import useSWR from 'swr';
import ATHTooltip from '../ATHTooltip';

interface IStyledTr {
  itSelect: boolean;
}
const StyledTr = styled.tr<IStyledTr>`
  position: relative;
  background-color: ${({ itSelect }) => (itSelect ? '#1a1a1a78' : '')};
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
  const [coinATH, setCoinATH] = useState<ICoinsATH | null>(null);
  const ref = useRef(null);

  const oneCoinAPI = (coinKey: string): string =>
    `https://tstapi.cryptorank.io/v0/coins/${coinKey}`;

  const getCoin = useSWR(
    'https://tstapi.cryptorank.io/v0/coins/bitcoin',
    fetcher
  );

  const onClickCoin = async (el: ICoin) => {
    const dataRes = await fetch(oneCoinAPI(el.slug));
    const data = await dataRes.json();
    setCoinATH(data.data);
  };

  useOutsideClick(ref, () => setCoinATH(null));

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
          <StyledTr
            key={index}
            onClick={() => {
              onClickCoin(el);
            }}
            itSelect={el.name === coinATH?.name}
            ref={ref}
          >
            <td>{el.name}</td>
            <td>{el.values.USD.price}</td>
            <td>{el.circulatingSupply}</td>
            <td>{el.values.USD.marketCap.toFixed(2)}</td>
            <td>{el.category}</td>
            {coinATH && el.name === coinATH.name && (
              <ATHTooltip coin={coinATH!} />
            )}
          </StyledTr>
        ))}
      </StyledTableBody>
    </StyledTable>
  );
};

export default Table;
