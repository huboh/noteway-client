import "./account-details.scss";

import { FC } from "react";
import useAuth from '../../../../../../../../hooks/useAuth';

const AccountDetails: FC = () => {
  const { user } = useAuth();

  if (!user) {
    return null;
  }

  return (
    <div className="user-details-wrapper">
      <span className="user-avatar-wrapper">
        <img className="user-avatar" src={ user.avatarUrl } alt={ user.username } />
      </span>
      <span className="user-details">
        <span className="user-email">{ user.email }</span>
        <span className="user-username">{ `@${user.username}`.trim() }</span>
      </span>
    </div>
  );
};


export {
  AccountDetails as default
};