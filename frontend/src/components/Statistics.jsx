import * as React from "react";

const statisticsData = [
  {
    value: "546+",
    label: "Registered Riders"
  },
  {
    value: "789,900+",
    label: "Orders Delivered"
  },
  {
    value: "690+",
    label: "Restaurants Partnered"
  },
  {
    value: "17,457+",
    label: "Food items"
  }
];

function StatisticItem({ value, label }) {
  return (
    <div 
      className="mt-4 " 
      role="group" 
      aria-label={`${label}: ${value}`}
    >
      <span 
        className="text-4xl font-light" 
        aria-hidden="true"
      >
        {value}
      </span>
      <br />
      <span className="text-2xl font-bold">
        {label}
      </span>
    </div>
  );
}

function Divider() {
  return (
    <div 
      className="flex shrink-0 w-px bg-zinc-300 h-[100px]" 
      role="separator" 
      aria-hidden="true"
    />
  );
}

export function Statistics() {
  return (
    <section 
      className="flex flex-col mt-[80px] text-2xl font-bold leading-10 text-center text-white rounded-none"
      aria-label="Company Statistics"
    >
      <div className="flex gap-10 items-start px-20 py-7 w-full bg-amber-400 rounded-xl max-md:px-5 max-md:max-w-full">
        {statisticsData.map((stat, index) => (
          <React.Fragment key={stat.label}>
            <StatisticItem 
              value={stat.value} 
              label={stat.label} 
            />
            {index < statisticsData.length - 1 && <Divider />}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}

export default Statistics;