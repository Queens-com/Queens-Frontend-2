import React from "react";

const NewTag = () => {
  return (
    <div className="relative">
      <div className="absolute top-[10px] left-[10px] w-[34px] h-[18px] flex items-center justify-center inter text-center rounded-full text-[10px] font-bold text-newTag bg-gradient-to-r from-[#ADE9F1] to-[#D0F9BE] shadow-md">
        <span>New</span>
      </div>
    </div>
  );
};

export default NewTag;
