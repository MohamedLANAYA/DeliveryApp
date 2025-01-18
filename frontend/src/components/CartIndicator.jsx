import * as React from "react";



function CartIndicator() {
    const [itemCount, setItemCount] = React.useState(0);
    
    
    
  
    return (
      <div className="flex flex-col fixed top-0 right-0  z-[1000] max-w-[378px] mr-[50px]  ">
        <div className="flex gap-5 justify-between px-6 w-full bg-green-700 rounded-[0px_0px_12px_12px] border border-solid border-black border-opacity-10 shadow-lg">
          <div className="flex gap-5">
            <button  
              
              className="flex items-center focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
              aria-label="Add to cart"
              onClick={() => window.location.href = '/cart'}
            >
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/4e9f4f39f28983e84ac559f61652b4a287d69ec6b50c27df9b94cdf4a96e0b0f?placeholderIfAbsent=true&apiKey=376ca8dd2e4d4c5c9a7442cd549d15f1"
                className="object-contain shrink-0 my-auto aspect-square w-[43px]"
                alt="Cart icon"
              />
            </button>
            <div className="shrink-0 w-px border opacity-30 border-white border-solid h-[70px]" />
          </div>
          <div className="gap-10 my-auto text-base font-semibold text-white" role="status" aria-live="polite">
            {itemCount} Items
          </div>
          <div className="shrink-0 w-px border opacity-30 border-white border-solid h-[70px]" />
          <a 
            href="/download"
            className="flex gap-10 my-auto text-base font-semibold text-white hover:text-gray-200 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
            aria-label="Download content"
          >
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/8c7cd9862b7b4fa2e4bed67ddeaa9285f1837e9265495be470f1bfda6c82034e?placeholderIfAbsent=true&apiKey=376ca8dd2e4d4c5c9a7442cd549d15f1"
              className="object-contain shrink-0 aspect-square w-[53px]"
              alt="Download icon"
            />
          </a>
        </div>
      </div>
    );
  }
  
  export default CartIndicator;
  