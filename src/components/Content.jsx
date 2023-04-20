import React from "react";

const Content = ({ title, pretitle, subtitle }) => {
  return (
    <>
      {title && (
        <p className="font-semibold text-orange-500 text-lg mb-4 md:mb-6">
          {title}
        </p>
      )}
      {pretitle && (
        <h1 className="text-2xl md:text-4xl font-bold text-gray-900 max-w-lg mb-4 md:mb-6">
          {pretitle}
        </h1>
      )}
      {subtitle && (
        <p className="text-base md:text-lg text-gray-600 max-w-md mb-6 md:mb-8">
          {subtitle}
        </p>
      )}
    </>
  );
};

export default Content;
