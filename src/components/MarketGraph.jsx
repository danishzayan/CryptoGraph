import React, { useState, useRef } from "react";
import {
  Area,
  AreaChart,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import Compare from "/compare.svg";
import FullScreen from "/fullscreen.svg";
import { toggleFullscreen } from "../utils/fullscreen.js";
import dataSets from "../utils/dataSets.js";
import CustomTooltip from "./CustomTooltip";

const MarketGraph = ({ setTooltipData }) => {
  const [activeTimeframe, setActiveTimeframe] = useState("1w");
  const [chartData, setChartData] = useState(dataSets["1w"]);
  const graphRef = useRef(null);

  const handleFullscreen = () => {
    toggleFullscreen(graphRef.current);
  };

  const handleTimeframeChange = (timeframe) => {
    setActiveTimeframe(timeframe);
    setChartData(dataSets[timeframe]);
  };

  const handleTooltipChange = (data) => {
    setTooltipData(data);
  };

  return (
    <div className="w-[100%] pt-20 bg-white rounded-lg font-circular">
      <div className="flex justify-between items-center w-[48em] mb-4">
        <div className="flex space-x-4 text-[18px]">
          <button
            onClick={handleFullscreen}
            className="flex items-center space-x-2 text-main-color hover:text-[#1A243A]"
          >
            <img
              className="w-[23px] h-[23px]"
              src={FullScreen}
              alt="fullscreen-icon"
            />
            <span>Fullscreen</span>
          </button>
          <button className="flex items-center space-x-2 text-main-color hover:text-[#1A243A]">
            <img
              className="w-[23px] h-[23px]"
              src={Compare}
              alt="compare-icon"
            />
            <span>Compare</span>
          </button>
        </div>
        <div className="flex space-x-2">
          {Object.keys(dataSets).map((timeframe) => (
            <button
              key={timeframe}
              onClick={() => handleTimeframeChange(timeframe)}
              className={`px-3 w-[49px] h-[33px] text-[18px] py-1 rounded ${
                activeTimeframe === timeframe
                  ? "bg-[#4B40EE] text-white"
                  : "text-main-color hover:bg-gray-200"
              }`}
            >
              {timeframe}
            </button>
          ))}
        </div>
      </div>

      <div ref={graphRef} className="relative">
        <ResponsiveContainer width="100%" height={340}>
          <AreaChart
            data={chartData}
            onMouseMove={(e) =>
              handleTooltipChange(
                e.activePayload ? e.activePayload[0].payload : null
              )
            }
          >
            <XAxis dataKey={true} tickLine={false} tickCount={true} />
            <YAxis dataKey={false} axisLine={false} tickLine={false} />
            <Tooltip content={<CustomTooltip />} />
            <defs>
              <linearGradient id="shadowGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#4B40EE" stopOpacity={0.4} />
                <stop offset="100%" stopColor="#4B40EE" stopOpacity={0} />
              </linearGradient>
            </defs>
            <Area
              type="linear"
              dataKey="uv"
              strokeWidth={2}
              stroke="#4B40EE"
              dot={false}
              activeDot={false}
              fill="url(#shadowGradient)"
            />
            <CartesianGrid opacity={0.4} horizontal={false} />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default MarketGraph;
