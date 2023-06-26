import styled from 'styled-components';
import { ICoin } from '@/interfaces/coin';
import { Column } from 'react-table';
import useSWR from 'swr/immutable';
import { fetcher } from '@/utils/fetcher';
import { useCallback, useEffect, useMemo } from 'react';
import Table from '@/components/Table';
import { useCoin } from '@/utils/useCoin';
import { useDispatch, useSelector } from 'react-redux';
import { setCoinList } from '@/store/coinsListSlice';
import { IRootState } from '@/store';

const HomeWrapper = styled.div``;

export default function Home() {
  const { data, error } = useSWR(
    'https://api.cryptorank.io/v1/currencies?api_key=560e96748db8dbec3dbc480d63fd1db22532f5d2abc35037de4a4edcd951',
    fetcher
  );
  const dispatch = useDispatch();
  const coinsList: ICoin[] = useMemo(() => data?.data, [data?.data]);
  // const { coinList } = useSelector((state: IRootState) => state.CoinList);

  const copyCoinList = coinsList?.slice(0, 20);

  const ATH = useSWR({ url: 'https://tstapi.cryptorank.io/v0/coins' }, () =>
    useCoin(coinsList)
  );
  console.log(ATH.data?.map((coin) => coin.value.data.athPrice));

  const useCoin = (list: any[]) =>
    Promise.allSettled(
      list?.map((coin: any) =>
        fetch(`https://tstapi.cryptorank.io/v0/coins/${coin.slug}`).then(
          async (response) => {
            // do something in here
            const ath = await response.json();
            return ath;
          }
        )
      )
    );

  useEffect(() => {
    // dispatch(setCoinList(data?.data));
  }, [coinsList]);
  const columns: readonly Column<ICoin>[] = [
    {
      Header: 'ID',
      accessor: 'id',
    },
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
    {
      Header: 'From ATH',
      accessor: 'tokens',
    },
    {
      Header: 'To ATH',
      accessor: 'rank',
    },
  ];

  return (
    <>
      <HomeWrapper>
        {coinsList?.length > 0 && <Table data={coinsList} columns={columns} />}
      </HomeWrapper>
    </>
  );
}
