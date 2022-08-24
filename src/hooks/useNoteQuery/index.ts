import { Note } from "../../types";
import { NOTE } from "../../graphql/query";
import { useQuery } from "@apollo/client";

interface UseNoteQueryProps {
  noteId: string;
}

export const useNoteQuery = (props: UseNoteQueryProps) => useQuery<{ note: Note; }>(NOTE, {
  variables: { noteId: props.noteId }
});

export {
  useNoteQuery as default
};