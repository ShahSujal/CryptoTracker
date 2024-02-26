export type CoinDataType = {
    item: {
      id: string;
      coin_id: number;
      name: string;
      symbol: string;
      market_cap_rank: number;
      thumb: string;
      small: string;
      large: string;
      slug: string;
      price_btc: number;
      score: number;
      data: {
        price: string;
        price_btc: string;
        price_change_percentage_24h: {
          [currency: string]: number;
        };
        market_cap: string;
        market_cap_btc: string;
        total_volume: string;
        total_volume_btc: string;
        sparkline: string;
        content: null;
      };
    };
  };
  export type CurrencyDataType = {
    bitcoin: {
      usd: number;
      inr: number;
      usd_24h_change: number;
      inr_24h_change: number;
    };
  }