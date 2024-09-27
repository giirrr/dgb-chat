import React, { useState } from "react";

const SideMenuBar = ({ onMenuItemClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showSubMenus, setShowSubMenus] = useState(false);
  const [activeMenuItem, setActiveMenuItem] = useState("retrieveInfo");

  const close_icon = process.env.PUBLIC_URL + "/assets/close_button_14.png";

  const handleMenuItemClick = (menuItem) => {
    setActiveMenuItem(menuItem);
    onMenuItemClick(menuItem);
  };

  return (
    <div className="">
      <div
        class={`left-0 top-0 px-2 ${
          isMenuOpen ? "left-0 z-[20]" : "left-[-300px] z-[1]"
        } flex h-full max-w-[200px] flex-col  bg-Background-Tertiary text-Text-Alternative duration-100 ease-in-out `}
      >
        <div class="relative my-5 flex h-6 items-center justify-between px-2">
          <div
            class="cursor-default text-[16px] text-base font-semibold text-Text-Normal "
            onClick={() => {
              setShowSubMenus(!showSubMenus);
            }}
          >
            질문목록
          </div>
          {/* <img src={close_icon} class="h-[14px] w-[14px] cursor-pointer" /> */}
        </div>
        <div class="px-2">
          <hr class="mb-3" />
        </div>
        <div
          className={`mb-1  flex h-[36px] w-[184px] cursor-pointer items-center p-2 text-[14px] font-semibold ${
            activeMenuItem === "retrieveInfo"
              ? "bg-Fill-Gray-Normal text-Text-Normal"
              : "hover:bg-Fill-Gray-Normal hover:text-Text-Normal"
          }`}
          onClick={() => handleMenuItemClick("retrieveInfo")}
        >
          홈
        </div>
        <div
          className={`mb-1 flex h-[36px] w-[184px] cursor-pointer items-center p-2 text-[14px] 
            font-semibold hover:bg-Fill-Gray-Normal  hover:text-Text-Normal
          `}
          onClick={() => handleMenuItemClick("retrieveInfo")}
        >
          새 채팅
        </div>
        {/* <div
          className={`mb-1 flex h-[36px] w-[184px] cursor-pointer items-center p-2 font-semibold ${
            activeMenuItem === "quickGuide"
              ? "bg-Fill-Gray-Normal text-Text-Normal"
              : "hover:bg-Fill-Gray-Normal hover:text-Text-Normal"
          }`}
          onClick={() => handleMenuItemClick("quickGuide")}
        >
          퀵가이드
        </div>
        <div
          className={`mb-1 flex h-[36px] w-[184px] cursor-pointer items-center p-2 font-semibold ${
            activeMenuItem === "productIntro"
              ? "bg-Fill-Gray-Normal text-Text-Normal"
              : "hover:bg-Fill-Gray-Normal hover:text-Text-Normal"
          }`}
          onClick={() => handleMenuItemClick("productIntro")}
        >
          상품소개
        </div>
        <div
          className={`mb-1 flex h-[36px] w-[184px] cursor-pointer items-center p-2 font-semibold ${
            activeMenuItem === "postSubscription"
              ? "bg-Fill-Gray-Normal text-Text-Normal"
              : "hover:bg-Fill-Gray-Normal hover:text-Text-Normal"
          }`}
          onClick={() => handleMenuItemClick("postSubscription")}
        >
          고객센터
        </div> */}
      </div>
    </div>
  );
};

export default SideMenuBar;
