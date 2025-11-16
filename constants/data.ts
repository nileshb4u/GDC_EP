

import { Event, User, GamificationStats, Badge, Article, CommunityPost, TeamMember } from '../types';
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

export const users: { [key: number]: User } = {
  1: { id: 1, name: 'Nora Al-Saud', avatarUrl: 'https://i.pravatar.cc/150?u=nora', role: 'AI/ML Enthusiast' },
  2: { id: 2, name: 'Saleh Al-Amri', avatarUrl: 'https://i.pravatar.cc/150?u=saleh', role: 'Flutter Developer' },
  3: { id: 3, name: 'Admin', avatarUrl: '__FILE_0__', role: 'Chapter Lead' },
};

export const badges: Badge[] = [
    { id: 1, nameKey: 'badgeCommunityHelper', icon: '🤝' },
    { id: 2, nameKey: 'badgeChallengeChampion', icon: '🏆' },
    { id: 3, nameKey: 'badgeTopContributor', icon: '✍️' },
];

export const userGamification: GamificationStats = {
    xp: 4280,
    level: 12,
    rank: 'Gold Contributor',
    badges: badges,
};

export const articles: Article[] = [
    { id: 1, titleKey: 'articleTitle1', author: users[2], publishDate: '2 days ago', thumbnailUrl: 'https://images.unsplash.com/photo-1617040619263-41c5a9ca7521?w=400&q=80', categoryKey: 'categoryMobile' },
    { id: 2, titleKey: 'articleTitle2', author: users[1], publishDate: '5 days ago', thumbnailUrl: 'https://images.unsplash.com/photo-1677756119517-756a188d2d94?w=400&q=80', categoryKey: 'categoryAIML' },
];

export const communityPosts: CommunityPost[] = [
    { id: 1, titleKey: 'postTitle1', author: users[1], timestamp: '3h ago', replies: 5, categoryKey: 'categoryCloud' },
    { id: 2, titleKey: 'postTitle2', author: users[2], timestamp: '1d ago', replies: 12, categoryKey: 'categoryWeb' },
];

// FIX: Add teamMembers data
export const teamMembers: TeamMember[] = [
    {
        id: 1,
        nameKey: 'teamMemberName1',
        roleKey: 'teamMemberRole1',
        imageUrl: 'https://avatar.iran.liara.run/public/boy?username=nileshkhedkar',
        linkedinUrl: 'https://www.linkedin.com/in/nilesh-khedkar-pmp%C2%AE-24628b17/',
        xUrl: 'https://x.com/nileshb4u',
    },
    {
        id: 2,
        nameKey: 'teamMemberName2',
        roleKey: 'teamMemberRole2',
        imageUrl: 'https://i.pravatar.cc/150?u=tbd2',
        linkedinUrl: 'https://www.linkedin.com/in/',
        researchGateUrl: 'https://www.researchgate.net/profile/',
    },
    {
        id: 3,
        nameKey: 'teamMemberName3',
        roleKey: 'teamMemberRole3',
        imageUrl: 'https://i.pravatar.cc/150?u=tbd3',
        linkedinUrl: 'https://www.linkedin.com/in/',
        xUrl: 'https://x.com/',
    },
    {
        id: 4,
        nameKey: 'teamMemberName4',
        roleKey: 'teamMemberRole4',
        imageUrl: 'https://i.pravatar.cc/150?u=tbd4',
        linkedinUrl: 'https://www.linkedin.com/in/',
    },
];

export const socialLinks = [
    { name: 'Meetup', url: 'https://www.meetup.com/', Icon: MeetupIcon },
    { name: 'YouTube', url: 'https://www.youtube.com/', Icon: YouTubeIcon },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/', Icon: LinkedInIcon },
    { name: 'Discord', url: 'https://discord.com/', Icon: DiscordIcon },
];