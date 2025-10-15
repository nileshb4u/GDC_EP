
import React from 'react';
import { useLocalization } from '../context/LocalizationContext';
import { teamMembers } from '../constants/data';
import TeamMemberCard from '../components/TeamMemberCard';

const AboutPage: React.FC = () => {
  const { t } = useLocalization();

  const renderSection = (titleKey: string, textKey: string) => (
    <div className="mb-12">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">{t(titleKey as any)}</h2>
      <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">{t(textKey as any)}</p>
    </div>
  );

  return (
    <div className="bg-white dark:bg-gray-900 py-20 animate-fade-in">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center text-gray-900 dark:text-white mb-16">
          {t('aboutTitle')}
        </h1>
        
        <div className="max-w-4xl mx-auto">
            {renderSection('missionStatement', 'missionText')}
            {renderSection('whoWeAre', 'whoWeAreText')}
            {renderSection('whatWeDo', 'whatWeDoText')}
        </div>

        <div className="mt-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
            {t('teamMembers')}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {teamMembers.map(member => (
              <TeamMemberCard key={member.id} member={member} />
            ))}
          </div>
        </div>

        <div className="mt-20 max-w-4xl mx-auto bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">{t('codeOfConductSummaryTitle')}</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">{t('codeOfConductSummary')}</p>
            <a href="#" className="font-bold text-saudi-teal hover:underline">{t('linkToFullPage')}</a>
        </div>
      </div>
       <style>{`
            .animate-fade-in { animation: fadeIn 0.5s ease-in-out; }
            @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
      `}</style>
    </div>
  );
};

export default AboutPage;