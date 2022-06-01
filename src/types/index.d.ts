export interface MongoDBObject {
  id: string;
  createdAt: string;
  updatedAt: string;
}

export interface User extends MongoDBObject {
  name?: string;
  email: string;
  userId: string;
  username: string;
  password?: string;
  avatarUrl?: string;
  isDeactivated: boolean;
  isEmailVerified: boolean;
  archivedNotes: Note[];
  notes: Note[];
  preferences: {
    theme: ThemePreference;
    sortNoteBy: NoteSorting;
  };
}

export interface Note extends MongoDBObject {
  tag: Tag;
  author: User;
  noteId: string;
  authorId: string;
  title: string;
  content: string;
  isPinned: boolean;
  isPrivate: boolean;
  isStarred: boolean;
  isArchived: boolean;
  isAddedToTrash: boolean;
  visibility: NoteVisibility;
  activities: NoteActivity[];
  attachments: NoteAttachment[];
  collaborators: Collaborator[];
  starredBy: User[];
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