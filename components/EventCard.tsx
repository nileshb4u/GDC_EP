
import React from 'react';
import { useLocalization } from '../context/LocalizationContext';
import { Event } from '../types';
import Button from './Button';
import { CalendarIcon, LocationIcon, UserIcon, TagIcon } from './icons';

interface EventCardProps {
  event: Event;
  onRsvp: (event: Event) => void;
  isCompact?: boolean;
}

const EventCard: React.FC<EventCardProps> = ({ event, onRsvp, isCompact = false }) => {
  const { t } = useLocalization();

  if (isCompact) {
    return (
       <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden w-72 flex-shrink-0 snap-start">
            <div className="p-5">
                <div className="flex items-center mb-2">
                    <TagIcon className="w-4 h-4 me-2 text-gdg-yellow" />
                    <span className="text-xs font-bold text-yellow-800 dark:text-yellow-300 uppercase">{t(event.categoryKey as any)}</span>
                </div>
                <h3 className="text-md font-bold text-gray-900 dark:text-white mb-3 leading-tight truncate">{t(event.titleKey as any)}</h3>
                <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                    <div className="flex items-center">
                        <CalendarIcon className="w-4 h-4 me-2 text-gdg-blue" />
                        <span>{t(event.dateKey as any)}</span>
                    </div>
                    <div className="flex items-center">
                        <LocationIcon className="w-4 h-4 me-2 text-gdg-red" />
                        <span>{t(event.locationKey as any)}</span>
                    </div>
                </div>
            </div>
            <div className="px-5 pb-5 mt-2">
                <Button variant="primary" className="w-full !py-2 !text-sm" onClick={() => onRsvp(event)}>
                    {t('rsvp')}
                </Button>
            </div>
        </div>
    );
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden flex flex-col">
      <div className="p-6 flex-grow">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 leading-tight">{t(event.titleKey as any)}</h3>
        <div className="space-y-3 text-gray-600 dark:text-gray-400">
          <div className="flex items-center">
            <CalendarIcon className="w-5 h-5 me-3 text-gdg-blue" />
            <span>{t(event.dateKey as any)}</span>
          </div>
          <div className="flex items-center">
            <LocationIcon className="w-5 h-5 me-3 text-gdg-red" />
            <span>{t(event.locationKey as any)}</span>
          </div>
          {event.speakerKey && (
            <div className="flex items-center">
              <UserIcon className="w-5 h-5 me-3 text-gdg-green" />
              <span>{t(event.speakerKey as any)}</span>
            </div>
           )}
          <div className="flex items-center">
              <TagIcon className="w-5 h-5 me-3 text-gdg-yellow" />
              <span className="text-sm font-medium bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300 px-2 py-0.5 rounded-md">{t(event.categoryKey as any)}</span>
          </div>
        </div>
      </div>
      <div className="bg-gray-50 dark:bg-gray-700/50 p-6 mt-auto">
        <Button variant="primary" className="w-full" onClick={() => onRsvp(event)}>
          {t('rsvp')}
        </Button>
      </div>
    </div>
  );
};

export default EventCard;
