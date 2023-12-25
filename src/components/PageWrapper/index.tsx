import { styled } from 'styled-components';
import { ReactNode, useEffect, useMemo } from 'react';
import { ICoin } from '@/interfaces/coin';
import { fetcher } from '@/utils/fetcher';
import { useDispatch } from 'react-redux';
import { setAllCoins } from '@/store/coinsListSlice';
import useSWR from 'swr/immutable';

const StyledMain = styled.div``;

interface IProps {
  children: ReactNode;
}

const PageWrapper = ({ children }: IProps) => {
  const { data, error } = useSWR(
    'https://api.cryptorank.io/v1/currencies?api_key=560e96748db8dbec3dbc480d63fd1db22532f5d2abc35037de4a4edcd951',
    fetcher
  );
  const dispatch = useDispatch();
  const coinsList: ICoin[] = useMemo(() => data?.data, [data?.data]);

  useEffect(() => {
    dispatch(setAllCoins(coinsList));
  }, [coinsList, dispatch]);

  return <StyledMain>{!!coinsList && children}</StyledMain>;
};
export default PageWrapper;
