import React from "react";

const RedButton = ({ type, onClick, children }) => {
  return (
    <button
      className="flex items-center justify-center bg-[#FE0D39] text-white font-bold py-3 px-8 rounded-full transition duration-300 hover:bg-[#D70128]"
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default RedButton;
