import { createBrowserRouter } from "react-router-dom";
import Layout from "../Components/Layout";
import LandingPage from "../Pages";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [{ path: "/", element: <LandingPage /> }],
  },
]);

export default router;
