// src/pages/Step3.jsx
import React, { useState } from 'react';
import Button from '../components/Button';

const Step3 = () => {
  const [count, setCount] = useState(0); // countの状態を管理

  const incrementCount = () => {
    setCount(prevCount => prevCount + 1);
  };

  const decrementCount = () => {
    // マイナスにならないように0以下にはしない
    setCount(prevCount => Math.max(0, prevCount - 1));
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md max-w-md w-full text-center min-h-[250px]">
      <h2 className="text-2xl font-bold mb-4 text-blue-700">Step-3: カウント増減ボタン</h2>
      <p className="text-gray-700 mb-4">「+」と「-」ボタンでカウントを増減</p>

      <p className="text-2xl font-bold mb-6">現在のカウント: {count}</p>

      <div className="flex justify-center space-x-4">
        {/* マイナスボタン */}
        <Button onClick={decrementCount} className="bg-red-500 hover:bg-red-600">
          -
        </Button>

        {/* プラスボタン */}
        <Button onClick={incrementCount} className="bg-green-500 hover:bg-green-600">
          +
        </Button>
      </div>
    </div>
  );
};

export default Step3;
