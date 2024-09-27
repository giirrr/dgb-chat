import React from "react";

const AfterOptions = (props) => {
  const optionsMarkup = props.options.map((option, index) => (
    <button
      class="bg-Custom-Teal float-left m-[5px] mr-4 h-10 max-w-[250px] cursor-pointer rounded-xl
    border-none p-[10px] text-[14px] font-semibold text-white"
      key={index}
      onClick={() => {
        props.actionProvider[option.handler]();
      }}
    >
      {option.text}
    </button>
  ));

  return (
    <div class="mb-4 w-[600px]">
      <div class="-mt-[11px] mb-1 ml-[56px] h-full w-full pr-[12px] text-left text-xs font-normal leading-[18px] text-Text-Alternative">
        아래의 항목을 선택하면 빠르게 알려드릴게요!
      </div>
      <div class="ml-[50px] mr-[100px]">{optionsMarkup}</div>
    </div>
  );
};

export default AfterOptions;
