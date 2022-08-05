import "./styles/note-details.scss";

import { Note } from "../../types";
import { FC } from "react";
import { formatDate } from "../../utils";

// hooks
import useAuth from "../../hooks/useAuth";
import useUserRole from "../../hooks/useUserRole";
import useClassStrings from "../../hooks/useClassStrings";

// components
import NoteDetail from "./components/NoteDetail";
import NoteDetailsSkeleton from "./components/NoteDetailsSkeleton";

export interface NoteDetailsProps {
  note: Note;
  isLoading: boolean;
  className?: string;
}

const NoteDetails: FC<NoteDetailsProps> = (props) => {
  const { user } = useAuth();
  const { isAuthor } = useUserRole({ user, note: props.note });
  const classString = useClassStrings("note-details", props.className);

  if (props.isLoading) return (
    <NoteDetailsSkeleton className={ props.className } />
  );

  return (
    <ul className={ classString }>
      <NoteDetail title="visibility" value={ props.note.visibility } />
      <NoteDetail title="author" value={ isAuthor ? "You" : props.note.author.username } />
      <NoteDetail title="modified" value={ formatDate(new Date(props.note.updatedAt)) } />
      <NoteDetail title="created" value={ formatDate(new Date(props.note.createdAt)) } />
    </ul>
  );
};

export {
  NoteDetails as default
};