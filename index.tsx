import React, { useState, useCallback, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { LocalizationProvider, useLocalization } from './context/LocalizationContext';
import { Tab, Event } from './types';

// New PWA components and pages
import Header from './components/Header';
import BottomNav from './components/BottomNav';
import HomePage from './pages/HomePage';
import ExplorePage from './pages/ExplorePage';
import EventsPage from './pages/EventsPage';
import ProfilePage from './pages/ProfilePage';
import Modal from './components/Modal';
import Button from './components/Button';
import { ArticleIcon, DiscussionIcon, ProjectIcon, VideoIcon } from './components/icons';


// --- START: MODAL COMPONENTS ---

const CreationSelectorModal: React.FC<{ 
  isOpen: boolean; 
  onClose: () => void; 
  onSelect: (type: 'discussion' | 'article' | 'video' | 'project') => void;
}> = ({ isOpen, onClose, onSelect }) => {
    const { t } = useLocalization();

    const options = [
        { type: 'discussion', label: t('postDiscussion'), Icon: DiscussionIcon },
        { type: 'article', label: t('createArticle'), Icon: ArticleIcon },
        { type: 'video', label: t('createVideo'), Icon: VideoIcon },
        { type: 'project', label: t('createProject'), Icon: ProjectIcon },
    ] as const;

    return (
        <Modal isOpen={isOpen} onClose={onClose} title={t('whatToCreate')}>
            <div className="grid grid-cols-2 gap-4">
                {options.map(({ type, label, Icon }) => (
                    <button
                        key={type}
                        onClick={() => onSelect(type)}
                        className="flex flex-col items-center justify-center p-4 bg-gray-100 dark:bg-gray-700 rounded-lg text-center hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                    >
                        <Icon className="w-10 h-10 mb-2 text-saudi-teal" />
                        <span className="font-semibold text-gray-800 dark:text-gray-200">{label}</span>
                    </button>
                ))}
            </div>
        </Modal>
    );
};

const CreatePostModal: React.FC<{ isOpen: boolean; onClose: () => void; }> = ({ isOpen, onClose }) => {
  const { t } = useLocalization();
  return (
    <Modal isOpen={isOpen} onClose={onClose} title={t('createDiscussion')}>
      <form onSubmit={(e) => { e.preventDefault(); onClose(); }}>
        <textarea
            rows={6}
            className="w-full p-3 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-saudi-teal focus:border-saudi-teal dark:text-white"
            placeholder={t('whatsOnYourMind')}
        ></textarea>
        <Button type="submit" variant="primary" className="w-full mt-4">
          {t('post')}
        </Button>
      </form>
    </Modal>
  );
};

const CreateArticleModal: React.FC<{ isOpen: boolean; onClose: () => void; }> = ({ isOpen, onClose }) => {
    const { t } = useLocalization();
    return (
      <Modal isOpen={isOpen} onClose={onClose} title={t('createArticleTitle')}>
        <form onSubmit={(e) => { e.preventDefault(); onClose(); }} className="space-y-4">
            <input
              type="text"
              className="w-full p-3 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-saudi-teal focus:border-saudi-teal dark:text-white"
              placeholder={t('articleTitle')}
            />
            <textarea
              rows={8}
              className="w-full p-3 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-saudi-teal focus:border-saudi-teal dark:text-white"
              placeholder={t('articleContent')}
            ></textarea>
          <Button type="submit" variant="primary" className="w-full">
            {t('publishArticle')}
          </Button>
        </form>
      </Modal>
    );
};

const CreateVideoModal: React.FC<{ isOpen: boolean; onClose: () => void; }> = ({ isOpen, onClose }) => {
    const { t } = useLocalization();
    return (
        <Modal isOpen={isOpen} onClose={onClose} title={t('createVideoTitle')}>
            <form onSubmit={(e) => { e.preventDefault(); onClose(); }} className="space-y-4">
                <input
                    type="url"
                    className="w-full p-3 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-saudi-teal focus:border-saudi-teal dark:text-white"
                    placeholder={t('videoUrl')}
                />
                <Button type="submit" variant="primary" className="w-full">{t('shareVideo')}</Button>
            </form>
        </Modal>
    );
};

const CreateProjectModal: React.FC<{ isOpen: boolean; onClose: () => void; }> = ({ isOpen, onClose }) => {
    const { t } = useLocalization();
    return (
        <Modal isOpen={isOpen} onClose={onClose} title={t('createProjectTitle')}>
            <form onSubmit={(e) => { e.preventDefault(); onClose(); }} className="space-y-4">
                <input
                    type="url"
                    className="w-full p-3 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-saudi-teal focus:border-saudi-teal dark:text-white"
                    placeholder={t('projectUrl')}
                />
                <textarea
                    rows={4}
                    className="w-full p-3 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-saudi-teal focus:border-saudi-teal dark:text-white"
                    placeholder={t('projectDescription')}
                ></textarea>
                <Button type="submit" variant="primary" className="w-full">{t('shareProject')}</Button>
            </form>
        </Modal>
    );
};

// --- END: MODAL COMPONENTS ---


const App: React.FC = () => {
    const [activeTab, setActiveTab] = useState<Tab>(Tab.Home);
    const [isRsvpModalOpen, setIsRsvpModalOpen] = useState(false);
    const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

    // State for all creation modals
    const [isSelectorModalOpen, setIsSelectorModalOpen] = useState(false);
    const [isCreatePostModalOpen, setIsCreatePostModalOpen] = useState(false);
    const [isCreateArticleModalOpen, setIsCreateArticleModalOpen] = useState(false);
    const [isCreateVideoModalOpen, setIsCreateVideoModalOpen] = useState(false);
    const [isCreateProjectModalOpen, setIsCreateProjectModalOpen] = useState(false);

    const handleTabClick = useCallback((tab: Tab, subTab?: string) => {
        setActiveTab(tab);
        // We pass the subTab directly to the HomePage's onNavClick now
        window.scrollTo(0, 0);
    }, []);

    const handleRsvp = useCallback((event: Event) => {
        setSelectedEvent(event);
        setIsRsvpModalOpen(true);
    }, []);
    
    const handleCloseRsvpModal = useCallback(() => {
        setIsRsvpModalOpen(false);
        setSelectedEvent(null);
    }, []);
    
    const handleFabClick = useCallback(() => {
        setIsSelectorModalOpen(true);
    }, []);
    
    const handleCreationSelect = useCallback((type: 'discussion' | 'article' | 'video' | 'project') => {
        setIsSelectorModalOpen(false);
        if (type === 'discussion') setIsCreatePostModalOpen(true);
        if (type === 'article') setIsCreateArticleModalOpen(true);
        if (type === 'video') setIsCreateVideoModalOpen(true);
        if (type === 'project') setIsCreateProjectModalOpen(true);
    }, []);

    const renderPage = () => {
        switch (activeTab) {
            case Tab.Home:
                return <HomePage onNavClick={handleTabClick} onRsvp={handleRsvp} />;
            case Tab.Explore:
                // Pass a key to re-mount if the sub-tab changes via HomePage
                return <ExplorePage />;
            case Tab.Events:
                return <EventsPage 
                            isModalOpen={isRsvpModalOpen}
                            selectedEvent={selectedEvent}
                            onRsvp={handleRsvp}
                            onCloseModal={handleCloseRsvpModal}
                        />;
            case Tab.Profile:
                return <ProfilePage />;
            default:
                return <HomePage onNavClick={handleTabClick} onRsvp={handleRsvp} />;
        }
    };

    return (
        <div className="bg-gray-50 dark:bg-gray-900 transition-colors duration-300 min-h-screen">
            <Header onLogoClick={() => handleTabClick(Tab.Home)} />
            <main>
                {renderPage()}
            </main>
            <BottomNav
                activeTab={activeTab}
                onTabClick={handleTabClick}
                onFabClick={handleFabClick}
            />
            {/* Render all modals */}
            <CreationSelectorModal
                isOpen={isSelectorModalOpen}
                onClose={() => setIsSelectorModalOpen(false)}
                onSelect={handleCreationSelect}
            />
            <CreatePostModal
                isOpen={isCreatePostModalOpen}
                onClose={() => setIsCreatePostModalOpen(false)}
            />
            <CreateArticleModal
                isOpen={isCreateArticleModalOpen}
                onClose={() => setIsCreateArticleModalOpen(false)}
            />
            <CreateVideoModal
                isOpen={isCreateVideoModalOpen}
                onClose={() => setIsCreateVideoModalOpen(false)}
            />
            <CreateProjectModal
                isOpen={isCreateProjectModalOpen}
                onClose={() => setIsCreateProjectModalOpen(false)}
            />
        </div>
    );
};

const Root: React.FC = () => {
  const { language } = useLocalization();
  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
  }, [language]);

  // Set initial theme from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }
  }, []);

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