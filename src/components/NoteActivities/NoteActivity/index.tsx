import "../styles/note-activity.scss";

import { FC } from "react";
import { Link } from "react-router-dom";
import { NoteActivity as Activity } from "../../../types";

// hooks
import useAuth from "../../../hooks/useAuth";
import useElapsedTime from "../../../hooks/useElapsedTime";
import useClassStrings from "../../../hooks/useClassStrings";

export interface NoteActivityProps {
  noteTitle: string;
  className?: string;
  noteActivity: Activity;
  profileLink: (activity: Activity) => string;
}

const NoteActivity: FC<NoteActivityProps> = (props) => {
  const auth = useAuth();
  const classString = useClassStrings("note-activity", props.className);
  const elapsedTime = useElapsedTime({ from: new Date(props.noteActivity.createdAt) });

  const isInitiator = auth.user?.userId === props.noteActivity.initiator.userId;
  const initiatorTitle = isInitiator ? 'You' : props.noteActivity.initiator.username;
  const activityAction = ["created note", "updated note"].find(action => action === props.noteActivity.action);

  return (
    <div className={ classString }>
      <div className="avatar-wrapper">
        <img className="avatar" alt={ props.noteActivity.initiator.username } src={ props.noteActivity.initiator.avatarUrl } />
      </div>
      <div className="activity-details">
        <h1 className={ "user-details" }>
          <Link className={ "user-name" } to={ props.profileLink(props.noteActivity) } children={ initiatorTitle } />
          <span className={ "elapsed-time" } children={ elapsedTime } />
        </h1>
        <p className={ "activity" }>
          { !activityAction ? props.noteActivity.action : `${activityAction}: "${props.noteTitle}"` }
        </p>
      </div>
    </div>
  );
};

export {
  NoteActivity as default
};