import React, { useState } from "react";
import MarketRate from "./MarketRate";
import MenuBar from "./MenuBar";
import MarketGraph from "./MarketGraph";

const Dashboard = () => {
  
  const [tooltipData, setTooltipData] = useState(null);

  return (
    <div className="bg-white shadow-lg rounded-md p-16 max-w-[1000px] mx-auto w-full md:w-[90%] lg:w-[80%]">
      <MarketRate tooltipData={tooltipData} />
      <MenuBar />
      <MarketGraph setTooltipData={setTooltipData} />
    </div>
  );
};

export default Dashboard;
