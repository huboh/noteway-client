import { FC } from "react";

export interface NoteDetailsProps {
  title: string;
  value: string;
}

const NoteDetails: FC<NoteDetailsProps> = (props) => (
  <li className={ "detail" }>
    <span className={ "title" } children={ props.title } />
    <span className={ "value" } children={ props.value } />
  </li>
);

export {
  NoteDetails as default
};