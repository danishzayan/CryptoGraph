import React, { useState } from "react";
import { motion } from "framer-motion";

const MenuBar = () => {
  const [activeTab, setActiveTab] = useState(1);

  const tabsData = [
    { name: "Summary" },
    { name: "Chart" },
    { name: "Statistics" },
    { name: "Analysis" },
    { name: "Settings" },
  ];

  return (
    <div className="relative pt-9 w-[500px]">
      <div className="flex border-b border-gray-200">
        {tabsData.map((tab, index) => (
          <button
            key={index}
            className={`flex-1 pb-5 px-4 text-[18px] font-circular text-center transition-all duration-300 ${
              activeTab === index
                ? "text-[#1A243A]"
                : "text-main-color hover:text-[#1A243A]"
            }`}
            onClick={() => setActiveTab(index)}
          >
            {tab.name}
          </button>
        ))}
      </div>
      <motion.div
        className="absolute bottom-0 h-[3px] bg-btn-primary"
        layoutId="underline"
        initial={false}
        animate={{
          width: `${100 / tabsData.length}%`,
          translateX: `${activeTab * 100}%`,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      />
    </div>
  );
};

export default MenuBar;
