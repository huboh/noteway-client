import { FC } from 'react';
import { User } from "../../../../types";

export interface UserAvatarProps {
  className?: string;
  user: User;
}

const UserAvatar: FC<UserAvatarProps> = (props) => (
  <div className="user-avatar-wrapper">
    <img className="avatar" src={ props.user.avatarUrl } alt={ props.user.name } />
  </div>
);
;

export {
  UserAvatar as default,
};