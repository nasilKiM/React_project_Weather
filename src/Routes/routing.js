import { createBrowserRouter } from "react-router-dom";
import Layout from "../Components/Layout";
import LandingPage from "../Pages";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <LandingPage /> },

      // {
      // 	path: '/movie/:now_playing',
      // 	element: <NowPlaying />,
      // },
      // {
      // 	path: '/movie/:upcoming',
      // 	element: <UpComing />,
      // },
      // {
      // 	path: '/movie/:top_rated',
      // 	element: <TopRated />,
      // },
    ],
  },
]);

export default router;
