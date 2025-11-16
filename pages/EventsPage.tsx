
import React, { useState, useMemo } from 'react';
import { useLocalization } from '../context/LocalizationContext';
import { events } from '../constants/data';
import EventCard from '../components/EventCard';
import Modal from '../components/Modal';
import Button from '../components/Button';
import { Event } from '../types';
import PageWrapper from '../components/PageWrapper';

interface EventsPageProps {
    isModalOpen: boolean;
    selectedEvent: Event | null;
    onRsvp: (event: Event) => void;
    onCloseModal: () => void;
}

const EventsPage: React.FC<EventsPageProps> = ({ isModalOpen, selectedEvent, onRsvp, onCloseModal }) => {
  const { t } = useLocalization();
  const [activeTab, setActiveTab] = useState<'upcoming' | 'past'>('upcoming');

  const upcomingEvents = useMemo(() => events.filter(e => e.type === 'upcoming'), []);
  const pastEvents = useMemo(() => events.filter(e => e.type === 'past'), []);
  
  const renderEvents = (eventList: Event[]) => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {eventList.map(event => (
            <EventCard key={event.id} event={event} onRsvp={onRsvp} />
        ))}
    </div>
  );

  return (
    <PageWrapper>
      <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-6">
        {t('eventsPageTitle')}
      </h1>
      
      {/* Tab Switcher */}
      <div className="flex border-b border-gray-200 dark:border-gray-700 mb-6">
        <button 
            onClick={() => setActiveTab('upcoming')}
            className={`px-4 py-2 font-semibold text-lg transition-colors ${activeTab === 'upcoming' ? 'border-b-2 border-saudi-teal text-saudi-teal' : 'text-gray-500'}`}
        >
            {t('upcoming')}
        </button>
        <button 
            onClick={() => setActiveTab('past')}
            className={`px-4 py-2 font-semibold text-lg transition-colors ${activeTab === 'past' ? 'border-b-2 border-saudi-teal text-saudi-teal' : 'text-gray-500'}`}
        >
            {t('past')}
        </button>
      </div>

      {/* Events List */}
      <div>
        {activeTab === 'upcoming' ? renderEvents(upcomingEvents) : renderEvents(pastEvents)}
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
    </PageWrapper>
  );
};

export default EventsPage;
