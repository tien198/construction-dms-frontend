import { Period_Nav } from "@/pages/construction/comps/layout/period-nav";
import { Outlet, type RouteObject } from "react-router";
import ConstructionCreate from "@/pages/construction/tv-tt-create/ConstructionCreate";
import SubmissionEdit from "@/pages/construction/tv-tt-edit/SubmissionEdit";

export const constructionRoute: RouteObject = {
  path: "/cong-trinh",
  element: (
    <>
      <Period_Nav />
      <Outlet />
    </>
  ),
  children: [
    {
      path: "tao-moi",
      element: <ConstructionCreate />,
      action: (args) =>
        import("../pages/construction/tv-tt-create/action").then((m) =>
          m.initConstructionAction(args),
        ),
    },

    {
      path: "tv-tt/:id",
      element: <SubmissionEdit />,
      action: (args) =>
        import("../pages/construction/tv-tt-edit/action").then((m) =>
          m.editAction(args),
        ),
    },

    {
      path: "bcktkt/:id",
      element: <SubmissionEdit />,
    },
  ],
};
