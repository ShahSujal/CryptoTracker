import { trendingCoins } from "@/handlers/CoinGekoFunctions";
import { CoinDataType } from "@/handlers/coin";
import Image from "next/image";
import React from "react";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";

const Coins = async () => {
  const res = await trendingCoins();
  return (
    <div className="w-[95%] flex justify-evenly items-start flex-col h-60 bg-[#fff] mt-4 rounded-lg">
      <h1 className="text-xl ml-2  text-[#0F1629] font-semibold">
        Trending Coins (24h)
      </h1>
      {res.coins.slice(0, 3).map((coin: CoinDataType) => {
        let priceChange = Math.floor(
          coin.item.data.price_change_percentage_24h.eth
        );
        return (
          <div
            className=" w-full h-8 flex flex-row justify-between items-center px-2"
            key={coin.item.id}
          >
            <div className=" flex justify-center items-center space-x-2">
              <Image
                src={coin.item.small}
                alt=""
                width={30}
                height={30}
                className="w-7 h-7"
              />
              <h1 className=" text-[#151515] font-medium">
                {coin.item.name} ({coin.item.symbol})
              </h1>
            </div>
            <button
              className={` px-2  ${
                priceChange > 0
                  ? "text-[#14B079] bg-[#EBF9F4]"
                  : "text-[red] bg-[#fce2e2]"
              } flex justify-center items-center flex-row space-x-2`}
            >
              {priceChange >
              0 ? (
                <TiArrowSortedUp />
              ) : (
                <TiArrowSortedDown />
              )}{" "}
              {priceChange}%
            </button>
          </div>
        );
      })}
     
    </div>
  );
};

export default Coins;
