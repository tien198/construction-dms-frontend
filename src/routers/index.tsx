import { Global_Layout } from "@/global-layout/global-layout";

import { createBrowserRouter } from "react-router";
import { constructionRoute } from "./construction-route";
import { bidderRoute } from "./bidder-route";
import { contractRoute } from "./contract-route";
import { Home } from "@/pages/home/Home";

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
      bidderRoute,
      contractRoute,
    ],
  },
]);
