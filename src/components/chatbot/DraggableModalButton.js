import React, { useState, useEffect } from "react";
import Draggable from "react-draggable";
import Main from "../../pages/Main";

const DraggableModalButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const close_icon = process.env.PUBLIC_URL + "/assets/close_button_14.png";
  const botAvatar = process.env.PUBLIC_URL + "/assets/Chabot-fluter.png";

  const toggleModal = () => {
    if (!isDragging) {
      setIsModalOpen(!isModalOpen);
    }
  };

  const handleStart = () => {
    setIsDragging(false);
  };

  const handleDrag = (e, data) => {
    setIsDragging(true);
    setPosition({ x: 0, y: data.y });
  };

  const handleStop = () => {
    setTimeout(() => {
      setIsDragging(false);
    }, 100);
  };

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isModalOpen]);

  return (
    <div>
      <Draggable
        axis="y"
        bounds={{
          top: -window.innerHeight,
          bottom: window.innerHeight,
        }}
        position={position}
        onStart={handleStart}
        onDrag={handleDrag}
        onStop={handleStop}
      >
        <button
          onMouseDown={(e) => e.preventDefault()}
          onClick={toggleModal}
          style={{
            position: "fixed",
            right: "10px",
            top: `calc(66.67%)`,
            zIndex: 100,
            // width: "50px",
            // height: "50px",
            // border: "1px solid #333",
            // borderRadius: "50%",
            cursor: "pointer",
            transition: "top 0.1s ease-in-out",
          }}
        >
          <img
            src={botAvatar}
            alt="Bot Avatar"
            // className="chatbot-avatar"
            class="pointer-events-none h-[58px] w-[58px] "
          />
        </button>
      </Draggable>
      {isModalOpen && (
        <div class="bg-background-tertiary fixed left-1/2 top-1/2 z-[9] h-[600px] w-[800px] -translate-x-1/2 -translate-y-1/2 transform overflow-scroll overflow-x-hidden overflow-y-hidden rounded-[10px] shadow-[0_0_10px_rgba(0,0,0,0.5)]">
          <Main />
          <button
            onClick={toggleModal}
            class="absolute right-[10px] top-[1px] flex h-[64px] w-[30px] cursor-pointer items-center rounded-full border-none"
          >
            <img src={close_icon} />
          </button>
        </div>
      )}
    </div>
  );
};

export default DraggableModalButton;
