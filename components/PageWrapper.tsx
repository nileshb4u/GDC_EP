
import React from 'react';

interface PageWrapperProps {
  children: React.ReactNode;
}

const PageWrapper: React.FC<PageWrapperProps> = ({ children }) => {
  return (
    <div className="px-4 md:px-6 py-6 animate-fade-in">
      {children}
      <style>{`
        .animate-fade-in { 
          animation: fadeIn 0.3s ease-in-out; 
        }
        @keyframes fadeIn { 
          from { opacity: 0; transform: translateY(10px); } 
          to { opacity: 1; transform: translateY(0); } 
        }
      `}</style>
    </div>
  );
};

export default PageWrapper;
