
import React from 'react';
import { useLocalization } from '../context/LocalizationContext';
import { ChevronRightIcon } from './icons';

interface SectionHeaderProps {
  titleKey: string;
  onViewAllClick?: () => void;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ titleKey, onViewAllClick }) => {
    const { t, language } = useLocalization();

    return (
        <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{t(titleKey as any)}</h2>
            {onViewAllClick && (
                <button onClick={onViewAllClick} className="flex items-center text-sm font-bold text-saudi-teal hover:underline">
                    <span>{t('viewAll')}</span>
                    <ChevronRightIcon className={`w-5 h-5 ${language === 'ar' ? 'transform rotate-180' : ''}`} />
                </button>
            )}
        </div>
    );
}

export default SectionHeader;
