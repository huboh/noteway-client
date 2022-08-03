import "./styles/note-activities.scss";

import { FC, useCallback } from "react";
import { NoteActivity as NoteActivity_ } from "../../types";

// hooks
import useClassStrings from "../../hooks/useClassStrings";
import useNoteActivities from "../../hooks/useNoteActivities";

// components
import NoteActivity from "./NoteActivity";

export interface NotesProps {
  noteId: string;
  noteTitle: string;
  baseLink?: string;
  className?: string;
}

const NoteActivities: FC<NotesProps> = (props) => {
  const baseLink = props.baseLink || "";
  const activities = useNoteActivities({ noteId: props.noteId });
  const classString = useClassStrings("note-activities", props.className);
  const profileLink = useCallback((activity: NoteActivity_) => baseLink + activity.initiator.username, [baseLink]);

  return (
    <ul className={ classString }>
      { activities.data?.note?.activities?.map?.((activity) => (
        <li key={ activity.activityId }>
          <NoteActivity profileLink={ profileLink } noteTitle={ props.noteTitle } noteActivity={ activity } />
        </li>
      )) }
    </ul >
  );
};

export {
  NoteActivities as default
};