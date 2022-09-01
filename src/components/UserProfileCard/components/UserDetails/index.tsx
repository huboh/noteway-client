import { FC } from 'react';
import { User } from "../../../../types";

export interface UserDetailsProps {
  className?: string;
  user: User;
}

const UserDetails: FC<UserDetailsProps> = (props) => (
  <div className="user-details-wrapper">
    <h1 className="name" children={ props.user.username } />
    <p className="email" children={ props.user.email } />
  </div>
);
;

export {
  UserDetails as default,
};