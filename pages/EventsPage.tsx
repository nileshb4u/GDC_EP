
import React, { useState, useMemo } from 'react';
import { useLocalization } from '../context/LocalizationContext';
import { events } from '../constants/data';
import EventCard from '../components/EventCard';
import Modal from '../components/Modal';
import Button from '../components/Button';
import { Event } from '../types';

const EventsPage: React.FC<{
    isModalOpen: boolean;
    selectedEvent: Event | null;
    onRsvp: (event: Event) => void;
    onCloseModal: () => void;
}> = ({ isModalOpen, selectedEvent, onRsvp, onCloseModal }) => {
  const { t } = useLocalization();
  const [filter, setFilter] = useState('All');

  const categories = useMemo(() => ['All', 'AI/ML', 'Web', 'Cloud', 'Mobile'], []);
  const categoryKeys: { [key: string]: string } = {
      'All': 'allCategories',
      'AI/ML': 'categoryAIML',
      'Web': 'categoryWeb',
      'Cloud': 'categoryCloud',
      'Mobile': 'categoryMobile',
  };

  const filteredEvents = useMemo(() => {
    return events.filter(event => {
      if (filter === 'All') return true;
      return t(event.categoryKey as any) === t(categoryKeys[filter] as any);
    });
  }, [filter, t, categoryKeys]);

  const upcomingEvents = filteredEvents.filter(e => e.type === 'upcoming');
  const pastEvents = filteredEvents.filter(e => e.type === 'past');

  return (
    <div className="bg-gray-50 dark:bg-gray-900 py-20 animate-fade-in">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center text-gray-900 dark:text-white mb-8">
          {t('eventsPageTitle')}
        </h1>
        
        <div className="flex flex-wrap justify-center items-center gap-2 mb-12">
          <span className="text-gray-700 dark:text-gray-300 me-2">{t('filterByCategory')}</span>
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 text-sm font-semibold rounded-full transition-colors duration-200 ${
                filter === category
                  ? 'bg-saudi-teal text-white'
                  : 'bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600'
              }`}
            >
              {t(categoryKeys[category] as any)}
            </button>
          ))}
        </div>
        
        {upcomingEvents.length > 0 && (
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">{t('upcomingEventsTitle')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {upcomingEvents.map(event => (
                <EventCard key={event.id} event={event} onRsvp={onRsvp} />
              ))}
            </div>
          </div>
        )}

        {pastEvents.length > 0 && (
          <div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">{t('pastEvents')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {pastEvents.map(event => (
                <EventCard key={event.id} event={event} onRsvp={onRsvp} />
              ))}
            </div>
          </div>
        )}

        {filteredEvents.length === 0 && (
            <p className="text-center text-gray-500 dark:text-gray-400 text-xl mt-12">No events found for this category.</p>
        )}
      </div>

      <Modal isOpen={isModalOpen} onClose={onCloseModal} title={t('rsvpModalTitle')}>
        <div className="text-center">
            <p className="text-gray-600 dark:text-gray-300 mb-6">{t('rsvpModalText')}</p>
            <p className="font-bold text-lg text-gray-900 dark:text-white mb-8">{selectedEvent && t(selectedEvent.titleKey as any)}</p>
            <div className="flex justify-center gap-4">
                <Button variant="secondary" onClick={onCloseModal}>{t('rsvpModalClose')}</Button>
                <Button variant="primary" onClick={() => window.open('https://forms.gle/', '_blank')}>{t('rsvpModalGoogleForm')}</Button>
            </div>
        </div>
      </Modal>

      <style>{`
          .animate-fade-in { animation: fadeIn 0.5s ease-in-out; }
          @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
      `}</style>
    </div>
  );
};

export default EventsPage;