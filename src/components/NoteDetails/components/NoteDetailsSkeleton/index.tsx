import "../../styles/note-details.scss";
import "../../styles/note-details-skeleton.scss";

import { FC } from "react";
import NoteDetail from "../NoteDetail";
import useClassStrings from "../../../../hooks/useClassStrings";

export interface NoteDetailsSkeletonProps {
  className?: string;
}

const NoteDetailsSkeleton: FC<NoteDetailsSkeletonProps> = (props) => {
  const classString = useClassStrings("note-details skeleton", props.className);

  return (
    <ul className={ classString }>
      <NoteDetail title="" value={ "" } />
      <NoteDetail title="" value={ "" } />
      <NoteDetail title="" value={ "" } />
      <NoteDetail title="" value={ "" } />
    </ul >
  );
};

export {
  NoteDetailsSkeleton as default
};