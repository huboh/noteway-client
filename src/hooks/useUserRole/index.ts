import { useMemo } from "react";
import { Note, User } from "../../types";

interface UseUserRoleProps {
  user?: User | null;
  note?: Note | null;
}

const useUserRole = (props: UseUserRoleProps) => {
  const isAuthor = useMemo(() => props.user?.userId === props.note?.authorId, [props.note?.authorId, props.user?.userId]);
  const isViewer = useMemo(() => props.note?.collaborators?.find?.((collaborator) => collaborator?.user?.userId === props.user?.userId)?.role === "viewer", [props.note?.collaborators, props.user?.userId]);
  const isEditor = useMemo(() => props.note?.collaborators?.find?.((collaborator) => collaborator?.user?.userId === props.user?.userId)?.role === "editor", [props.note?.collaborators, props.user?.userId]);
  const isCollaborator = useMemo(() => Boolean(props.note?.collaborators?.find?.((collaborator) => collaborator?.user?.userId === props.user?.userId)), [props.note?.collaborators, props.user?.userId]);

  return {
    isAuthor,
    isViewer,
    isEditor,
    isCollaborator,
  };
};

export {
  useUserRole as default
};