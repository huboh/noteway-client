import { useQuery } from "@apollo/client";
import { NoteActivity } from "../../types";
import { NOTE_ACTIVITIES } from "../../graphql/query";

export interface NoteActivitiesQueryResult {
  note: {
    activities: NoteActivity[];
  };
}

export interface UseNoteActivitiesQueryProps {
  noteId: string;
}

const useNoteActivities = (props: UseNoteActivitiesQueryProps) => useQuery<NoteActivitiesQueryResult>(NOTE_ACTIVITIES, {
  variables: { noteId: props.noteId },
});

export {
  useNoteActivities as default
};