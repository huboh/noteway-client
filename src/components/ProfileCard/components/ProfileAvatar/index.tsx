import { FC } from 'react';
import { User } from "../../../../types";

export interface ProfileAvatarProps {
  className?: string;
  user: User;
}

const ProfileAvatar: FC<ProfileAvatarProps> = (props) => (
  <div className="profile-avatar-wrapper">
    <img className="avatar" src={ props.user.avatarUrl } alt={ props.user.name } />
  </div>
);
;

export {
  ProfileAvatar as default,
};