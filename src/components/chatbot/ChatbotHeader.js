// ChatbotHeader.js
import React, { useState, useEffect } from "react";

const ChatbotHeader = () => {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const isAm = hours < 12;
    const formattedHours = isAm ? hours : hours - 12;
    const ampm = isAm ? "오전" : "오후";
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

    setCurrentTime(
      `${ampm} ${formattedHours === 0 ? 12 : formattedHours}:${formattedMinutes}`,
    );
    // The dependency array is empty, so this effect runs only once when the component mounts
  }, []);

  return (
    <div className="mb-[5px] ml-2 flex text-[14px] font-bold">
      전문적인 상담사 똑디
      <span className="current-time">{currentTime}</span>
    </div>
  );
};

export default ChatbotHeader;
