import Table from '@/components/Table';
import styled from 'styled-components';
import useSWR from 'swr/immutable';
import { fetcher } from '../utils/fetcher';
import { useMemo } from 'react';
import { ICoin } from '@/interfaces/coin';
import { Column } from 'react-table';

const HomeWrapper = styled.div``;

export default function Home() {
  const { data, error } = useSWR(
    'https://api.cryptorank.io/v1/currencies?api_key=560e96748db8dbec3dbc480d63fd1db22532f5d2abc35037de4a4edcd951',
    fetcher
  );

  const coinsList: ICoin[] = useMemo(() => data?.data, [data?.data]);

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
      Header: 'Price',
      accessor: (data: ICoin) => data.values.USD.price,
    },
  ];

  return (
    <>
      <HomeWrapper>
        {!!coinsList && <Table data={coinsList} columns={columns} />}
      </HomeWrapper>
    </>
  );
}
