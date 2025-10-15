// FIX: To resolve the "Cannot find namespace 'JSX'" error, React must be imported.
// This makes the necessary JSX typings, such as JSX.Element, available in the file.
import React from 'react';

export enum Page {
  Home = 'Home',
  About = 'About',
  Events = 'Events',
  Programs = 'Programs',
  Resources = 'Resources',
  Projects = 'Projects',
  Sponsors = 'Sponsors',
  Volunteer = 'Volunteer',
  Contact = 'Contact'
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

export interface TeamMember {
  id: number;
  nameKey: string;
  roleKey: string;
  imageUrl: string;
  linkedinUrl: string;
  xUrl?: string;
  researchGateUrl?: string;
}

export interface Program {
  id: number;
  titleKey: string;
  descriptionKey: string;
  // FIX: Replaced JSX.Element with React.ReactElement to resolve "Cannot find namespace 'JSX'" error by using an explicit type from the imported React module.
  icon: (props: React.SVGProps<SVGSVGElement>) => React.ReactElement;
}

export interface Resource {
    id: number;
    titleKey: string;
    typeKey: string;
    topicKey: string;
}

export interface Project {
    id: number;
    titleKey: string;
    descriptionKey: string;
    imageUrl: string;
    githubUrl: string;
}