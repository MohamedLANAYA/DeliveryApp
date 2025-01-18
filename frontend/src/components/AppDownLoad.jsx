import React from "react";

import { assets } from "../assets/assets";

const AppDownload = () => {
  return (
    <div className="flex mt-[100px] rounded-xl pt-[45px] border border-solid bg-zinc-50 border-black border-opacity-20 min-h-[610px] relative">
         <img
      loading="lazy"
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/dcd4861cc7846d004dd7acc1bfd4a609011b18ca106aebc836d8dafacba2eaec?placeholderIfAbsent=true&apiKey=376ca8dd2e4d4c5c9a7442cd549d15f1"
      alt="Hero section showcase"
      className="object-contain bottom-0 absolute w-[60%] aspect-[1.28] max-w-[832px]"
    />
      <div className="max-w-[559px]  ml-[600px] mt-10">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-[57%] max-md:ml-0 max-md:w-full">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/d9d6e4fd-34c4-4600-910c-1db7e9c163b4?placeholderIfAbsent=true&apiKey=376ca8dd2e4d4c5c9a7442cd549d15f1"
              alt="Hero section illustration"
              className="object-contain self-stretch my-auto aspect-[4.13] w-[302px] max-md:mt-10"
            />
          </div>

          <div className="flex flex-col ml-5 w-[43%] max-md:ml-0 max-md:w-full">
            <div className="text-7xl font-bold tracking-tighter text-slate-950 max-md:mt-7 max-md:text-4xl">
              is more{" "}
            </div>
          </div>
        </div>
        <div className="flex row mt-7 flex-col text-5xl font-medium tracking-tighter max-w-[878px] rounded-[120px] text-slate-950 max-md:text-4xl">
      <div className="px-16 py-1.5 w-full bg-slate-950 rounded-[120px] max-md:px-5 max-md:max-w-full max-md:text-4xl">
        <span className="text-amber-500 underline">Personalised</span>
        <span className="text-white"> & Instant</span>
      </div>
      
    </div>
    <div className="text-2xl ml-10 text-slate-950 mt-7 max-md:text-lg">
    <p className="ml-10 right-0">
        For Better Exprence Download The App
      </p>
      <div className=" flex justify-center mt-10 gap-4">
        <img 
         className="w-40 max-w-[180px] transition duration-500' cursor-pointer hover:transform hover:scale-[1.05] "
        src={assets.play_store} />
        <img 
         className="w-40 max-w-[180px] transition dur' cursor-pointer hover:transform hover:scale-[1.05]"
        src={assets.app_store} />
      </div>
    </div>
      </div>
      
    </div>
    
  );
};

export default AppDownload;
