
import React from 'react';
import { useLocalization } from '../context/LocalizationContext';
import { userGamification, users, teamMembers } from '../constants/data';
import PageWrapper from '../components/PageWrapper';
import SectionHeader from '../components/SectionHeader';
import Button from '../components/Button';
import TeamMemberCard from '../components/TeamMemberCard';

const ProfilePage: React.FC = () => {
    const { t } = useLocalization();
    const currentUser = users[3]; // Mock current user

    return (
        <PageWrapper>
            {/* Profile Header */}
            <section className="flex flex-col items-center text-center mb-8">
                <img 
                    src={currentUser.avatarUrl}
                    alt={currentUser.name}
                    className="w-24 h-24 rounded-full object-cover mb-4 ring-4 ring-saudi-teal/50"
                />
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white">{currentUser.name}</h1>
                <p className="text-md text-gray-500 dark:text-gray-400">{currentUser.role}</p>
                <Button variant="secondary" className="!px-4 !py-2 !text-sm mt-4">{t('editProfile')}</Button>
            </section>
            
            {/* Gamification Stats */}
             <section className="mb-8">
                <div className="grid grid-cols-2 gap-4 text-center">
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-sm">
                        <p className="text-2xl font-bold text-gdg-yellow">{userGamification.level}</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">{t('level')}</p>
                    </div>
                     <div className="bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-sm">
                        <p className="text-2xl font-bold text-gdg-green">{userGamification.xp.toLocaleString()}</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">{t('xp')}</p>
                    </div>
                </div>
            </section>

            {/* Badges Section */}
            <section className="mb-8">
                <SectionHeader titleKey="myBadges" />
                <div className="grid grid-cols-3 sm:grid-cols-4 gap-4 text-center">
                    {userGamification.badges.map(badge => (
                        <div key={badge.id} className="bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-sm flex flex-col items-center">
                            <span className="text-4xl mb-2">{badge.icon}</span>
                            <p className="text-xs font-semibold text-gray-700 dark:text-gray-300">{t(badge.nameKey as any)}</p>
                        </div>
                    ))}
                </div>
            </section>
            
             {/* Other Sections Placeholder */}
            <section className="mb-8">
                 <div className="space-y-2">
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-sm">
                        <h3 className="font-semibold text-gray-800 dark:text-gray-200">{t('myContributions')}</h3>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-sm">
                        <h3 className="font-semibold text-gray-800 dark:text-gray-200">{t('savedItems')}</h3>
                    </div>
                 </div>
            </section>

            {/* Meet the Team Section */}
            <section>
                <SectionHeader titleKey="teamMembers" />
                 <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {teamMembers.map(member => (
                        <TeamMemberCard key={member.id} member={member} />
                    ))}
                </div>
            </section>
        </PageWrapper>
    );
};

export default ProfilePage;