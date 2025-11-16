import React, { useRef, useState, useCallback, useEffect } from 'react';
import { useLocalization } from '../context/LocalizationContext';
import { events, userGamification, communityPosts, articles, users } from '../constants/data';
import { Event as EventType, Tab } from '../types';
import EventCard from '../components/EventCard';
import SectionHeader from '../components/SectionHeader';
import PageWrapper from '../components/PageWrapper';
import { ChevronLeftIcon, ChevronRightIcon } from '../components/icons';

interface HomePageProps {
    onNavClick: (tab: Tab, subTab?: string) => void;
    onRsvp: (event: EventType) => void;
}

const HomePage: React.FC<HomePageProps> = ({ onNavClick, onRsvp }) => {
    const { t } = useLocalization();
    const currentHour = new Date().getHours();
    const welcomeMessage = currentHour < 12 ? t('welcomeGoodMorning') : t('welcomeGoodEvening');
    const upcomingEvents = events.filter(e => e.type === 'upcoming');
    const currentUser = users[3];

    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [showLeftArrow, setShowLeftArrow] = useState(false);
    const [showRightArrow, setShowRightArrow] = useState(true);

    const checkArrows = useCallback(() => {
        const el = scrollContainerRef.current;
        if (el) {
            setShowLeftArrow(el.scrollLeft > 0);
            setShowRightArrow(el.scrollLeft < el.scrollWidth - el.clientWidth - 1);
        }
    }, []);

    useEffect(() => {
        checkArrows();
        const el = scrollContainerRef.current;
        el?.addEventListener('resize', checkArrows);
        return () => el?.removeEventListener('resize', checkArrows);
    }, [upcomingEvents, checkArrows]);
    
    const handleScroll = () => {
        checkArrows();
    };

    const scroll = (direction: 'left' | 'right') => {
        const el = scrollContainerRef.current;
        if (el) {
            const scrollAmount = direction === 'left' ? -el.clientWidth * 0.8 : el.clientWidth * 0.8;
            el.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };


    return (
        <PageWrapper>
            {/* Welcome Banner */}
            <section className="mb-8">
                <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white">{welcomeMessage}</h1>
                <p className="text-md text-gray-500 dark:text-gray-400">{t('welcomeBanner')}</p>
            </section>
            
            {/* User Profile Snippet */}
            <section className="mb-8">
                <div className="bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-md flex items-center space-x-4 rtl:space-x-reverse">
                    <img src={currentUser.avatarUrl} alt={currentUser.name} className="w-16 h-16 rounded-full object-cover ring-2 ring-saudi-teal/50" />
                    <div className="flex-grow">
                        <h2 className="font-bold text-lg text-gray-900 dark:text-white">{currentUser.name}</h2>
                        <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">{userGamification.rank}</p>
                        <p className="text-sm font-bold text-gray-800 dark:text-white mt-1">{userGamification.xp.toLocaleString()} {t('xp')}</p>
                    </div>
                </div>
            </section>

            {/* Latest News Section */}
            <section className="mb-8">
                <SectionHeader titleKey="latestNews" onViewAllClick={() => onNavClick(Tab.Explore, 'articles')} />
                <div className="space-y-4">
                  {articles.map(article => (
                    <div key={article.id} className="bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-sm flex items-center space-x-4 rtl:space-x-reverse">
                      <img src={article.thumbnailUrl} alt={t(article.titleKey as any)} className="w-20 h-20 rounded-lg object-cover" />
                      <div className="flex-grow">
                        <p className="text-xs font-bold uppercase text-gdg-blue">{t(article.categoryKey as any)}</p>
                        <h3 className="font-bold text-gray-900 dark:text-white">{t(article.titleKey as any)}</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">{article.author.name}</p>
                      </div>
                    </div>
                  ))}
                </div>
            </section>

            {/* Upcoming Events Section */}
            <section className="mb-8 relative">
                <SectionHeader titleKey="upcomingEventsTitle" onViewAllClick={() => onNavClick(Tab.Events)} />
                 {showLeftArrow && (
                    <button onClick={() => scroll('left')} className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/50 dark:bg-black/50 backdrop-blur-sm rounded-full w-10 h-10 flex items-center justify-center shadow-md rtl:left-auto rtl:right-0">
                        <ChevronLeftIcon className="w-6 h-6 text-gray-800 dark:text-white" />
                    </button>
                )}
                <div ref={scrollContainerRef} onScroll={handleScroll} className="flex overflow-x-auto space-x-4 rtl:space-x-reverse pb-4 snap-x snap-mandatory hide-scrollbar">
                    {upcomingEvents.map(event => (
                        <EventCard key={event.id} event={event} onRsvp={onRsvp} isCompact={true} />
                    ))}
                </div>
                 {showRightArrow && (
                    <button onClick={() => scroll('right')} className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/50 dark:bg-black/50 backdrop-blur-sm rounded-full w-10 h-10 flex items-center justify-center shadow-md rtl:right-auto rtl:left-0">
                        <ChevronRightIcon className="w-6 h-6 text-gray-800 dark:text-white" />
                    </button>
                )}
            </section>

            {/* Trending Discussions Section */}
            <section>
                <SectionHeader titleKey="trendingDiscussions" onViewAllClick={() => onNavClick(Tab.Explore, 'discussions')} />
                <div className="space-y-4">
                  {communityPosts.map(post => (
                     <div key={post.id} className="bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-sm">
                        <h3 className="font-bold text-gray-900 dark:text-white">{t(post.titleKey as any)}</h3>
                        <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mt-2">
                           <p>by {post.author.name}</p>
                           <p>{post.replies} replies</p>
                        </div>
                     </div>
                  ))}
                </div>
            </section>
        </PageWrapper>
    );
};

export default HomePage;