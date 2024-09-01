import React from "react";

const MarketRate = ({ tooltipData }) => {
  
  const displayValue = tooltipData ? tooltipData.uv.toFixed(2) : "63,179.71";
  const displayChange = tooltipData ? `+ ${tooltipData.uv.toFixed(2)} (3.54%)` : "+ 2,161.42 (3.54%)";

  return (
    <div>
      <p className="text-[70px] font-circular font-[400] leading-[88.56px] text-rate-color">
        {displayValue}
        <sup className="relative -top-[1.2em] left-2 font-circular text-[24px] font-[500] text-rate-symbol">
          USD
        </sup>
      </p>
      <p className="font-circular text-[18px] text-success leading-[22.77px] font-[400]">
        {displayChange}
      </p>
    </div>
  );
};

export default MarketRate;
