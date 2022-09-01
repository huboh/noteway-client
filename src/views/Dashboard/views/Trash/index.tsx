import { FC } from "react";

// hooks
import useAuth from '../../../../hooks/useAuth';

export interface TrashProps { }


const Trash: FC<TrashProps> = (props) => {
  const { isLoading } = useAuth();

  if (isLoading) {
    return <p>loading trash</p>;
  }

  return (
    <section className="dashboard-outlet trash-view">
      <p>trash</p>
    </section>
  );
};


export {
  Trash as default
};