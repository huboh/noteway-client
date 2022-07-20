import { FC, lazy } from "react";
import { Route, Routes } from "react-router-dom";

import * as routes from "../../constants/routes";
import * as DashboardViews from '../../views/Dashboard/views';

// views
const Auth = lazy(() => import("../../views/Auth"));
const Home = lazy(() => import("../../views/Home"));
const Dashboard = lazy(() => import("../../views/Dashboard"));

const Router: FC = () => (
  <Routes>
    <Route index element={ <Home /> } />
    <Route path={ routes.LOGIN } element={ <Auth /> } />
    <Route path={ routes.SIGNUP } element={ <Auth /> } />
    <Route path={ routes.FORGOT_PASSWORD } element={ <Auth /> } />
    <Route path={ routes.DASHBOARD } element={ <Dashboard /> }>
      <Route index element={ <DashboardViews.Notes /> } />
      <Route path={ routes.TAGS } element={ <DashboardViews.Tags /> } />
      <Route path={ routes.NOTES } element={ <DashboardViews.Notes /> } />
      <Route path={ routes.TRASH } element={ <DashboardViews.Trash /> } />
      <Route path={ routes.PROFILE } element={ <DashboardViews.Notes /> } />
      <Route path={ routes.SETTINGS } element={ <DashboardViews.Notes /> } />
      <Route path={ routes.ARCHIVED_NOTES } element={ <DashboardViews.ArchivedNotes /> } />
    </Route>
  </Routes>
);

export {
  Router as default
};