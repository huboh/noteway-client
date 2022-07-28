import "./styles/users-avatars.scss";

import { FC } from "react";
import { User } from "../../types";
import { joinClassStrings } from "../../utils";

// components
import UserAvatar from "./UserAvatar";

export interface UsersAvatarsProps {
  users: User[];
  className?: string;
}

const UsersAvatars: FC<UsersAvatarsProps> = (props) => {
  const avatarsLimit = 4;
  const users = props.users ?? [];
  const classString = joinClassStrings("users-avatars", props.className);

  return !users.length ? null : (
    <ul className={ classString }>
      { users.slice(0, avatarsLimit).map((user) => <UserAvatar key={ user.userId } user={ user } />) }
      { !(users.length > avatarsLimit) ? null : <UserAvatar.Remainder remainder={ users.length - avatarsLimit } /> }
    </ul>
  );
};

export {
  UsersAvatars as default
};