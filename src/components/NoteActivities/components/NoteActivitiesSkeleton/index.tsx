import "../../styles/note-activities.scss";
import "../../styles/note-actiities-skeleton.scss";

import { FC } from "react";
import useClassStrings from "../../../../hooks/useClassStrings";
import NoteActivitySkeleton from "../NoteActivitySkeleton";

export interface NoteActivitiesSkeletonProps {
  className?: string;
  skeletonCount?: number;
}

const NoteActivitiesSkeleton: FC<NoteActivitiesSkeletonProps> = (props) => {
  const count = props.skeletonCount || 0;
  const activities = Array.from({ length: count > 0 ? count : 3 });
  const classString = useClassStrings("note-activities skeleton", props.className);

  return (
    <ul className={ classString }>
      { activities.map((_, i) => <li key={ i } children={ <NoteActivitySkeleton /> } />) }
    </ul>
  );
};

export {
  NoteActivitiesSkeleton as default
};