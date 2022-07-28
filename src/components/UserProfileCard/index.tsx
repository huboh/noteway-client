import "./styles/user-profile-card.scss";

import { User } from "../../types";
import { TbMail } from 'react-icons/tb';
import { FC, useMemo } from 'react';
import { joinClassStrings } from "../../utils";

// components
import Button from "../Button";
import UserAvatar from "./components/UserAvatar";
import UserDetails from "./components/UserDetails";

export interface UserProfileCardProps {
  className?: string;
  user: User;
}

const UserProfileCard: FC<UserProfileCardProps> = (props) => {
  const profileLink = `/${props.user.username}`;
  const classString = useMemo(() => joinClassStrings("user-profile-card", props.className),
    [props.className]
  );

  return (
    <div className={ classString }>
      <div className="header">
        <UserAvatar user={ props.user } />
        <UserDetails user={ props.user } />
      </div>
      <div className="footer">
        <Button.Link text={ "view profile" } to={ profileLink } />
        <Button.Icon title={ "send mail" } icon={ <TbMail /> } />
      </div>
    </div>
  );
};

export {
  UserProfileCard as default,
};