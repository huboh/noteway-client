import "../../styles/note-activity.scss";
import "../../styles/note-activity-skeleton.scss";

import { FC } from "react";

const NoteActivitySkeleton: FC = (props) => (
  <div className={ "note-activity skeleton" }>
    <div className="avatar-wrapper">
      <span className="avatar" />
    </div>
    <div className="activity-details">
      <h1 className={ "user-details" }>
        <span className={ "user-name" } />
      </h1>
      <span className={ "activity" } />
      <span className={ "activity" } />
    </div>
  </div>
);

export {
  NoteActivitySkeleton as default
};