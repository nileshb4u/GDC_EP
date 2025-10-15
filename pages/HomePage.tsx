
import React from 'react';
import { useLocalization } from '../context/LocalizationContext';
import Button from '../components/Button';
import Counter from '../components/Counter';
import EventCard from '../components/EventCard';
import { events } from '../constants/data';
import { Page, Event as EventType } from '../types';

interface HomePageProps {
    onNavClick: (page: Page) => void;
    onRsvp: (event: EventType) => void;
}

const HomePage: React.FC<HomePageProps> = ({ onNavClick, onRsvp }) => {
    const { t } = useLocalization();

    const upcomingEvents = events.filter(e => e.type === 'upcoming').slice(0, 3);

    const highlights = [
        { src: 'https://images.unsplash.com/photo-1593031374921-2d59c753548a?w=800&q=80', captionKey: 'highlight1' },
        { src: 'https://images.unsplash.com/photo-1591123120675-6f7f1aae0e5b?w=800&q=80', captionKey: 'highlight2' },
        { src: 'https://images.unsplash.com/photo-1614624532983-4ce03382d63d?w=800&q=80', captionKey: 'highlight3' },
    ];

    return (
        <div className="animate-fade-in">
            {/* Hero Section */}
            <section className="relative bg-white dark:bg-gray-900 text-center py-20 md:py-32 overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-10 dark:opacity-5" style={{
                    backgroundImage: `
                        radial-gradient(circle at 15% 50%, #00A79D 0%, transparent 20%),
                        radial-gradient(circle at 85% 30%, #F0E68C 0%, transparent 25%)
                    `
                }}></div>
                <div className="absolute inset-0 z-0 opacity-5 dark:opacity-30" style={{
                    backgroundImage: 'url(\'data:image/svg+xml;utf8,<svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><g fill="%234A5568" fill-opacity="0.1"><path d="M-10 10L10-10V10L-10 30ZM10 10L30-10V10L10 30ZM30 10L50-10V10L30 30ZM50 10L70-10V10L50 30ZM70 10L90-10V10L70 30ZM90 10L110-10V10L90 30ZM-10 30L10 10V30L-10 50ZM10 30L30 10V30L10 50ZM30 30L50 10V30L30 50ZM50 30L70 10V30L50 50ZM70 30L90 10V30L70 50ZM90 30L110 10V30L90 50ZM-10 50L10 30V50L-10 70ZM10 50L30 30V50L10 70ZM30 50L50 30V50L30 70ZM50 50L70 30V50L50 70ZM70 50L90 30V50L70 70ZM90 50L110 30V50L90 70ZM-10 70L10 50V70L-10 90ZM10 70L30 50V70L10 90ZM30 70L50 50V70L30 90ZM50 70L70 50V70L50 90ZM70 70L90 50V70L70 90ZM90 70L110 50V70L90 90ZM-10 90L10 70V90L-10 110ZM10 90L30 70V90L10 110ZM30 90L50 70V90L30 110ZM50 90L70 70V90L50 110ZM70 90L90 70V90L70 110ZM90 90L110 70V90L90 110Z"/></g></svg>\')'
                }}></div>
                
                <div className="container mx-auto px-6 relative z-10">
                    <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight">
                        {t('heroTitle')}
                    </h1>
                    <p className="mt-4 max-w-3xl mx-auto text-lg md:text-xl text-gray-600 dark:text-gray-300">
                        {t('heroSubtitle')}
                    </p>
                    <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4">
                        <Button variant="primary" onClick={() => onNavClick(Page.Volunteer)}>
                            {t('joinCommunity')}
                        </Button>
                        <Button variant="secondary" onClick={() => onNavClick(Page.Events)}>
                            {t('viewEvents')}
                        </Button>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="bg-gray-50 dark:bg-gray-800 py-16">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                        <div className="p-4">
                            <h2 className="text-5xl font-extrabold text-saudi-teal"><Counter target={500} />+</h2>
                            <p className="text-gray-600 dark:text-gray-400 mt-2 text-lg">{t('membersJoined')}</p>
                        </div>
                        <div className="p-4">
                            <h2 className="text-5xl font-extrabold text-gdg-green"><Counter target={12} /></h2>
                            <p className="text-gray-600 dark:text-gray-400 mt-2 text-lg">{t('upcomingEvents')}</p>
                        </div>
                        <div className="p-4">
                            <h2 className="text-5xl font-extrabold text-gdg-yellow"><Counter target={8} />+</h2>
                            <p className="text-gray-600 dark:text-gray-400 mt-2 text-lg">{t('projectsBuilt')}</p>
                        </div>
                    </div>
                </div>
            </section>
            
            {/* Upcoming Events Section */}
            <section className="py-20 bg-white dark:bg-gray-900">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">{t('upcomingEventsTitle')}</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {upcomingEvents.map(event => (
                            <EventCard key={event.id} event={event} onRsvp={onRsvp} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Community Highlights Section */}
            <section className="bg-gray-50 dark:bg-gray-800 py-20">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">{t('highlightsTitle')}</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {highlights.map((highlight, index) => (
                             <div key={index} className="group relative rounded-2xl overflow-hidden shadow-lg">
                                <img src={highlight.src} alt={t(highlight.captionKey as any)} className="w-full h-72 object-cover transform group-hover:scale-110 transition-transform duration-500" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                                <p className="absolute bottom-0 left-0 p-6 text-white text-lg font-semibold">{t(highlight.captionKey as any)}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <style>{`
                .animate-fade-in { animation: fadeIn 0.5s ease-in-out; }
                @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
            `}</style>
        </div>
    );
};

export default HomePage;