import "./styles/note-details.scss";

import { FC } from "react";
import { Note } from "../../types";
import { formatDate } from "../../utils";

// hooks
import useAuth from "../../hooks/useAuth";
import useUserRole from "../../hooks/useUserRole";
import useClassStrings from "../../hooks/useClassStrings";

// components
import NoteDetail from "./components/NoteDetail";
import NoteDetailsSkeleton from "./components/NoteDetailsSkeleton";

export interface NoteDetailsProps {
  note?: Note;
  isLoading: boolean;
  className?: string;
}

const NoteDetails: FC<NoteDetailsProps> = (props) => {
  const auth = useAuth();
  const userRole = useUserRole({ user: auth.user, note: props.note });
  const classString = useClassStrings("note-details", props.className);

  if (props.isLoading) {
    return <NoteDetailsSkeleton className={ props.className } />;
  };

  return (
    <ul className={ classString }>
      <NoteDetail title="visibility" value={ props?.note?.visibility } />
      <NoteDetail title="author" value={ userRole.isAuthor ? "You" : props?.note?.author?.username || "" } />
      <NoteDetail title="modified" value={ formatDate(new Date(props?.note?.updatedAt || Date.now())) } />
      <NoteDetail title="created" value={ formatDate(new Date(props?.note?.createdAt || Date.now())) } />
    </ul>
  );
};

export {
  NoteDetails as default
};