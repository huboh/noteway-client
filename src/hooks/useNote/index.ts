import { Note } from "../../types";
import { NOTE } from "../../graphql/query";
import { useQuery } from "@apollo/client";

interface UseNoteProps {
  noteId: string;
}

const useNote = (props: UseNoteProps) => useQuery<{ note: Note; }>(NOTE, {
  fetchPolicy: "cache-and-network",
  variables: { noteId: props.noteId }
});

export {
  useNote as default
};