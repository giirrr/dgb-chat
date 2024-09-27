import React from "react";
import ChatbotHeader from "../../components/chatbot/ChatbotHeader";

const MainPersonalOptions = (props) => {
  const botAvatar = process.env.PUBLIC_URL + "/assets/avatar.png";

  const options = props.options || [
    {
      text: "Option 1",
      handler: props.actionProvider.handleOption1,
      id: 1,
    },
    {
      text: "Option 2",
      handler: props.actionProvider.handleOption2,
      id: 2,
    },
    {
      text: "Option 3",
      handler: props.actionProvider.handleOption3,
      id: 3,
    },
    {
      text: "Option 4",
      handler: props.actionProvider.handleOption4,
      id: 4,
    },
    {
      text: "Option 5",
      handler: props.actionProvider.handleQuickGuide,
      id: 5,
    },
    {
      text: "Option 6",
      handler: props.actionProvider.handleInsuranceList,
      id: 6,
    },
  ];

  const optionsMarkup = options.map((option, index) => (
    <button
      class="bg-Custom-Teal float-left m-[5px] mr-4 h-10 max-w-[250px] cursor-pointer rounded-xl
     border-none p-[10px] text-[14px] font-semibold text-white"
      key={index}
      onClick={() => props.actionProvider[option.handler]()}
    >
      {option.text}
    </button>
  ));

  return (
    <div>
      <div class="w-full">
        <div class="react-chatbot-kit-user-chat-message mt-4">
          개인정보 및 증명 서류
        </div>
      </div>
      <div className=" mt-[20px] flex items-center">
        <div class="flex">
          <img src={botAvatar} alt="Bot Avatar" className="chatbot-avatar" />
          <div>
            <ChatbotHeader />
            <div className="react-chatbot-kit-chat-bot-message">
              <div>
                개인정보 및 증명 서류에 관련된 어떤 정보를 찾고 계신가요?
              </div>
            </div>
            <div class="mb-4 w-[600px]">
              <div class="mb-1 ml-[12px] mt-2 h-full w-full  text-left text-xs font-normal leading-[18px] text-Text-Alternative">
                키워드를 선택해주세요
              </div>
              <div class="ml-2 mr-[142px]">{optionsMarkup}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPersonalOptions;
