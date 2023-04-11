import { Outlet } from "react-router-dom";
import DefaultHeader from "./Header/header";

const Layout = () => {
  return (
    <>
      <DefaultHeader />
      <Outlet />
    </>
  );
};

export default Layout;
