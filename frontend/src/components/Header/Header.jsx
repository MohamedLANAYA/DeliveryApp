import React from "react";

const Header = () => {
  return (
    <div className="flex rounded-xl pt-[45px] border border-solid bg-zinc-50 border-black border-opacity-20 min-h-[610px] relative">
      <div className="flex flex-col mt-[112px] gap-4">
        <div className="text-[16px] col-auto ml-[53px] mt-[45px]">
          Order Restaurant food, takeaway and groceries.
        </div>
        <div className="text-[54px] ml-[53px] max-w-[552px] font-semibold leading-[66px] text-slate-950 max-md:max-w-full max-md:text-4xl max-md:leading-[54px]">
          Fast and Fresh, <br />
          <span className="text-[#FDBB1E]">Right to Your Door Step</span>
        </div>
        <div className="text-[16px] col-auto ml-[53px]">
          Enter a postcode to see what we deliver
        </div>

        <div className="flex col-auto items-center border ml-[53px] border-gray-300 rounded-full overflow-hidden max-w-[500px]">
          {/* Input Field */}
          <input
            type="text"
            placeholder="e.g. EC4R 3TE"
            className="flex-1 px-4 py-2 w-[373px] h-[57px] text-gray-700 outline-none placeholder-gray-500"
          />

          {/* Search Button */}
          <button className="bg-[#FDBB1E] px-6 py-2 h-[57px] w-[188px] text-white font-semibold rounded-full">
            Search
          </button>
        </div>

        {/* big yellow shape */}
      </div>
      
      <div
        className="w-[626px] h-[565px] bg-[#FDBB1E] absolute right-0"
        style={{ borderRadius: '282.5px 0px 12px 0px' }}
      >
         {/*image2 */}
       <img
      loading="lazy"
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/3d8f453ee2a07d131ff1718a9714e1852cadd28c136bb6be37a8ea438b36493d?placeholderIfAbsent=true&apiKey=376ca8dd2e4d4c5c9a7442cd549d15f1"
      alt="Product showcase"
      className="absolute object-contain right-[300px] bottom-0 w-full rounded-xl aspect-[0.83] max-w-[377px]"
    />  
       
        {/* Container for notifications */}
        <div className="relative w-full h-full">
          {/*notification 1 */}
          <div className="absolute top-0 right-8 ">
            
            <img
      loading="lazy"
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/5854c8d98e99e2756a2812491296579365b5e8eb59c4610d02b4b3b90474c8df?apiKey=376ca8dd2e4d4c5c9a7442cd549d15f1&"
      alt="Featured content display"
      className="object-contain w-full aspect-[0.83] max-w-[412px] right-0 m-0"
    />

          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
