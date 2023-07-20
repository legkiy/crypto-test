import styled from 'styled-components';
import { ICoin } from '@/interfaces/coin';
import { Column } from 'react-table';
import Table from '@/components/Table';
import { useSelector } from 'react-redux';
import { IRootState } from '@/store';

const HomeWrapper = styled.div``;
const StyledCenterDiv = styled.div`
  margin: 10px auto;
  width: fit-content;
  h2 {
    width: min-content;
  }
`;

export default function Home() {
  const { allCoins } = useSelector((state: IRootState) => state.coinList);

  const columns: readonly Column<ICoin>[] = [
    {
      Header: 'Name',
      accessor: 'name',
    },
    {
      Header: 'Price USD',
      accessor: (data: ICoin) => data.values.USD.price.toFixed(5),
    },
    {
      Header: 'Circulating Supply',
      accessor: 'circulatingSupply',
    },
    {
      Header: 'Market Cap',
      accessor: (data: ICoin) => data.values.USD.marketCap,
    },
    {
      Header: 'Category',
      accessor: 'category',
    },
  ];

  return (
    <>
      <HomeWrapper>
        {allCoins?.length > 0 ? (
          <Table data={allCoins} columns={columns} />
        ) : (
          <StyledCenterDiv>
            <h2>Loading...</h2>
          </StyledCenterDiv>
        )}
      </HomeWrapper>
    </>
  );
}
