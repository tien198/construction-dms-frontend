import Global_Layout from "@/components/global-layout";
import ConstructionCreate from "@/pages/construction/kh-create/ConstructionCreate";
import SubmissionEdit from "@/pages/construction/kh-edit/SubmissionEdit";
// import SubmissionEdit from "@/pages/construction/edit/SubmissionEdit";

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
          import("../pages/construction/kh-create/action").then((m) =>
            m.initConstructionAction(args),
          ),
      },

      {
        path: "cong-trinh/:id",
        element: <SubmissionEdit />,
      },
    ],
  },
]);
