import { FC } from "react";

// hooks
import useAuth from '../../../../hooks/useAuth';

export interface NotesProps { }


const Notes: FC<NotesProps> = (props) => {
  const { isLoading } = useAuth();

  if (isLoading) {
    return <p>loading notes</p>;
  }

  return (
    <section className="dashboard-outlet notes-view">
      <p>notes</p>
    </section>
  );
};


export {
  Notes as default
};