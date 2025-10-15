import React from 'react';
import { useLocalization } from '../context/LocalizationContext';

interface PlaceholderPageProps {
  titleKey: string;
}

const PlaceholderPage: React.FC<PlaceholderPageProps> = ({ titleKey }) => {
  const { t } = useLocalization();

  return (
    <div className="bg-white dark:bg-gray-900 py-32 flex items-center justify-center animate-fade-in">
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
          {t(titleKey as any)}
        </h1>
        <p className="text-xl text-gray-500 dark:text-gray-400">
          {t('pageUnderConstruction')}
        </p>
      </div>
       <style>{`
          .animate-fade-in { animation: fadeIn 0.5s ease-in-out; }
          @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
      `}</style>
    </div>
  );
};

export default PlaceholderPage;
