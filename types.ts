import React from 'react';

export enum Tab {
  Home = 'Home',
  Explore = 'Explore',
  Events = 'Events',
  Profile = 'Profile',
}

export type Language = 'en' | 'ar';

export interface Event {
  id: number;
  titleKey: string;
  dateKey: string;
  locationKey: string;
  speakerKey?: string;
  categoryKey: string;
  type: 'upcoming' | 'past';
}

export interface User {
  id: number;
  name: string;
  arabicName?: string;
  avatarUrl: string;
  role: string;
}

// FIX: Add TeamMember interface
export interface TeamMember {
  id: number;
  nameKey: string;
  roleKey: string;
  imageUrl: string;
  linkedinUrl: string;
  xUrl?: string;
  researchGateUrl?: string;
}

export interface GamificationStats {
  xp: number;
  level: number;
  rank: string;
  badges: Badge[];
}

export interface Badge {
  id: number;
  nameKey: string;
  icon: string; // Could be an emoji or an icon component name
}

export interface Article {
  id: number;
  titleKey: string;
  author: User;
  publishDate: string;
  thumbnailUrl: string;
  categoryKey: string;
}

export interface CommunityPost {
    id: number;
    titleKey: string;
    author: User;
    timestamp: string;
    replies: number;
    categoryKey: string;
}