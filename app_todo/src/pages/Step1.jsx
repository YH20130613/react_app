// src/pages/Step1.jsx
import React from 'react';
import Button from '../components/Button';

const Step1 = () => {

  const handleAlertButtonClick = () => {
    alert('こんにちは！ステップ1のボタンがクリックされました。');
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md max-w-md w-full text-center min-h-[250px]">
      <h2 className="text-2xl font-bold mb-4 text-blue-700">Step-1: アラートボタン</h2>
      <p className="text-gray-700 mb-4 min-h-[80px]">このボタンをクリックするとアラートが表示</p>

      {/* 共通スタイルが適用される。ボタンの表示テキストはchildrenで渡す */}
      <Button onClick={handleAlertButtonClick}>
        アラートを表示
      </Button>
    </div>
  );
};
export default Step1;
