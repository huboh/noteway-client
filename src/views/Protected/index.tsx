import { FC, lazy } from "react";
import useUser from "../../hooks/useUser";


const Home = lazy(() => import("../Home"));
const Dashboard = lazy(() => import("../Dashboard"));

const Protected: FC = () => {
  const { isLoggedIn, isLoading } = useUser();

  if (isLoading) return null;
  if (isLoggedIn) return <Dashboard />;

  return (
    <Home />
  );
};


export {
  Protected as default
};