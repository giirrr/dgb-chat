import React, { useState, useEffect } from "react";
import SideMenuBar from "../components/SideMenuBar";
import MyChatBot from "../components/chatbot/setups/MyChatBot";
import { ChatBotConfig } from "../config/ChatBotConfig";

const Main = () => {
  const [botConfig, setBotConfig] = useState(ChatBotConfig(""));
  useEffect(() => {
    console.log("Current bot config:", botConfig);
  }, [botConfig]);
  const handleMenuItemClick = (menuItem) => {
    setBotConfig(ChatBotConfig(menuItem));
  };

  return (
    <div>
      <div class="flex h-[600px] w-[830px]">
        <SideMenuBar onMenuItemClick={handleMenuItemClick} />
        <div class="flex w-[630px] flex-col bg-white">
          <header class="ml-[228px] flex h-[64px] w-[600px] items-center ">
            <div></div>
            <div className="flex cursor-default items-center justify-center text-[16px] text-base font-semibold">
              전문적인 상담사와 대화
            </div>
          </header>
          <hr class="mb-[-3px] h-1 w-full" />
          <MyChatBot config={botConfig} />
        </div>
      </div>
    </div>
  );
};

export default Main;
