
import React from 'react';
import { PlusIcon } from './icons';

interface FABProps {
  onClick: () => void;
  ariaLabel: string;
}

const FAB: React.FC<FABProps> = ({ onClick, ariaLabel }) => {
  return (
    <button
      onClick={onClick}
      aria-label={ariaLabel}
      className="fixed bottom-24 end-6 rtl:end-auto rtl:start-6 z-40 bg-saudi-teal text-white w-14 h-14 rounded-full shadow-lg flex items-center justify-center transform transition-all duration-300 hover:scale-110 hover:bg-teal-700 focus:outline-none focus:ring-4 focus:ring-teal-300 focus:ring-opacity-50"
    >
      <PlusIcon className="w-7 h-7" />
    </button>
  );
};

export default FAB;
