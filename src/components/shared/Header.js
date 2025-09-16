import React from 'react';

const Header = ({ title, subtitle, bgColor, textColor = "text-white" }) => {
  return (
    <div className={`${bgColor} ${textColor} p-4`}>
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-xl font-bold">{title}</h2>
          <p className="opacity-80">{subtitle}</p>
        </div>
      </div>
    </div>
  );
};

export default Header;