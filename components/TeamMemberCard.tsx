
import React from 'react';
import { TeamMember } from '../types';
import { useLocalization } from '../context/LocalizationContext';
import { LinkedInIcon, XIcon, ResearchGateIcon } from './icons';

interface TeamMemberCardProps {
  member: TeamMember;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ member }) => {
  const { t } = useLocalization();

  return (
    <div className="text-center bg-gray-50 dark:bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
      <img
        className="mx-auto h-32 w-32 rounded-full object-cover mb-4 ring-4 ring-saudi-sand/50 dark:ring-saudi-sand/30"
        src={member.imageUrl}
        alt={t(member.nameKey as any)}
      />
      <h3 className="text-lg font-bold text-gray-900 dark:text-white">{t(member.nameKey as any)}</h3>
      <p className="text-saudi-teal dark:text-teal-400 font-medium">{t(member.roleKey as any)}</p>
      <div className="mt-4 flex justify-center items-center space-x-4 rtl:space-x-reverse">
        <a
          href={member.linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn Profile"
          className="text-gray-500 dark:text-gray-400 hover:text-saudi-teal dark:hover:text-teal-400 transition-colors"
        >
          <LinkedInIcon className="w-6 h-6" />
        </a>
        {member.xUrl && (
            <a
            href={member.xUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X Profile"
            className="text-gray-500 dark:text-gray-400 hover:text-saudi-teal dark:hover:text-teal-400 transition-colors"
          >
            <XIcon className="w-5 h-5" />
          </a>
        )}
        {member.researchGateUrl && (
            <a
            href={member.researchGateUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="ResearchGate Profile"
            className="text-gray-500 dark:text-gray-400 hover:text-saudi-teal dark:hover:text-teal-400 transition-colors"
          >
            <ResearchGateIcon className="w-6 h-6" />
          </a>
        )}
      </div>
    </div>
  );
};

export default TeamMemberCard;