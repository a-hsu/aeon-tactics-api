import type { DateTime } from 'luxon';

export interface User {
  id: string;
  email: string;
  emailVerified?: boolean;
  username: string;
  password: string;
  userProfile?: UserProfile;
  player?: Player;
  scopeIDs: string[];
  scopes: Scope[];
  posts: Post[];
  lastLogin?: DateTime;
  createdAt?: DateTime;
  updatedAt?: DateTime;
}

export interface Scope {
  id: string;
  name: string;
  userIDs: string[];
  users: User[];
  createdAt: Date;
  updatedAt?: Date;
}

export interface UserProfile {
  id: string;
  user: User;
  userId: string;
}

export interface Player {
  id: string;
  playerName: string;
  user: User;
  userId: string;
  level: number;
  experience: number;
  gold: number;
}

export interface Post {
  id: string;
  author: User;
  authorID: string;
  tags: Tag[];
  tagIDs: string[];
  title: string;
  subtitle: string;
  content: string;
}

export interface Tag {
  id: string;
  name: string;
  postIDs: string[];
  posts: Post[];
}
