import Global_Layout from "@/components/global-layout";
import { Home } from "@/pages/construction/home/Home";

import { createBrowserRouter } from "react-router";
import { constructionRoute } from "./construction-route";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Global_Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      constructionRoute,
    ],
  },
]);
