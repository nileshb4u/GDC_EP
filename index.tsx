import React, { useState, useCallback, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { LocalizationProvider, useLocalization } from './context/LocalizationContext';
import { Page, Event } from './types';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import EventsPage from './pages/EventsPage';
import VolunteerPage from './pages/VolunteerPage';
import PlaceholderPage from './pages/PlaceholderPage';

const App: React.FC = () => {
    const [currentPage, setCurrentPage] = useState<Page>(Page.Home);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

    const handleNavClick = useCallback((page: Page) => {
        setCurrentPage(page);
        window.scrollTo(0, 0);
    }, []);

    const handleRsvp = useCallback((event: Event) => {
        setSelectedEvent(event);
        setIsModalOpen(true);
    }, []);
    
    const handleCloseModal = useCallback(() => {
        setIsModalOpen(false);
        setSelectedEvent(null);
    }, []);

    const renderPage = () => {
        switch (currentPage) {
            case Page.Home:
                return <HomePage onNavClick={handleNavClick} onRsvp={handleRsvp} />;
            case Page.About:
                return <AboutPage />;
            case Page.Events:
                return <EventsPage 
                            isModalOpen={isModalOpen}
                            selectedEvent={selectedEvent}
                            onRsvp={handleRsvp}
                            onCloseModal={handleCloseModal}
                        />;
            case Page.Volunteer:
                return <VolunteerPage />;
            case Page.Programs:
                return <PlaceholderPage titleKey="programsTitle" />;
            case Page.Resources:
                return <PlaceholderPage titleKey="resourcesTitle" />;
            case Page.Projects:
                return <PlaceholderPage titleKey="projectsTitle" />;
            case Page.Sponsors:
                return <PlaceholderPage titleKey="sponsorsTitle" />;
            case Page.Contact:
                return <PlaceholderPage titleKey="contactTitle" />;
            default:
                return <HomePage onNavClick={handleNavClick} onRsvp={handleRsvp} />;
        }
    };

    return (
        <div className="bg-white dark:bg-gray-900 transition-colors duration-300">
            <Header currentPage={currentPage} onNavClick={handleNavClick} />
            <main>
                {renderPage()}
            </main>
            <Footer />
        </div>
    );
};

const Root: React.FC = () => {
  // A small component to set initial language direction on body
  const { language } = useLocalization();
  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
  }, [language]);
  return <App />;
}

const rootElement = document.getElementById('root');
if (rootElement) {
    const root = ReactDOM.createRoot(rootElement);
    root.render(
        <React.StrictMode>
            <LocalizationProvider>
                <Root />
            </LocalizationProvider>
        </React.StrictMode>
    );
}
