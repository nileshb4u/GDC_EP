import React from 'react';
import { useLocalization } from '../context/LocalizationContext';
import { Tab } from '../types';
import { HomeIcon, ExploreIcon, EventsIcon, ProfileIcon, PlusIcon } from './icons';

interface BottomNavProps {
  activeTab: Tab;
  onTabClick: (tab: Tab) => void;
  onFabClick: () => void;
}

const NavButton: React.FC<{
    tab: Tab;
    icon: React.FC<React.SVGProps<SVGSVGElement>>;
    isActive: boolean;
    onClick: (tab: Tab) => void;
}> = ({ tab, icon: Icon, isActive, onClick }) => {
    const { t } = useLocalization();
    return (
        <button
          onClick={() => onClick(tab)}
          className={`flex flex-col items-center justify-center w-full h-full transition-all duration-200 ease-in-out transform ${
            isActive ? 'text-saudi-teal scale-110' : 'text-gray-500 dark:text-gray-400 hover:text-saudi-teal/80'
          }`}
          aria-current={isActive ? 'page' : undefined}
        >
          <Icon className="w-6 h-6 mb-1" />
          <span className={`text-xs font-bold ${isActive ? 'text-saudi-teal' : ''}`}>{t(tab)}</span>
        </button>
    );
};

const BottomNav: React.FC<BottomNavProps> = ({ activeTab, onTabClick, onFabClick }) => {
  const { t } = useLocalization();

  const navItems = [
    { tab: Tab.Home, icon: HomeIcon },
    { tab: Tab.Explore, icon: ExploreIcon },
    { tab: Tab.Events, icon: EventsIcon },
    { tab: Tab.Profile, icon: ProfileIcon },
  ];

  const leftItems = navItems.slice(0, 2);
  const rightItems = navItems.slice(2, 4);

  return (
    <nav className="fixed bottom-0 left-0 right-0 h-20 bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border-t border-gray-200 dark:border-gray-700 z-50">
      <div className="flex justify-around items-center h-full max-w-screen-xl mx-auto">
        {leftItems.map(({ tab, icon }) => (
            <div key={tab} className="w-1/5 h-full">
                <NavButton
                    tab={tab}
                    icon={icon}
                    isActive={activeTab === tab}
                    onClick={onTabClick}
                />
            </div>
        ))}

        <div className="w-1/5 h-full flex justify-center items-center">
            <button
              onClick={onFabClick}
              aria-label={t('createDiscussion')}
              className="bg-saudi-teal text-white w-16 h-16 rounded-full shadow-lg flex items-center justify-center transform -translate-y-5 transition-all duration-300 hover:scale-110 hover:bg-teal-700 focus:outline-none focus:ring-4 focus:ring-teal-300 focus:ring-opacity-50"
            >
              <PlusIcon className="w-8 h-8" />
            </button>
        </div>

        {rightItems.map(({ tab, icon }) => (
            <div key={tab} className="w-1/5 h-full">
                 <NavButton
                    tab={tab}
                    icon={icon}
                    isActive={activeTab === tab}
                    onClick={onTabClick}
                />
            </div>
        ))}
      </div>
    </nav>
  );
};

export default BottomNav;