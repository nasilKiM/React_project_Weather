import { useState } from "react";
import { Outlet } from "react-router-dom";
import DefaultHeader from "./Header/header";

const Layout = () => {
  const [showHeader, setShowHeader] = useState(true);

  return (
    <>
      {showHeader && <DefaultHeader />}
      <Outlet setShowHeader={setShowHeader} showHeader={showHeader} />
    </>
  );
};

export default Layout;
