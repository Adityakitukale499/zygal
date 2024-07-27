import React, { useState } from "react";
import "./App.css";
import Design1 from "./Components/Design1";
import Design2 from "./Components/Design2";
import Design3 from "./Components/Design3";

function App() {
  const [currentTab, setCurrentTab] = useState("design1");

  const handleTabChange = (tab) => {
    setCurrentTab(tab);
  };

  return (
    <div className="flex justify-center">
      <div className="p-4 max-w-96">
        <div className="flex justify-center mb-4">
          <button
            className={`px-4 py-2 ${
              currentTab === "design1"
                ? "bg-blue-500 text-white"
                : "bg-gray-200"
            }`}
            onClick={() => handleTabChange("design1")}
          >
            Design 1
          </button>
          <button
            className={`px-4 py-2 ${
              currentTab === "design2"
                ? "bg-blue-500 text-white"
                : "bg-gray-200"
            }`}
            onClick={() => handleTabChange("design2")}
          >
            Design 2
          </button>
          <button
            className={`px-4 py-2 ${
              currentTab === "design3"
                ? "bg-blue-500 text-white"
                : "bg-gray-200"
            }`}
            onClick={() => handleTabChange("design3")}
          >
            Design 3
          </button>
        </div>

        {currentTab === "design1" && <Design1 />}
        {currentTab === "design2" && <Design2 />}
        {currentTab === "design3" && <Design3 />}
      </div>
    </div>
  );
}

export default App;
