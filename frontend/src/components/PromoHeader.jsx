import * as React from "react";

function PromoHeader() {
  return (
    <div className="flex h-[70px] top-0 left-0 pl-[37px] pt-[25px] pb-[20px] bg-[#f9f9f9] rounded-b-[12px] border border-solid border-[#0000001a] mr-[100px] ml-[100px] ">
      <div className="flex font-medium text-black text-[17px] tracking-[0] leading-[1] whitespace-nowrap">
        🌟
      </div>
      <div className="flex-auto text-base ml-[12px] ">
        Get 5% Off your first order,
        <span className="font-bold text-amber-500 underline">
          Promo: ORDER5
        </span>
      </div>
    </div>
  );
}

export default PromoHeader;