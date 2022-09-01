import { FC } from "react";

// hooks
import useAuth from '../../../../hooks/useAuth';

export interface ArchivedNotesProps { }


const ArchivedNotes: FC<ArchivedNotesProps> = (props) => {
  const { isLoading } = useAuth();

  if (isLoading) {
    return <p>loading archived notes</p>;
  }

  return (
    <section className="dashboard-outlet archived-notes-view">
      <p>archived notes</p>
    </section>
  );
};


export {
  ArchivedNotes as default
};