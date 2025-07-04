// src/pages/Step2.jsx
import React, { useState } from 'react';
import Button from '../components/Button';

const Step2 = () => {
  const [count, setCount] = useState(0); // ここで useState が使われる

  const handleCounterButtonClick = () => {
    setCount(prevCount => prevCount + 1);
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md max-w-md w-full text-center min-h-[250px]">
      <h2 className="text-2xl font-bold mb-4 text-blue-700">Step-2: カウントボタン</h2>
      <p className="text-gray-700 mb-4 min-h-[80px]">このボタンをクリックするとカウント増</p>

      {/* 共通スタイルが適用される。ボタンの表示テキストはchildrenで渡す */}
      <Button onClick={handleCounterButtonClick}>
        クリック: {count}
      </Button>
    </div>
  );
};

export default Step2;
