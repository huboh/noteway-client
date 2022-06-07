import { FC } from "react";

// hooks
import useAuth from '../../../../hooks/useAuth';

export interface TagsProps { }


const Tags: FC<TagsProps> = (props) => {
  const { isLoading } = useAuth();

  if (isLoading) {
    return <p>loading tags</p>;
  }

  return (
    <section className="dashboard-outlet tags-view">
      <p>tags</p>
    </section>
  );
};


export {
  Tags as default
};