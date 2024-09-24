import React from "react";

const AfterOptions = (props) => {
  const optionsMarkup = props.options.map((option, index) => (
    <button
      class="float-left m-[5px] mr-4 h-10 max-w-[250px] cursor-pointer rounded-xl border-none
    bg-Primary-Normal p-[10px] font-semibold text-Text-Normal"
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
      <div class="mb-1 ml-[56px] mt-4 h-full w-full pr-[12px] text-left text-xs font-normal leading-[18px] text-Text-Alternative">
        아래의 항목을 선택하면 빠르게 알려드릴게요!
      </div>
      <div class="ml-[50px] mr-[100px]">{optionsMarkup}</div>
    </div>
  );
};

export default AfterOptions;
