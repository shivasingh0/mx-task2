import React from 'react';

const Navigation = ({ onPrevious, onNext, canGoPrevious, canGoNext }) => {
  return (
    <div className="flex gap-4">
      <button 
        onClick={onPrevious}
        disabled={!canGoPrevious}
        className={`p-4 rounded-full transition-all duration-300 ${
          canGoPrevious 
            ? 'bg-gray-100 hover:bg-green-500 cursor-pointer' 
            : 'bg-gray-50 cursor-not-allowed opacity-50'
        }`}
      >
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button 
        onClick={onNext}
        disabled={!canGoNext}
        className={`p-4 rounded-full transition-all duration-300 ${
          canGoNext 
            ? 'bg-gray-100 hover:bg-green-500 cursor-pointer' 
            : 'cursor-not-allowed opacity-50'
        }`}
      >
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
};

export default Navigation;