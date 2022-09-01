import { User } from "../../../types";
import { joinClassStrings } from "../../../utils";
import { useState, useRef, useMemo, useCallback } from "react";

// hooks
import useEventListener from "../../../hooks/useEventListener";

// components
import UserProfileCard from "../../UserProfileCard";

export interface UserAvatarProps {
  user: User;
  className?: string;
}

export interface RemainderProps {
  remainder: number;
}

export default function UserAvatar(props: UserAvatarProps) {
  const openRef = useRef(0);
  const closeRef = useRef(0);

  const wrapperRef = useRef<HTMLLIElement>(null);
  const [openPopup, setOpenPopup] = useState(false);

  const avatar = props.user.avatarUrl;
  const username = `@${props.user.username}`;
  const openClass = openPopup ? "active" : "";
  const classString = useMemo(() => joinClassStrings("user-avatar", openClass, props.className),
    [openClass, props.className]
  );

  useEventListener({
    target: wrapperRef,
    eventType: ["mouseenter", "mouseleave"],
    eventHandler: useCallback((event) => {
      switch (event.type) {
        case "mouseenter": {
          clearTimeout(closeRef.current);
          openRef.current = setTimeout(setOpenPopup, 500, true);
          break;
        }

        case "mouseleave": {
          clearTimeout(openRef.current);
          closeRef.current = setTimeout(setOpenPopup, 100, false);
          break;
        }

        default: break;
      }
    },
      []
    )
  });

  return (
    <li ref={ wrapperRef } className={ "avatar-wrapper" }>
      <img className={ classString } src={ avatar } alt={ username } />
      { openPopup && <UserProfileCard className={ "avatar-popup" } user={ props.user } /> }
    </li>
  );
};

UserAvatar.Remainder = (props: RemainderProps) => (
  <li className={ "avatar-wrapper" }>
    <span className={ "user-avatar remainder" } children={ `+${props.remainder}` } />
  </li>
);