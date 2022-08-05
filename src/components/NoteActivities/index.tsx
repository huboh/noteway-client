import "./styles/note-activities.scss";

import { FC, useCallback } from "react";
import { NoteActivity as NoteActivity_ } from "../../types";

// hooks
import useClassStrings from "../../hooks/useClassStrings";
import useNoteActivities from "../../hooks/useNoteActivities";

// components
import NoteActivity from "./components/NoteActivity";
import NoteActivitiesSkeleton from "./components/NoteActivitiesSkeleton";

export interface NotesProps {
  noteId: string;
  noteTitle: string;
  baseLink?: string;
  className?: string;

  skeletonCount?: number;
}

const NoteActivities: FC<NotesProps> = (props) => {
  const baseLink = props.baseLink || "";
  const activities = useNoteActivities({ noteId: props.noteId });
  const classString = useClassStrings("note-activities", props.className);
  const profileLink = useCallback((activity: NoteActivity_) => baseLink + activity.initiator.username, [baseLink]);

  if (activities.loading) return (
    <NoteActivitiesSkeleton className={ props.className } skeletonCount={ props.skeletonCount || 3 } />
  );

  return (
    <ul className={ classString }>
      { activities.data?.note?.activities?.map?.((activity) => (
        <li key={ activity.activityId } children={ <NoteActivity profileLink={ profileLink } noteTitle={ props.noteTitle } noteActivity={ activity } /> } />
      )) }
    </ul >
  );
};

export {
  NoteActivities as default
};