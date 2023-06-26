import useSWR from 'swr';
import { fetcher } from './fetcher';
import { useSelector } from 'react-redux';
import { IRootState } from '@/store';
import { setSoloCoin } from '../store/coinsListSlice';

export function useCoin() {
  // const { coinList } = useSelector(
  //   (state: IRootState) => state.CoinList
  // );
  // const getATH = (index: number) => {
  const coinList: any = [];
  const copyCoinList = coinList.slice(index, index + 20);

  const { data } = useSWR('', () =>
    Promise.allSettled(
      copyCoinList.map((coin) =>
        fetch(`https://tstapi.cryptorank.io/v0/coins/${coin.slug}`).then(
          async (response) => {
            // do something in here
            const ath = await response.json();
            console.log(ath);
          }
        )
      )
    )
  );

  // const promisArr = [];

  // for (let i = index; i < index + 20; i++) {
  //   let slug = coiinList[i].slug;
  //   promisArr.push(fetch(`https://tstapi.cryptorank.io/v0/coins/${slug}`));
  // }
  // Promise.allSettled(promisArr).then((res) => console.log(res));

  // coiinList.forEach((el, index) => {
  //   setTimeout(() => {
  //     const { data, error } = useSWR(
  //       `https://tstapi.cryptorank.io/v0/coins/${el.slug}`,
  //       fetcher
  //     );
  //     console.log(data);
  //   });
  // });
  // const res = data?.data?.athPrice?.USD;
  // console.log(res);

  // return res;
  // };
  // return { getATH };
}
