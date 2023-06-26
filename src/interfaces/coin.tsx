export interface ICoin {
  category: string;
  circulatingSupply: number;
  id: number;
  lastUpdated: string;
  maxSupply?: number;
  name: string;
  rank: number;
  slug: string;
  symbol: string;
  tokens?: [];
  totalSupply?: number;
  values: {
    USD: {
      price: number;
      volume24h: number;
      high24h: number;
      low24h: number;
      marketCap: number;
      percentChange24h: number;
    };
  };
  // id: number;
  // slug: string;
  // symbol: string;
  // name: string;
  // type: 'coin' | 'token';
  // category?: string;
  // rank: number;
  // volume24hBase: number;

  // values: {
  //   [key in 'USD' | 'BTC' | 'ETH']: {
  //     price: number;
  //     marketCap: number;
  //     volume24h: number;
  //     high24h?: number;
  //     low24h?: number;
  //     percentChange24h?: number;
  //     percentChange7d?: number;
  //     percentChange30d?: number;
  //     percentChange3m?: number;
  //     percentChange6m?: number;
  //   };
  // };

  // tokens: {
  //   tokenAddress: string;
  //   platform: {
  //     id: number;
  //     slug: string;
  //     name: string;
  //   };
  // }[];

  // links: {
  //   type: 'web';
  //   value: string;
  // }[];
  // circulatingSupply: number | null; //чтобы была возможность указать null при отсутствии значения
  // totalSupply: number | null; //чтобы была возможность указать null при отсутствии значения
  // maxSupply: number | null; //чтобы была возможность указать null при отсутствии значения

  // lastUpdated: string;
  // images: {
  //   '16x16': string;
  //   '200x200': string;
  //   '60x60': string;
  // };
}
