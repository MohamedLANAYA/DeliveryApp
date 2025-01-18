import * as React from "react";


export function Hire() {
  return (
 <div className="flex row gap-11 relative mt-10">
       <div className="flex mt-10 flex-col relative text-md font-bold text-white rounded-xl max-w-[554px] min-w-[554px]">
      <div className="flex relative flex-col items-start px-16 pb-10 w-full rounded-xl min-h-[325px] max-md:px-5 max-md:max-w-full">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/294df3a6789bdf087e754884bf4491ba16ce9e12274877363080058975eee189?placeholderIfAbsent=true&apiKey=376ca8dd2e4d4c5c9a7442cd549d15f1"
          alt=""
          className="object-cover rounded-xl absolute inset-0 "
        />
        <div className="relative px-4 py-5 bg-white rounded-[0px_0px_12px_12px] text-slate-950 max-md:px-5">
          Earn more with lower fees
        </div>
        <div className="relative mt-20 font-medium text-amber-500 max-md:mt-10">
          Signup as a business
        </div>
        <div className="relative text-4xl">Partner with us</div>
        <button 
      className="relative px-12 pt-3.5 pb-3.5 mt-6 font-medium bg-amber-400 rounded-[120px] max-md:px-5 max-md:mt-10"
      onClick={() => {}}
      tabIndex={0}
      aria-label="Get Started"
    >
      Get Started
    </button>
      </div>
    </div>

<div className="flex mt-10 flex-col min-w-[554px] relative text-md font-bold text-white rounded-xl max-w-[554px]">
<div className="flex relative flex-col items-start px-16 pb-10 w-full rounded-xl min-h-[325px] max-md:px-5 max-md:max-w-full">
  <img
    loading="lazy"
    src="https://cdn.builder.io/api/v1/image/assets/TEMP/f97b9c11045a98323b7d7f6e047cf96af78690586d069adf4cdf4f7427a53cea?placeholderIfAbsent=true&apiKey=376ca8dd2e4d4c5c9a7442cd549d15f1"
    alt=""
    className="object-cover rounded-xl absolute inset-0 "
  />
  <div className="relative px-4 py-5 bg-white rounded-[0px_0px_12px_12px] text-slate-950 max-md:px-5">
  Avail exclusive perks
  </div>
  <div className="relative mt-20 font-medium text-amber-500 max-md:mt-10">
  Signup as a rider
  </div>
  <div className="relative text-4xl">Ride With Us</div>
  <button 
className="relative px-12 pt-3.5 pb-3.5 mt-6 font-medium bg-amber-400 rounded-[120px] max-md:px-5 max-md:mt-10"
onClick={() => {}}
tabIndex={0}
aria-label="Get Started"
>
Get Started
</button>
</div>
</div>
 </div>
  );
}
export default Hire