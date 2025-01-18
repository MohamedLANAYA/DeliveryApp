import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const navItems = [
  { name: "Burgers" },
  { name: "Sushi" },
  { name: "Pizza" },
  { name: "Others" },
];

const deals = {
  Burgers: [
    { name: 'Chef Burgers London', discount: '-40%' },
    { name: 'Burger King', discount: '-30%' },
    { name: 'McDonald\'s', discount: '-20%' },
  ],
  Pizza: [
    { name: 'Pizza Hut', discount: '-25%' },
    { name: 'Domino\'s Pizza', discount: '-35%' },
    { name: 'Papa John\'s', discount: '-15%' },
  ],
  Sushi: [
    { name: 'Sushi Samba', discount: '-50%' },
    { name: 'Yo! Sushi', discount: '-40%' },
    { name: 'Itsu', discount: '-30%' },
  ],
  Others: [
    { name: 'Other Restaurant 1', discount: '-10%' },
    { name: 'Other Restaurant 2', discount: '-20%' },
    { name: 'Other Restaurant 3', discount: '-30%' },
  ],
};

const ExploreMenu = () => {
  const [activeItem, setActiveItem] = useState(navItems[0].name);

  const renderPromoItems = (category) => {
    return deals[category].map((deal, index) => (
      <div key={index} className="flex flex-col relative rounded-[10px] mb-4 w-[500px] max-md:w-full">
        <div className="flex relative flex-col pr-5 pb-9 pl-12 w-full rounded-xl min-h-[325px] max-md:pl-5 max-md:max-w-full">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/4f31510950ed25cda90b9217e8302e498933becb36b6922521bcdf0d9e3f2410?placeholderIfAbsent=true&apiKey=376ca8dd2e4d4c5c9a7442cd549d15f1"
            alt={`${deal.name} restaurant exterior`}
            className="object-cover absolute inset-0 size-full"
          />
          <div 
            role="text" 
            tabIndex="0"
            className="relative self-end p-5 text-lg font-bold text-white whitespace-nowrap rounded-[0px_0px_12px_12px] bg-slate-950"
          >
            {deal.discount}
          </div>
          <div className="flex relative flex-col self-start mt-40 max-md:mt-10">
            <div 
              role="text"
              tabIndex="0" 
              className="self-start text-lg font-medium text-amber-500"
            >
              Restaurant
            </div>
            <div 
              role="heading"
              aria-level="2"
              tabIndex="0"
              className="text-2xl font-bold text-white"
            >
              {deal.name}
            </div>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <>
    <div className=" gap-[300px] row flex pt-[45px] relative w-full" >
      <div className="text-[32px] font-bold leading-[66px] text-slate-950 max-md:max-w-full max-md:text-4xl max-md:leading-[54px]">
        Up to -40% 🎊 Poutinar' exclusive deals
      </div>

      {/* Navigation Items */}
      <nav className="mt-4 right-0 ">
        <ul className=" flex ">
          {navItems.map((item, index) => (
            <li key={index}>
              <Link
                to="#"
                onClick={() => setActiveItem(item.name)}
                className={`font-medium text-sm px-4 py-2 rounded-full transition-colors ${
                  activeItem === item.name
                    ? "bg-[#FDBB1E] text-white"
                    : "text-gray-600 hover:bg-gray-200"
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Promo Items */}
      
    </div>
    <div className="flex flex-wrap gap-4 mt-8">
        {renderPromoItems(activeItem)}
      </div>
    </>
/**  */
  );
};

export default ExploreMenu;