import Global_Layout from "@/components/global-layout";
import ConstructionCreate from "@/pages/create/ConstructionCreate";

import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Global_Layout />,
    children: [
      {
        path: "tao-cong-trinh",
        element: <ConstructionCreate />,
        action: (args) =>
          import("../pages/create/action").then((m) =>
            m.initConstructionAction(args),
          ),
      },
    ],
  },
]);
