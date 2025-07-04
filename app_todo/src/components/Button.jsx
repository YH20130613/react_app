// src/components/Button.jsx
import React from 'react';

const Button = ({ children, onClick, type = 'button', className = '' }) => {
  return (
    <button
      onClick={onClick}
      type={type}
      // ここに共通のスタイルクラスを定義します
      className={`
        px-4 py-2 rounded-md font-semibold text-white
        bg-blue-500 hover:bg-blue-600
        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75
        transition duration-300 ease-in-out hover:scale-110
        ${className}
      `}
    >
      {children}
    </button>
  );
};

export default Button;
