import { Period_Nav } from "@/pages/construction/comps/layout/period-nav";
import { Outlet, type RouteObject } from "react-router";
import { KhLcnt as KhLcntInit } from "@/pages/construction/kh-lcnt-init/ConstructionInitializer";
import { KhLcnt } from "@/pages/construction/kh-lcnt-detail/Detail";
import { Bcktkt } from "@/pages/construction/bcktkt-detail/BcktktDetail";

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
      element: <KhLcntInit.Create />,
      action: (args) =>
        import("../pages/construction/kh-lcnt-init/action").then((m) =>
          m.initConstructionAction(args),
        ),
    },

    {
      path: "kh-lcnt/:con-id",
      element: <KhLcnt.Detail />,
      action: (args) =>
        import("../pages/construction/kh-lcnt-detail/action").then((m) =>
          m.editAction(args),
        ),
    },

    {
      path: "bcktkt/:con-id",
      element: <Bcktkt.Detail />,
      children: [
        {
          path: "tao-moi",
          action: (args) =>
            import("../pages/construction/bcktkt-detail/actions/create-action").then(
              (m) => m.createBcktktAction(args),
            ),
        },
        {
          path: "chinh-sua",
          action: (args) =>
            import("../pages/construction/bcktkt-detail/actions/edit-action").then(
              (m) => m.editBcktktAction(args),
            ),
        },
      ],
    },
  ],
};
