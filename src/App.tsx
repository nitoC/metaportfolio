import { useState } from "react";
import "./App.css";
import Bridge from "./components/Bridge";
import Dashboard from "./components/Dashboard";
import Explore from "./components/Explore";
import Sidebar from "./components/Sidebar";
import Swap from "./components/Swap";
import TransactionCard from "./components/TransactionCard";
import Transfer from "./components/Transfer";

const buyList = [
  "Access to 75+ tokens on 8+ chains",
  "Instantly fund your wallet with secure payment options",
  "Save on gas fees (and time)!",
];
const sellList = [
  "Get up-to-the-minute quotes from trusted providers!",
  "We're here to guide you along the way.",
];
const buy = {
  type: "Buy",
  heading: "Buying crypto made easy",
  subheading: "Buy crypto how you want, when you want with MetaMask",
  text: "You're in control when you buy crypto directly in your MetaMask wallet. We'll connect you with quotes from trusted providers and guide you along the way, making self-custody simple.",
};
const sell = {
  type: "Sell",
  heading: "Why cash out with MetaMask?",
};

function App() {
  const [selectedComponent, setSelectedComponent] = useState("Dashboard");

  const handleSidebarClick = (componentName: string) => {
    console.log(componentName);
    setSelectedComponent(componentName);
  };

  const renderComponent = () => {
    switch (selectedComponent) {
      case "Dashboard":
        return (
          <Dashboard
            ele={selectedComponent}
            handleElement={handleSidebarClick}
          />
        );
      case "Swap":
        return (
          <Swap ele={selectedComponent} handleElement={handleSidebarClick} />
        );
      case "Bridge":
        return (
          <Bridge ele={selectedComponent} handleElement={handleSidebarClick} />
        );
      case "Buy":
        return (
          <TransactionCard
            ele={selectedComponent}
            handleElement={handleSidebarClick}
            type={buy.type}
            heading={buy.heading}
            text={buy.text}
            subheading={buy.subheading}
            checks={buyList}
          />
        );
      case "Sell":
        return (
          <TransactionCard
            ele={selectedComponent}
            handleElement={handleSidebarClick}
            type={sell.type}
            heading={sell.heading}
            text={null}
            subheading={null}
            checks={sellList}
          />
        );
      case "Transfer":
        return (
          <Transfer
            ele={selectedComponent}
            handleElement={handleSidebarClick}
            type="Send & Receive"
          />
        );
      case "Explore":
        return (
          <Explore ele={selectedComponent} handleElement={handleSidebarClick} />
        );
      default:
        return null;
    }
  };

  return (
    <>
      <main className="main">
        <Sidebar ele={selectedComponent} handleElement={handleSidebarClick} />
        {renderComponent()}
      </main>
    </>
  );
}

export default App;
