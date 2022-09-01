import "./styles/profile-card.scss";

import { User } from "../../types";
import { FC, useMemo } from 'react';
import { joinClassStrings } from "../../utils";

// components
import ProfileAvatar from "./components/ProfileAvatar";
import ProfileDetails from "./components/ProfileDetails";

export interface ProfileCardProps {
  className?: string;
  user: User;
}

const ProfileCard: FC<ProfileCardProps> = (props) => {
  const classString = useMemo(() => joinClassStrings("profile-card", props.className),
    [props.className]
  );

  return (
    <div className={ classString }>
      <ProfileAvatar user={ props.user } />
      <ProfileDetails user={ props.user } />
    </div>
  );
};

export {
  ProfileCard as default,
};