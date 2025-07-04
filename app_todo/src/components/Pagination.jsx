import React, { useState } from 'react';
import Button from './Button';

const Pagination = ({ currentStep, totalSteps, onPrev, onNext }) => {
  return (
    <div className="mb-8 flex space-x-4">
      {/* 前のステップボタン */}
      <button
        onClick={onPrev}
        disabled={currentStep === 1} // 最初のステップでは無効化
        className="bg-blue-500 hover:bg-blue-600 text-white px-6 rounded-l-lg disabled:opacity-50 disabled:cursor-not-allowed transition duration-200"
      >
        &lt; Prev
      </button>

      {/* 現在のステップ表示 */}
      <span className="text-lg px-4 bg-blue-100 rounded-lg text-blue-800">
        step {currentStep} / {totalSteps}
      </span>

      {/* 次のステップボタン */}
      <button
        onClick={onNext}
        disabled={currentStep === totalSteps} // 最後のステップでは無効化
        className="bg-blue-500 hover:bg-blue-600 text-white px-6 rounded-r-lg disabled:opacity-50 disabled:cursor-not-allowed transition duration-200"
      >
        Next &gt;
      </button>
    </div>
  );
};

export default Pagination;
