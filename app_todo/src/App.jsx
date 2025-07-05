import './App.css'
import React, { useState } from 'react';
import Step1 from './pages/Step1';
import Step2 from './pages/Step2';
import Step3 from './pages/Step3';
import Step4 from './pages/Step4';
import Step5 from './pages/Step5';
import Step6 from './pages/Step6';
import Pagination from './components/Pagination';

function App() {
  const [currentStep, setCurrentStep] = useState(1); // 現在のステップを管理
  const totalSteps = 6; // 全ステップ数
  const goToNextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(prevStep => prevStep + 1);
    }
  };
  const goToPrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(prevStep => prevStep - 1);
    }
  };
  // 現在のステップに基づいて表示するコンポーネントを決定
  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <Step1 />;
      case 2:
        return <Step2 />;
      case 3:
        return <Step3 />;
      case 4:
        return <Step4 />;
      case 5:
        return <Step5 />;
      case 6:
        return <Step6 />;
      default:
        return <p className="text-red-500">エラー: 不明なステップです。</p>;
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-8 w-[700px]">
      <h1 className="text-4xl font-extrabold text-gray-900 mb-8">React 表示の確認</h1>

      {/* Paginationコンポーネントを使用 */}
      <Pagination
        currentStep={currentStep}
        totalSteps={totalSteps}
        onPrev={goToPrevStep}
        onNext={goToNextStep}
      />

      {/* ステップごとのコンテンツを表示 */}
      {renderStep()}
    </div>
  );
}

export default App;
