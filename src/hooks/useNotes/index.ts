import { NOTES } from "../../graphql/query";
import { useQuery } from "@apollo/client";
import { Note, Connection } from "../../types";

interface UseNotesProps {
  authorId: string;
}

const useNotes = (props: UseNotesProps) => useQuery<{ notes: Connection<Note>; }>(NOTES, {
  fetchPolicy: "cache-and-network",
  variables: { authorId: props.authorId },
});

export {
  useNotes as default
};