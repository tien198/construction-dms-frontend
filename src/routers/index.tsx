import Global_Layout from "@/components/global-layout";
import { Home } from "@/pages/construction/home/Home";
import ConstructionCreate from "@/pages/construction/tv-tt-create/ConstructionCreate";
import SubmissionEdit from "@/pages/construction/tv-tt-edit/SubmissionEdit";
// import SubmissionEdit from "@/pages/construction/edit/SubmissionEdit";

import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Global_Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "tao-cong-trinh",
        element: <ConstructionCreate />,
        action: (args) =>
          import("../pages/construction/tv-tt-create/action").then((m) =>
            m.initConstructionAction(args),
          ),
      },

      {
        path: "cong-trinh/tv-tt/:id",
        element: <SubmissionEdit />,
        action: (args) =>
          import("../pages/construction/tv-tt-edit/action").then((m) =>
            m.editAction(args),
          ),
      },

      {
        path: "cong-trinh/bcktkt/:id",
        element: <SubmissionEdit />,
      },
    ],
  },
]);
