import React from "react";
import TradingViewWidget from "./chart";
import Image from "next/image";
import { FaArrowUp, FaInfoCircle } from "react-icons/fa";
import { TiArrowSortedUp } from "react-icons/ti";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import Cards from "./cards";
import Tabs from "./tabs";
import Coins from "./coins";
import Currency from "./currency";

const Component = () => {
  return (
    <div className="flex flex-col w-full min-h-screen p-5  max-lg:p-0 bg-[#DEDFE2]">
      <div className="w-full h-14 pl-5 flex items-center flex-row mt-20  text-gray-900">
        <span className=" text-gray-500 flex flex-row justify-center items-center">Cryptocurrencies <MdOutlineKeyboardDoubleArrowRight/> </span> Bitcoin{" "}
      </div>
      <div className="w-full min-h-screen flex flex-row  justify-between  max-lg:flex-col">
        <div className="w-2/3 max-lg:w-full max-lg:px-2 min-h-screen  relative">
        <div className=" flex flex-col w-full min-h-screen my-2 rounded-xl bg-[#fff]">
          {/* Currency show */}
         <Currency/>
          {/* Include TradingViewWidget component here */}
          <TradingViewWidget />
        </div>

        <Tabs/>
          
          <div className=" w-full min-h-screen px-4 mb-4 bg-[#fff] rounded-xl mt-4">
          <h1 className="text-[24px] text-[#0F1629] font-semibold mt-12">Sentiments</h1>
          <h1 className="text-[18px] text-[#44475B] font-semibold mt-7 mb-3 flex flex-row items-center ">Key Events <FaInfoCircle className="mx-2 " title="Key Events  KoinX"/></h1>
         
         {/* Cards */}
         <Cards/>
          <h1 className="text-[18px] text-[#44475B] font-semibold mt-7 mb-3 flex flex-row items-center ">Analyst Estimates <FaInfoCircle className="mx-2 " title="Analyst Estimates  KoinX"/></h1>
          <div className="w-full h-36 flex flex-row">
            <div className=" w-36 h-36 rounded-full flex justify-center items-center bg-[#EBF9F4] ">
              <h1 className=" text-[#0FBA83] text-[30px] font-bold ">76%</h1>
            </div>
            <div className=" flex justify-evenly flex-col items-center ml-4 w-1/2 ">
              <div className=" w-full flex flex-row items-center justify-start">
                <h1 className="text-[16px] text-[#7C7E8C] font-medium">Buy</h1>
                <div className=" w-[250px] ml-3 rounded-md bg-[#00B386] h-[8px] "></div><h1 className="text-gray-900 ml-1">76%</h1>
              </div>
              <div className=" w-full flex flex-row items-center justify-start">
                <h1 className="text-[16px] text-[#7C7E8C] font-medium">Hold</h1>
                <div className=" w-[35px] ml-3 rounded-md bg-[#C7C8CE] h-[8px]"></div><h1 className="text-gray-900 ml-1">8%</h1>
              </div>
              <div className=" w-full flex flex-row items-center justify-start">
                <h1 className="text-[16px] text-[#7C7E8C] font-medium">Sell</h1>
                <div className=" w-[80px] ml-3 rounded-md bg-[#F7324C] h-[8px]"></div><h1 className="text-gray-900 ml-1">16%</h1>
              </div>
            </div>
          </div>
          </div>
          <div className=" w-full min-h-screen px-4 bg-[#fff] rounded-xl">
        
            <h1 className="text-[24px] text-[#0F1629] font-bold mt-7">About Bitcoin</h1>
            <h3 className=" text-[18px] text-[#0B1426] mt-6 font-semibold">
              What is Bitcoin?
            </h3>
            <h5 className=" text-[16px] text-[#3E424A] ">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Asperiores ipsum ex nobis sit sequi rerum molestiae nisi
              explicabo, nihil recusandae aliquid magnam impedit labore
              consequuntur modi veniam deleniti et soluta voluptatum praesentium
              suscipit id repellat? Amet ea consequatur similique corrupti
              dolorem, quia ratione tempora consectetur! Maiores, distinctio
              sed. Magni quae corporis in inventore eligendi! Atque, rem!{" "}
            </h5>
            <h3 className=" text-[18px] text-[#0B1426] mt-6 font-semibold">
              Lorem ipsum dolor sit amet{" "}
            </h3>
            <h5 className=" text-[16px] text-[#3E424A] ">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Asperiores ipsum ex nobis sit sequi rerum molestiae nisi
              explicabo, nihil recusandae aliquid magnam impedit labore
              consequuntur modi veniam deleniti et soluta voluptatum praesentium
              suscipit id repellat? Amet ea consequatur similique corrupti
              dolorem, quia ratione tempora consectetur! Maiores, distinctio
              sed. Magni quae corporis in inventore eligendi! Atque, rem! , sit
              amet consectetur adipisicing elit.
              <br />
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem
              ipsum ullam aut debitis iste quis quos minus doloribus impedit
              delectus perspiciatis magnam, asperiores expedita, alias
              reiciendis velit doloremque dolore error.
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem similique dolorem aperiam architecto quidem tempore
              aliquam quisquam neque perspiciatis iste quibusdam delectus
              mollitia suscipit laborum commodi at reprehenderit, assumenda
              corporis!
            </h5>
            <h1 className="text-[24px] font-semibold mt-5 text-[#0F1629] ">
              Already Holding Bitcoin?
            </h1>

            <div className=" w-full h-40 max-md:h-auto space-y-3 flex max-md:flex-col flex-row mt-4 items-center  ">
              {/* background: linear-gradient(135deg, #79F1A4 0%, #0E5CAD 100%);
               */}
              <div
                className=" w-2/5 max-md:w-full flex-wrap h-full rounded-lg flex justify-evenly items-center flex-row  mr-6"
                style={{
                  background:
                    "linear-gradient(135deg, #79F1A4 0%, #0E5CAD 100%)",
                }}
              >
                <Image
                  src="/image2.jfif"
                  alt="logo"
                  width={1000}
                  height={1000}
                  className="w-1/3 h-36 rounded-md object-cover  "
                />
                <div>
                  <h1 className=" text-xl font-semibold px-2">
                    Calculate your <br /> profite
                  </h1>
                  <button className=" w-28 text-gray-800 text-sm mt-2 rounded-lg py-1  bg-white font-semibold ">
                    Check Now
                  </button>
                </div>
              </div>
              <div
                className=" w-2/5 h-full max-md:w-full rounded-lg flex justify-evenly items-center flex-row  mr-6"
                style={{
                  background:
                    "linear-gradient(135.73deg, #FF9865 0%, #EF3031 110.55%)",
                }}
              >
                <Image
                  src="/image1.jfif"
                  alt="logo"
                  width={1000}
                  height={1000}
                  className="w-1/3 h-36 rounded-md object-cover  "
                />
                <div>
                  <h1 className=" text-xl font-semibold px-2">
                    Calculate your <br /> profite
                  </h1>
                  <button className=" w-28 text-gray-800 text-sm mt-2 rounded-lg py-1  bg-white font-semibold">
                    Check Now
                  </button>
                </div>
              </div>
            </div>
            <h5 className=" text-[16px] text-[#3E424A] mt-5">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Asperiores ipsum ex nobis sit sequi rerum molestiae nisi
              explicabo, nihil recusandae aliquid magnam impedit labore
              consequuntur modi veniam deleniti et soluta voluptatum praesentium
              suscipit id repellat? Amet ea consequatur similique corrupti
              dolorem, quia ratione tempora consectetur! Maiores, distinctio
              sed. Magni quae corporis in inventore eligendi! Atque, rem! , sit
              amet consectetur adipisicing elit.
              <br />
            </h5>
          </div>
        </div>
        <div className="w-[calc(33%-40px)] max-lg:w-full max-lg:mt-10 min-h-screen  rounded-xl ml-2 items-center flex-col flex p-3">
          <div className="w-[95%] max-lg:w-full h-[550px] max-lg:h-[400px] rounded-lg bg-[#0052FE] flex justify-evenly items-center flex-col text-center ">
            <h1 className="text-xl font-bold">
              Get Started with KoinX for FREE
            </h1>
            <h3
              className="text-[#F2F2F2]
"
            >
              With our range of features that you can equip for free, KoinX
              allows you to be more educated and aware of your tax reports.
            </h3>
            <Image
              src="/Frame.png"
              alt="logo"
              width={1000}
              height={1000}
              className="w-44 h-44 object-cover "
            />
            <button className="w-44 py-2 bg-white rounded-lg font-bold text-black">
              Get Started For Free
            </button>
          </div>
         <Coins/>
        </div>
      </div>
    </div>
  );
};

export default Component;
