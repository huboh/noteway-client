export type Theme = 'dark' | 'light' | 'system';

export type NoteSorting = 'updatedAt' | 'createdAt' | 'title';

export interface MongoDBObject {
  id: string;
  createdAt: string;
  updatedAt: string;
}

export interface Preferences {
  theme: Theme;
  sortNoteBy: NoteSorting;
}
export interface Connection<T> {
  nodes: T[];
  totalNodes: number;
  pageInfo: {
    limit: number,
    total: number,
    nextPage: number,
    currentPage: number,
    previousPage: number,
    hasNextPage: boolean,
    hasPreviousPage: boolean,
  };
}

export interface User extends MongoDBObject {
  archivedNotes: Connection<Note>;
  notes: Connection<Note>;
  preferences: Preferences;
  isDeactivated: boolean;
  isEmailVerified: boolean;
  avatarUrl?: string;
  password?: string;
  username: string;
  userId: string;
  email: string;
  name?: string;
}

export interface Note extends MongoDBObject {
  collaborators: Collaborator[];
  attachments: NoteAttachment[];
  activities: NoteActivity[];
  visibility: NoteVisibility;
  isAddedToTrash: boolean;
  isArchived: boolean;
  isStarred: boolean;
  isPinned: boolean;
  isPrivate: boolean;
  starredBy: User[];
  content: string;
  authorId: string;
  noteId: string;
  title: string;
  author: User;
  tag: Tag;
}

export interface Tag extends MongoDBObject {
  color: string;
  label: string;
  tagId: string;
  userId: string;
}

export interface NoteActivity extends MongoDBObject {
  action: string;
  noteId: string;
  initiator: User;
  activityId: string;
}

export interface NoteAttachment extends MongoDBObject {
  noteId: string;
  fileType: string;
  fileSize: number;
}

export interface Collaborator extends MongoDBObject {
  noteId: string;
  userId: string;
  collaboratorId: string;
  createdBy: User;
  role: CollaboratorRole;
}