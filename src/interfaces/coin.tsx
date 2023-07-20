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
  ath?: number;
}
export interface ICoinsATH {
  name: string;
  marketCap: number;
  price: {
    USD: number;
  };
  athPrice: {
    USD: number;
    date: string;
  };
  availableSupply: number;
  category: string;
}
