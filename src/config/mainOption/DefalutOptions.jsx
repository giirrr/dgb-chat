import React from "react";

const DefalutOptions = (props) => {
  const options = props.options || [];

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
    <div class="mb-4 w-[600px]">
      <div class="-mt-[5px] mb-1 ml-[56px] h-full w-full pr-[12px] text-left text-xs font-normal leading-[18px] text-Text-Alternative">
        카테고리를 선택해주세요
      </div>
      <div class="ml-[50px] mr-[100px]">{optionsMarkup}</div>
    </div>
  );
};

export default DefalutOptions;
