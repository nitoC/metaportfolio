import { useState } from "react";

const TabButton = ({
  tabs,
  settab,
}: {
  tabs: string[];
  settab: (tab: string) => void;
}) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index: number, tab: string) => {
    settab(tab);
    setActiveTab(index);
  };

  return (
    <div className="tab-container">
      {tabs.map((tab, index) => (
        <button
          key={index}
          className={index === activeTab ? "tab-button active" : "tab-button"}
          onClick={() => handleTabClick(index, tab)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default TabButton;
