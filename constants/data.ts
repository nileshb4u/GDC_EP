import { Event, TeamMember } from '../types';
import { MeetupIcon, YouTubeIcon, LinkedInIcon, DiscordIcon } from '../components/icons';

export const events: Event[] = [
  {
    id: 1,
    titleKey: 'eventTitle1',
    dateKey: 'eventDate1',
    locationKey: 'eventLocation1',
    speakerKey: 'eventSpeaker1',
    categoryKey: 'categoryAIML',
    type: 'upcoming',
  },
  {
    id: 2,
    titleKey: 'eventTitle2',
    dateKey: 'eventDate2',
    locationKey: 'eventLocation2',
    speakerKey: 'eventSpeaker2',
    categoryKey: 'categoryAIML',
    type: 'upcoming',
  },
  {
    id: 3,
    titleKey: 'eventTitle3',
    dateKey: 'eventDate3',
    locationKey: 'eventLocation3',
    speakerKey: 'eventSpeaker3',
    categoryKey: 'categoryMobile',
    type: 'upcoming',
  },
   {
    id: 4,
    titleKey: 'eventTitle4',
    dateKey: 'eventDate4',
    locationKey: 'eventLocation4',
    speakerKey: 'eventSpeaker4',
    categoryKey: 'categoryWeb',
    type: 'past',
  },
];

export const teamMembers: TeamMember[] = [
  {
    id: 1,
    nameKey: 'teamMember1Name',
    roleKey: 'teamMember1Role',
    imageUrl: '__FILE_0__',
    linkedinUrl: 'https://www.linkedin.com/in/nilesh-khedkar-pmp%C2%AE-24628b17/',
    xUrl: 'https://x.com/nileshb4u',
    researchGateUrl: 'https://www.researchgate.net/profile/Nilesh-Khedkar-4',
  },
  {
    id: 2,
    nameKey: 'teamMember2Name',
    roleKey: 'teamMember2Role',
    imageUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&q=80',
    linkedinUrl: 'https://linkedin.com/',
  },
  {
    id: 3,
    nameKey: 'teamMember3Name',
    roleKey: 'teamMember3Role',
    imageUrl: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=400&h=400&fit=crop&q=80',
    linkedinUrl: 'https://linkedin.com/',
  },
  {
    id: 4,
    nameKey: 'teamMember4Name',
    roleKey: 'teamMember4Role',
    imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&q=80',
    linkedinUrl: 'https://linkedin.com/',
  },
];

export const socialLinks = [
    { name: 'Meetup', url: 'https://www.meetup.com/', Icon: MeetupIcon },
    { name: 'YouTube', url: 'https://www.youtube.com/', Icon: YouTubeIcon },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/', Icon: LinkedInIcon },
    { name: 'Discord', url: 'https://discord.com/', Icon: DiscordIcon },
];