import React, { useState, useEffect } from "react";
import SideMenuBar from "../components/SideMenuBar";
import { ChatBotConfig } from "../config/ChatBotConfig"; // This function returns the config based on menu item
import { Document, Page } from "react-pdf";
const Test = () => {
  const [botConfig, setBotConfig] = useState(ChatBotConfig(""));
  useEffect(() => {
    console.log("Current bot config:", botConfig);
  }, [botConfig]);
  const handleMenuItemClick = (menuItem) => {
    setBotConfig(ChatBotConfig(menuItem));
  };

  const close_icon = process.env.PUBLIC_URL + "/close_button_14.png";

  return (
    <div>
      <div class="flex h-full w-full">
        <SideMenuBar onMenuItemClick={handleMenuItemClick} />
        <div class="flex h-full w-full flex-col">
          <header class="mx-auto flex h-[64px] w-[600px] items-center justify-between">
            <div></div>
            <div className="flex cursor-default items-center justify-center text-base font-semibold">
              테스트 화면
            </div>
            <button>
              <img src={close_icon} />
            </button>
          </header>
          <hr class="mb-[-3px] h-1 w-full" />
        </div>
      </div>
    </div>
  );
};

export default Test;
