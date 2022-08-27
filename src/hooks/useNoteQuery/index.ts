import { Note } from "../../types";
import { NOTE } from "../../graphql/query";
import { useQuery, QueryHookOptions } from "@apollo/client";

export interface NoteQueryResult {
  note: Note;
}

export interface UseNoteQueryProps extends QueryHookOptions<NoteQueryResult> {
  noteId: string;
}

export const useNoteQuery = ({ noteId, ...props }: UseNoteQueryProps) => {
  const variables = { ...(props.variables || {}), noteId };

  return useQuery<NoteQueryResult>(NOTE, {
    ...props, variables
  });
};

export {
  useNoteQuery as default
};