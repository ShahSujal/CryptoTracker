export const trendingCoins = async () => {
    const response = await fetch('https://api.coingecko.com/api/v3/search/trending');
    const data = await response.json();
    return data;
}
export const getCoinData = async (id:number) => {
    const response = await fetch(`https://api.coingecko.com/api/v3/coins/${id}`);
    const data = await response.json();
    return data;
}
export const CurrencyPrice = async (currencyName:string) => {
    const response = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${currencyName}&vs_currencies=inr%2Cusd&include_24hr_change=true`);
    const data = await response.json();
    return data;
}
