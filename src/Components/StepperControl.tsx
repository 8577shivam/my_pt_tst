import React from 'react';
interface StepperControlProps{
  onNext: () => void;
  onPrev: () => void;
  currentStep:number,
  steps:string[]
}
const StepperControl:React.FC<StepperControlProps> = ({ currentStep, steps, onNext, onPrev }) => {
  return (
    <div className="flex gap-4 mt-4 px-6">
      <button
        onClick={onPrev}
        disabled={currentStep+1 === 2}
        className="bg-gray-300 text-gray-700 px-4 py-2 rounded disabled:opacity-50"
      >
        Previous
      </button>
      <button
        onClick={onNext}
        disabled={currentStep+1 === steps.length - 1}
        className="bg-purple-500 text-white px-4 py-2 rounded"
      >
        Next
      </button>
    </div>
  );
};

export default StepperControl;
