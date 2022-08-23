import "./styles/notes.scss";

import { FC } from "react";

// hooks
import useAuth from '../../../../hooks/useAuth';
import useNotes from '../../../../hooks/useNotes';
import usePageTitle from './hooks/usePageTitle';
import useDashboard from "../../hooks/useDashboard";
import useClassStrings from '../../../../hooks/useClassStrings';
import useDocumentTitle from "../../../../hooks/useDocumentTitle";

// components
import Header from "./components/Header";
import ErrorView from "./components/ErrorView";
import SubView from "../../../../components/SubView";
import UserNotes from "../../../../components/Notes";

export const Notes: FC = () => {
  const auth = useAuth();
  const home = useDashboard();
  const query = useNotes({ authorId: auth.user?.userId! });
  const pageTitle = usePageTitle(query.data?.notes?.totalNodes);
  const classString = useClassStrings("notes-view", query.loading ? "loading" : "");

  useDocumentTitle(pageTitle);

  if (query.error || (!query.loading && !query.data?.notes)) {
    return <ErrorView error={ query.error! } onRetry={ query.refetch } />;
  };

  // TODO: implement filters & pagination

  return (
    <SubView className={ classString }>
      <Header showButton={ true } layout={ home.viewLayout } onLayoutSelect={ home.setViewLayout } />
      <UserNotes error={ query.error } layout={ home.viewLayout } loading={ query.loading } notes={ query.data?.notes?.nodes ?? [] } />
    </SubView>
  );
};

export {
  Notes as default
};