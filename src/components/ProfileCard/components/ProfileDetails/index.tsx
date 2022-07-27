import { FC } from 'react';
import { User } from "../../../../types";

export interface ProfileDetailsProps {
  className?: string;
  user: User;
}

const ProfileDetails: FC<ProfileDetailsProps> = (props) => (
  <div className="profile-details-wrapper">
    <h1 className="name" children={ props.user.username } />
    <p className="email" children={ props.user.email } />
  </div>
);
;

export {
  ProfileDetails as default,
};